import { useState, useEffect, useRef, useCallback } from 'react';
import { Recipe } from '../types/recipe';
import { 
  DayOfWeek, 
  MealType, 
  generateSuggestionPool, 
  addToSuggestionPool, 
  removeFromSuggestionPool, 
  serializeWeeklyPlan, 
  deserializeWeeklyPlan,
  getAssignedRecipeIds
} from '../utils/plannerUtils';

type WeeklyPlan = Record<DayOfWeek, Recipe | null>;

interface UseWeeklyPlannerProps {
  recipes: Recipe[];
}

type Action =
  | { type: 'assign'; day: DayOfWeek; recipe: Recipe; previous: Recipe | null }
  | { type: 'remove'; day: DayOfWeek; recipe: Recipe }
  | { type: 'clear'; assigned: { day: DayOfWeek; recipe: Recipe }[] };

export function useWeeklyPlanner({ recipes }: UseWeeklyPlannerProps) {
  // State for weekly meal plan — initialize from localStorage draft if present
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan>(() => {
    const empty = generateEmptyWeeklyPlan();
    try {
      // If there's a committed plan, prefer that as the initial state
      const committedRaw = localStorage.getItem('weeklyPlanCommitted');
      if (committedRaw) {
        const committed = JSON.parse(committedRaw) as { weekLocked?: boolean; lockedAt?: string; plan?: Record<string, string | null> };
        if (committed.weekLocked && committed.plan) {
          return deserializeWeeklyPlan(committed.plan, recipes);
        }
      }

      const raw = localStorage.getItem('weeklyPlanDraft');
      if (!raw) return empty;
      const parsed: Record<string, string | null> = JSON.parse(raw);
      // Reconstruct using the current recipes list; if a saved ID no longer exists, leave null
      return deserializeWeeklyPlan(parsed, recipes);
    } catch {
      return empty;
    }
  });

  // Suggestion pool state
  const [suggestionPool, setSuggestionPool] = useState<Recipe[]>([]);
  const [activeCategory, setActiveCategory] = useState<MealType | null>(null);

  // Toast/snackbar state with undoable actions
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

  // Get recipes already in the weekly plan (for exclusion)
  const assignedRecipeIds = getAssignedRecipeIds(weeklyPlan);

  // Persist weeklyPlan drafts to localStorage
  useEffect(() => {
    const toSave = serializeWeeklyPlan(weeklyPlan);
    localStorage.setItem('weeklyPlanDraft', JSON.stringify(toSave));
  }, [weeklyPlan]);

  // Clear toast
  const clearToast = useCallback(() => {
    setToast(null);
    setLastAction(null);
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
  }, []);

  // Show toast with optional undo action
  const showToast = useCallback((msg: string, action?: Action, ms = 4000) => {
    setToast(msg);
    setLastAction(action ?? null);

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => clearToast(), ms);
  }, [clearToast]);

  // Cleanup toast timer on unmount
  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  // Generate 5 rolled suggestions for the active category
  const handleRoll5 = useCallback((category: MealType) => {
    setActiveCategory(category);
    
    const pool = generateSuggestionPool(recipes, assignedRecipeIds, category);
    setSuggestionPool(pool);
  }, [recipes, assignedRecipeIds]);

  // Refresh a single suggestion with next highest-scored recipe
  const handleRefreshSuggestion = useCallback((indexToReplace: number) => {
    setActiveCategory(prevCategory => {
      if (!prevCategory) return null;

      // Get recent proteins
      const recentProteins = Object.values(weeklyPlan)
        .slice(0, 3)
        .map(recipe => recipe?.protein)
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
          updated[indexToReplace] = nextBest;
          return updated;
        });
      }

      return prevCategory;
    });
  }, [recipes, assignedRecipeIds, suggestionPool, weeklyPlan]);

  // Move a recipe from the pool into a calendar slot (handles swapping)
  const moveRecipeToDay = useCallback((day: DayOfWeek, recipe: Recipe) => {
    if (weekLocked) {
      showToast('Weekly plan is locked. Unlock to make changes.');
      return;
    }

    const prevRecipe = weeklyPlan[day];

    setWeeklyPlan(prev => {
      const prevRecipeInner = prev[day];
      // If there was an existing recipe in the slot, return it to the pool
      if (prevRecipeInner && prevRecipeInner.id !== recipe.id) {
        setSuggestionPool(currentPool => addToSuggestionPool(currentPool, prevRecipeInner, false));
      }

      // Assign new recipe
      return { ...prev, [day]: recipe };
    });

    // Ensure the moved recipe is removed from the pool
    setSuggestionPool(currentPool => removeFromSuggestionPool(currentPool, recipe.id));

    // Visual confirmation (with undo)
    showToast(`Assigned ${recipe.title} to ${day}`, { type: 'assign', day, recipe, previous: prevRecipe || null });
  }, [weekLocked, weeklyPlan, showToast]);

  // Remove a recipe from a day and return it to the suggestion pool
  const removeRecipeFromDay = useCallback((day: DayOfWeek) => {
    if (weekLocked) {
      showToast('Weekly plan is locked. Unlock to make changes.');
      return;
    }

    const prevRecipe = weeklyPlan[day];
    if (!prevRecipe) return;

    // Add previous recipe back to pool
    setSuggestionPool(currentPool => addToSuggestionPool(currentPool, prevRecipe, true));

    // Remove from day
    setWeeklyPlan(prev => ({ ...prev, [day]: null }));

    // Visual confirmation (with undo)
    showToast(`Returned ${prevRecipe.title} to pool`, { type: 'remove', day, recipe: prevRecipe });
  }, [weekLocked, weeklyPlan, showToast]);

  // Undo last action
  const undoLastAction = useCallback(() => {
    const action = lastAction;
    if (!action) return;

    if (action.type === 'assign') {
      const { day, recipe, previous } = action;
      // Remove the assigned recipe from the slot and re-add to pool
      setWeeklyPlan(prev => ({ ...prev, [day]: previous || null }));
      setSuggestionPool(currentPool => addToSuggestionPool(currentPool, recipe, true));

      // If previous was restored to pool during assign, remove it from pool
      if (previous) {
        setSuggestionPool(currentPool => currentPool.filter(r => r.id !== previous.id));
      }

      showToast(`Undid assignment of ${recipe.title}`);
    } else if (action.type === 'remove') {
      const { day, recipe } = action;
      // Restore the recipe to the day and remove it from the pool
      setWeeklyPlan(prev => ({ ...prev, [day]: recipe }));
      setSuggestionPool(currentPool => currentPool.filter(r => r.id !== recipe.id));

      showToast(`Undid removal for ${recipe.title}`);
    } else if (action.type === 'clear') {
      // Re-assign all cleared recipes and remove them from the pool
      const { assigned } = action;
      setWeeklyPlan(prev => {
        const copy = { ...prev };
        assigned.forEach(a => (copy[a.day] = a.recipe));
        return copy;
      });

      setSuggestionPool(currentPool => currentPool.filter(r => !assigned.some(a => a.recipe.id === r.id)));
      showToast('Undid clear of weekly plan');
    }

    // finally clear the undo state
    setLastAction(null);
  }, [lastAction, showToast]);

  // Clear all assignments (and return assigned recipes to pool)
  const clearWeeklyPlan = useCallback(() => {
    if (weekLocked) {
      showToast('Weekly plan is locked. Unlock to make changes.');
      return;
    }

    // capture assigned recipes first (with day info)
    const assignedList = Object.entries(weeklyPlan)
      .map(([day, recipe]) => ({ day: day as DayOfWeek, recipe }))
      .filter(a => a.recipe) as { day: DayOfWeek; recipe: Recipe }[];

    const assignedRecipes = assignedList.map(a => a.recipe);

    // Return them to the pool, preserving order
    setSuggestionPool(currentPool => {
      const ids = new Set(currentPool.map(r => r.id));
      const toAdd = assignedRecipes.filter(r => !ids.has(r.id));
      return [...toAdd, ...currentPool];
    });

    setWeeklyPlan(generateEmptyWeeklyPlan());

    // Also clear persisted draft
    localStorage.removeItem('weeklyPlanDraft');

    // Visual confirmation (with undo payload)
    showToast('Cleared weekly plan', { type: 'clear', assigned: assignedList });
  }, [weekLocked, weeklyPlan, showToast]);

  // Commit the weekly plan
  const commitWeeklyPlan = useCallback(() => {
    const toSave = serializeWeeklyPlan(weeklyPlan);
    const committed = { weekLocked: true, lockedAt: new Date().toISOString(), plan: toSave };
    localStorage.setItem('weeklyPlanCommitted', JSON.stringify(committed));
    setWeekLocked(true);

    // remove committed recipes from the suggestion pool
    setSuggestionPool(currentPool => currentPool.filter(r => !Object.values(toSave).includes(r.id)));

    showToast('Weekly plan committed');
  }, [weeklyPlan, showToast]);

  // Uncommit the weekly plan
  const uncommitWeeklyPlan = useCallback(() => {
    // Remove committed payload and unlock week
    const committedRaw = localStorage.getItem('weeklyPlanCommitted');
    if (committedRaw) {
      try {
        const committed = JSON.parse(committedRaw) as { plan?: Record<string, string | null> };
        // Optionally, re-add committed recipes to the pool if they are not assigned
        const ids = new Set(Object.values(committed.plan || {}));
        setSuggestionPool(currentPool => {
          const existingIds = new Set(currentPool.map(r => r.id));
          const toAdd = recipes.filter(r => ids.has(r.id) && !existingIds.has(r.id) && !assignedRecipeIds.has(r.id));
          return [...toAdd, ...currentPool];
        });
      } catch {
        // ignore parse errors
      }
    }

    localStorage.removeItem('weeklyPlanCommitted');
    setWeekLocked(false);
    showToast('Weekly plan unlocked');
  }, [recipes, assignedRecipeIds, showToast]);

  return {
    // State
    weeklyPlan,
    suggestionPool,
    activeCategory,
    toast,
    lastAction,
    weekLocked,
    assignedRecipeIds,

    // Actions
    handleRoll5,
    handleRefreshSuggestion,
    moveRecipeToDay,
    removeRecipeFromDay,
    undoLastAction,
    clearWeeklyPlan,
    commitWeeklyPlan,
    uncommitWeeklyPlan,
    clearToast,
    setActiveCategory,
  };
}

// Helper function to create empty weekly plan
function generateEmptyWeeklyPlan(): WeeklyPlan {
  return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].reduce((acc, day) => ({ ...acc, [day]: null }), {} as WeeklyPlan);
}

// Import scoreRecipes for use in the hook
import { scoreRecipes } from '../utils/scoringEngine';