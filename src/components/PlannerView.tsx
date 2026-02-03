import { useState, useMemo, useEffect, useRef } from 'react';
import { Recipe } from '../types/recipe';
import { useRecipeSearch } from '../hooks/useRecipeSearch';
import { scoreRecipes } from '../utils/scoringEngine';
import './PlannerView.css';

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
type DayOfWeek = typeof DAYS_OF_WEEK[number];
type MealType = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';

type WeeklyPlan = Record<DayOfWeek, Recipe | null>;

interface PlannerViewProps {
  recipes: Recipe[];
}

export function PlannerView({ recipes }: PlannerViewProps) {
  // State for weekly meal plan — initialize from localStorage draft if present
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan>(() => {
    const empty = DAYS_OF_WEEK.reduce((acc, day) => ({ ...acc, [day]: null }), {} as WeeklyPlan);
    try {
      // If there's a committed plan, prefer that as the initial state
      const committedRaw = localStorage.getItem('weeklyPlanCommitted');
      if (committedRaw) {
        const committed = JSON.parse(committedRaw) as { weekLocked?: boolean; lockedAt?: string; plan?: Record<string, string | null> };
        if (committed.weekLocked && committed.plan) {
          return DAYS_OF_WEEK.reduce((acc, d) => ({ ...acc, [d]: recipes.find(r => r.id === committed.plan![d]) || null }), {} as WeeklyPlan);
        }
      }

      const raw = localStorage.getItem('weeklyPlanDraft');
      if (!raw) return empty;
      const parsed: Record<string, string | null> = JSON.parse(raw);
      // Reconstruct using the current recipes list; if a saved ID no longer exists, leave null
      return DAYS_OF_WEEK.reduce((acc, d) => ({ ...acc, [d]: recipes.find(r => r.id === parsed[d]) || null }), {} as WeeklyPlan);
    } catch {
      return empty;
    }
  });

  // Suggestion pool state
  const [suggestionPool, setSuggestionPool] = useState<Recipe[]>([]);
  const [activeCategory, setActiveCategory] = useState<MealType | null>(null);

  // Toast/snackbar state with undoable actions
  type Action =
    | { type: 'assign'; day: DayOfWeek; recipe: Recipe; previous: Recipe | null }
    | { type: 'remove'; day: DayOfWeek; recipe: Recipe }
    | { type: 'clear'; assigned: { day: DayOfWeek; recipe: Recipe }[] };

  const [toast, setToast] = useState<string | null>(null);
  const [lastAction, setLastAction] = useState<Action | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  // Commit/lock state for the week (persisted)
  const [weekLocked, setWeekLocked] = useState<boolean>(() => {
    try {
      const raw = localStorage.getItem('weeklyPlanCommitted');
      if (!raw) return false;
      const parsed = JSON.parse(raw) as { weekLocked?: boolean };
      return !!parsed.weekLocked;
    } catch {
      return false;
    }
  });

  const clearToast = () => {
    setToast(null);
    setLastAction(null);
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
  };

  const showToast = (msg: string, action?: Action, ms = 4000) => {
    setToast(msg);
    setLastAction(action ?? null);

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => clearToast(), ms);
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  // Search & filter hooks
  const { query, setQuery } = useRecipeSearch(recipes);

  // Get recipes already in the weekly plan (for exclusion)
  const assignedRecipeIds = useMemo(() => {
    return new Set(
      DAYS_OF_WEEK
        .map(day => weeklyPlan[day]?.id)
        .filter((id): id is string => !!id)
    );
  }, [weeklyPlan]);



  // Persist weeklyPlan drafts to localStorage
  useEffect(() => {
    const toSave: Record<string, string | null> = DAYS_OF_WEEK.reduce((acc, d) => ({ ...acc, [d]: weeklyPlan[d]?.id || null }), {} as Record<string, string | null>);
    localStorage.setItem('weeklyPlanDraft', JSON.stringify(toSave));
  }, [weeklyPlan]);

  // Generate 5 rolled suggestions for the active category
  const handleRoll5 = (category: MealType) => {
    setActiveCategory(category);
    
    // Get recent proteins from weeklyPlan for variety scoring
    const recentProteins = DAYS_OF_WEEK
      .slice(0, 3)
      .map(day => weeklyPlan[day]?.protein)
      .filter((p): p is Recipe['protein'] => !!p);

    // Filter recipes by category and exclude already assigned
    const categoryRecipes = recipes.filter(
      r => r.meal.includes(category) && !assignedRecipeIds.has(r.id)
    );

    // Score and sort by score descending
    const scored = scoreRecipes(categoryRecipes, recentProteins as string[]);
    const top5 = scored.sort((a, b) => b.score - a.score).slice(0, 5);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSuggestionPool(top5.map(({ score, ...recipe }) => recipe));
  };

  // Refresh a single suggestion with next highest-scored recipe
  const handleRefreshSuggestion = (indexToReplace: number) => {
    setActiveCategory(prevCategory => {
      if (!prevCategory) return null;

      // Get recent proteins
      const recentProteins = DAYS_OF_WEEK
        .slice(0, 3)
        .map(day => weeklyPlan[day]?.protein)
        .filter((p): p is Recipe['protein'] => !!p);

      // Get all candidates: category recipes minus assigned minus current pool
      const currentPoolIds = new Set(suggestionPool.map(r => r.id));
      const candidateRecipes = recipes.filter(
        r => r.meal.includes(prevCategory) &&
             !assignedRecipeIds.has(r.id) &&
             !currentPoolIds.has(r.id)
      );

      // Score and get next best
      const scored = scoreRecipes(candidateRecipes, recentProteins as string[]);
      const sortedCandidates = scored.sort((a, b) => b.score - a.score);

      if (sortedCandidates.length > 0) {
        const nextBest = sortedCandidates[0];
        setSuggestionPool(prev => {
          const updated = [...prev];
          updated[indexToReplace] = { ...nextBest };
          return updated;
        });
      }

      return prevCategory;
    });
  };

  // Filter suggestion pool by search query
  const filteredSuggestions = useMemo(() => {
    let list = suggestionPool;

    // Filter by search query
    if (query) {
      const queryLower = query.toLowerCase();
      list = list.filter(r =>
        r.title.toLowerCase().includes(queryLower) ||
        r.protein.toLowerCase().includes(queryLower) ||
        r.tags.some(tag => tag.toLowerCase().includes(queryLower))
      );
    }

    return list;
  }, [suggestionPool, query]);

  // Helpers for suggestion pool management
  const addToSuggestionPool = (recipe: Recipe, prepend = true) => {
    setSuggestionPool(prev => {
      if (prev.some(r => r.id === recipe.id)) return prev;
      return prepend ? [recipe, ...prev] : [...prev, recipe];
    });
  };

  const removeFromSuggestionPool = (recipeId: string) => {
    setSuggestionPool(prev => prev.filter(r => r.id !== recipeId));
  };

  // Move a recipe from the pool into a calendar slot (handles swapping)
  const moveRecipeToDay = (day: DayOfWeek, recipe: Recipe) => {
    if (weekLocked) {
      showToast('Weekly plan is locked. Unlock to make changes.');
      return;
    }

    const prevRecipe = weeklyPlan[day];

    setWeeklyPlan(prev => {
      const prevRecipeInner = prev[day];
      // If there was an existing recipe in the slot, return it to the pool
      if (prevRecipeInner && prevRecipeInner.id !== recipe.id) {
        addToSuggestionPool(prevRecipeInner, false);
      }

      // Assign new recipe
      return { ...prev, [day]: recipe };
    });

    // Ensure the moved recipe is removed from the pool
    removeFromSuggestionPool(recipe.id);

    // Visual confirmation (with undo)
    showToast(`Assigned ${recipe.title} to ${day}`, { type: 'assign', day, recipe, previous: prevRecipe || null });
  };

  // Remove a recipe from a day and return it to the suggestion pool
  const removeRecipeFromDay = (day: DayOfWeek) => {
    if (weekLocked) {
      showToast('Weekly plan is locked. Unlock to make changes.');
      return;
    }

    const prevRecipe = weeklyPlan[day];
    if (!prevRecipe) return;

    // Add previous recipe back to pool
    addToSuggestionPool(prevRecipe, true);

    // Remove from day
    setWeeklyPlan(prev => ({ ...prev, [day]: null }));

    // Visual confirmation (with undo)
    showToast(`Returned ${prevRecipe.title} to pool`, { type: 'remove', day, recipe: prevRecipe });
  };

  // Undo last action
  const undoLastAction = () => {
    const action = lastAction;
    if (!action) return;

    if (action.type === 'assign') {
      const { day, recipe, previous } = action;
      // Remove the assigned recipe from the slot and re-add to pool
      setWeeklyPlan(prev => ({ ...prev, [day]: previous || null }));
      addToSuggestionPool(recipe, true);

      // If previous was restored to pool during assign, remove it from pool
      if (previous) {
        setSuggestionPool(prev => prev.filter(r => r.id !== previous.id));
      }

      showToast(`Undid assignment of ${recipe.title}`);
    } else if (action.type === 'remove') {
      const { day, recipe } = action;
      // Restore the recipe to the day and remove it from the pool
      setWeeklyPlan(prev => ({ ...prev, [day]: recipe }));
      setSuggestionPool(prev => prev.filter(r => r.id !== recipe.id));

      showToast(`Undid removal for ${recipe.title}`);
    } else if (action.type === 'clear') {
      // Re-assign all cleared recipes and remove them from the pool
      const { assigned } = action;
      setWeeklyPlan(prev => {
        const copy = { ...prev };
        assigned.forEach(a => (copy[a.day] = a.recipe));
        return copy;
      });

      setSuggestionPool(prev => prev.filter(r => !assigned.some(a => a.recipe.id === r.id)));
      showToast('Undid clear of weekly plan');
    }

    // finally clear the undo state
    setLastAction(null);
  };

  // Clear all assignments (and return assigned recipes to pool)
  const clearWeeklyPlan = () => {
    if (weekLocked) {
      showToast('Weekly plan is locked. Unlock to make changes.');
      return;
    }

    // capture assigned recipes first (with day info)
    const assignedList = DAYS_OF_WEEK.map(d => ({ day: d, recipe: weeklyPlan[d] })).filter(a => a.recipe) as { day: DayOfWeek; recipe: Recipe }[];

    const assignedRecipes = assignedList.map(a => a.recipe);

    // Return them to the pool, preserving order
    setSuggestionPool(prev => {
      const ids = new Set(prev.map(r => r.id));
      const toAdd = assignedRecipes.filter(r => !ids.has(r.id));
      return [...toAdd, ...prev];
    });

    setWeeklyPlan(DAYS_OF_WEEK.reduce((acc, day) => ({ ...acc, [day]: null }), {} as WeeklyPlan));

    // Also clear persisted draft
    localStorage.removeItem('weeklyPlanDraft');

    // Visual confirmation (with undo payload)
    showToast('Cleared weekly plan', { type: 'clear', assigned: assignedList });
  };

  return (
    <div className="planner-container">
      {/* Left Column: Suggestion Pool */}
      <aside className="suggestion-pool">
        <h2>Suggestion Pool</h2>
        
        <input
          type="text"
          placeholder="Search suggestions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          style={{ marginBottom: '1rem', width: '100%', boxSizing: 'border-box' }}
        />

        <div className="pool-controls">
          <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Roll 5 by Category:
          </p>
          <div className="roll-buttons">
            {(['Breakfast', 'Lunch', 'Dinner'] as const).map(meal => (
              <button 
                key={meal}
                className={`chip ${activeCategory === meal ? 'active' : ''}`}
                onClick={() => handleRoll5(meal)}
              >
                {meal}
              </button>
            ))}
          </div>
        </div>

        {activeCategory && (
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ margin: '0.75rem 0 0.5rem 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Showing {activeCategory} suggestions
            </p>
          </div>
        )}

        <div className="recipe-list">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((recipe, idx) => (
              <div 
                key={recipe.id} 
                className="suggestion-item"
                draggable
                onDragStart={(e) => {
                  e.dataTransfer?.setData('recipeId', recipe.id);
                  e.dataTransfer!.effectAllowed = 'copy';
                }}
              >
                <div style={{ flex: 1 }}>
                  <div className="suggestion-title">{recipe.title}</div>
                  <div className="suggestion-meta">
                    <span>{recipe.protein}</span>
                    <span>Effort: {recipe.effort}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <select id={`assign-select-${recipe.id}`} className="assign-select" defaultValue="Monday">
                    {DAYS_OF_WEEK.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  <button
                    className="btn-assign"
                    onClick={() => {
                      const sel = document.getElementById(`assign-select-${recipe.id}`) as HTMLSelectElement | null;
                      const day = sel?.value as DayOfWeek | undefined;
                      if (day) moveRecipeToDay(day, recipe);
                    }}
                    title="Assign to day"
                    disabled={weekLocked}
                  >
                    ➕
                  </button>

                  <button
                    className="btn-refresh"
                    onClick={() => handleRefreshSuggestion(idx)}
                    title="Refresh this suggestion"
                    disabled={weekLocked}
                  >
                    🔄
                  </button>
                </div>
              </div>
            ))
          ) : activeCategory ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem' }}>
              No {activeCategory.toLowerCase()} recipes available. Try a different category.
            </p>
          ) : (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem' }}>
              Click a category above to roll suggestions.
            </p>
          )}
        </div>
      </aside>

      {/* Right Column: Weekly Calendar */}
      <section className="weekly-calendar">
        <div className="calendar-header">
          <h2>Weekly Meal Plan</h2>

          {!weekLocked ? (
            <button 
              className="btn-commit"
              onClick={() => {
                if (window.confirm('Commit this weekly plan? This will lock the week and prevent edits.')) {
                  const toSave: Record<string, string | null> = DAYS_OF_WEEK.reduce((acc, d) => ({ ...acc, [d]: weeklyPlan[d]?.id || null }), {} as Record<string, string | null>);
                  const committed = { weekLocked: true, lockedAt: new Date().toISOString(), plan: toSave };
                  localStorage.setItem('weeklyPlanCommitted', JSON.stringify(committed));
                  setWeekLocked(true);

                  // remove committed recipes from the suggestion pool
                  setSuggestionPool(prev => prev.filter(r => !Object.values(toSave).includes(r.id)));

                  showToast('Weekly plan committed');
                }
              }}
              style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            >
              Commit Plan
            </button>
          ) : (
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <div className="committed-badge" aria-live="polite">Committed</div>
              <button
                className="btn-uncommit"
                onClick={() => {
                  if (window.confirm('Uncommit weekly plan? This will unlock the week for edits.')) {
                    // Remove committed payload and unlock week
                    const committedRaw = localStorage.getItem('weeklyPlanCommitted');
                    if (committedRaw) {
                      try {
                        const committed = JSON.parse(committedRaw) as { plan?: Record<string, string | null> };
                        // Optionally, re-add committed recipes to the pool if they are not assigned
                        const ids = new Set(Object.values(committed.plan || {}));
                        setSuggestionPool(prev => {
                          const existingIds = new Set(prev.map(r => r.id));
                          const toAdd = recipes.filter(r => ids.has(r.id) && !existingIds.has(r.id) && !assignedRecipeIds.has(r.id));
                          return [...toAdd, ...prev];
                        });
                      } catch {
                        // ignore parse errors
                      }
                    }

                    localStorage.removeItem('weeklyPlanCommitted');
                    setWeekLocked(false);
                    showToast('Weekly plan unlocked');
                  }
                }}
                style={{ fontSize: '0.9rem', padding: '0.4rem 0.6rem' }}
              >
                Uncommit
              </button>
            </div>
          )}

          <button 
            className="btn-clear"
            onClick={clearWeeklyPlan}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            disabled={weekLocked}
          >
            Clear All
          </button>
        </div>

        <div className="calendar-grid">
          {DAYS_OF_WEEK.map(day => {
            const dayRecipe = weeklyPlan[day];
            return (
              <div 
                key={day} 
                className="day-slot"
                onDragOver={(e) => {
                  e.preventDefault();
                  e.dataTransfer!.dropEffect = 'copy';
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  if (weekLocked) {
                    showToast('Weekly plan is locked. Unlock to make changes.');
                    return;
                  }
                  const recipeId = e.dataTransfer?.getData('recipeId');
                  if (recipeId) {
                    const recipe = recipes.find(r => r.id === recipeId);
                    if (recipe) {
                      // Move from pool into the calendar slot
                      moveRecipeToDay(day, recipe);
                    }
                  }
                }}
              >
                <h3>{day}</h3>
                {dayRecipe ? (
                  <div className="assigned-recipe">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <div className="assigned-title">{dayRecipe.title}</div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          className="btn-view"
                          onClick={() => setQuery(dayRecipe.title)}
                          title="Search this recipe"
                          disabled={weekLocked}
                        >
                          🔍
                        </button>
                        <button
                          className="btn-remove"
                          onClick={() => removeRecipeFromDay(day)}
                          title="Remove recipe"
                          disabled={weekLocked}
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    <div className="assigned-meta">
                      <span>{dayRecipe.protein}</span>
                    </div>
                  </div>
                ) : (
                  <div className="empty-slot">Drag recipe here</div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Toast */}
      <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">
        <span>{toast}</span>
        {lastAction && (
          <button className="toast-undo" onClick={undoLastAction} aria-label="Undo last action">Undo</button>
        )}
      </div>
    </div>
  );
}
