import { useEffect } from 'react';
import { Recipe } from '../types/recipe';
import { useRecipeSearch } from '../hooks/useRecipeSearch';
import { useWeeklyPlanner } from '../hooks/useWeeklyPlanner';
import { WeeklyCalendar } from './WeeklyCalendar';
import { SuggestionPool } from './SuggestionPool';
import './PlannerView.css';

interface PlannerViewProps {
  recipes: Recipe[];
}

export function PlannerView({ recipes }: PlannerViewProps) {
  // Use the custom hook for all state management and business logic
  const {
    weeklyPlan,
    suggestionPool,
    activeCategory,
    toast,
    lastAction,
    weekLocked,
    handleRoll5,
    handleRefreshSuggestion: hookHandleRefreshSuggestion,
    moveRecipeToDay,
    removeRecipeFromDay,
    undoLastAction,
    clearWeeklyPlan,
    commitWeeklyPlan,
    uncommitWeeklyPlan,
  } = useWeeklyPlanner({ recipes });

  // Search & filter hooks
  const { query, setQuery } = useRecipeSearch(recipes);

  // Toast/snackbar state with undoable actions
  useEffect(() => {
    let toastTimer: number | null = null;

    const clearToast = () => {
      if (toastTimer) {
        clearTimeout(toastTimer);
        toastTimer = null;
      }
    };

    if (toast) {
      toastTimer = window.setTimeout(() => clearToast(), 4000);
    }

    return () => clearToast();
  }, [toast]);

  // Handle search query changes
  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  // Handle assigning recipe to a specific day
  const handleAssignRecipe = (day: string, recipe: Recipe) => {
    const dayKey = day as keyof typeof weeklyPlan;
    moveRecipeToDay(dayKey, recipe);
  };

  // Handle refresh suggestion
  const handleRefreshSuggestion = (index: number) => {
    hookHandleRefreshSuggestion(index);
  };

  // Handle commit plan
  const handleCommitPlan = () => {
    if (window.confirm('Commit this weekly plan? This will lock the week and prevent edits.')) {
      commitWeeklyPlan();
    }
  };

  // Handle uncommit plan
  const handleUncommitPlan = () => {
    if (window.confirm('Uncommit weekly plan? This will unlock the week for edits.')) {
      uncommitWeeklyPlan();
    }
  };

  // Handle clear plan
  const handleClearPlan = () => {
    clearWeeklyPlan();
  };

  return (
    <div className="planner-container">
      {/* Left Column: Suggestion Pool */}
      <SuggestionPool
        suggestions={suggestionPool}
        activeCategory={activeCategory}
        weekLocked={weekLocked}
        query={query}
        onQueryChange={handleQueryChange}
        onRoll5={handleRoll5}
        onAssignRecipe={handleAssignRecipe}
        onRefreshSuggestion={handleRefreshSuggestion}
      />

      {/* Right Column: Weekly Calendar */}
      <WeeklyCalendar
        weeklyPlan={weeklyPlan}
        weekLocked={weekLocked}
        onAssignRecipe={moveRecipeToDay}
        onRemoveRecipe={removeRecipeFromDay}
        onCommitPlan={handleCommitPlan}
        onUncommitPlan={handleUncommitPlan}
        onClearPlan={handleClearPlan}
        suggestionPool={suggestionPool}
        allRecipes={recipes}
      />

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