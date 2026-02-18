import { Recipe } from '../types/recipe';
import { DayOfWeek } from '../utils/plannerUtils';

interface WeeklyCalendarProps {
  weeklyPlan: Record<DayOfWeek, Recipe | null>;
  weekLocked: boolean;
  onAssignRecipe: (day: DayOfWeek, recipe: Recipe) => void;
  onRemoveRecipe: (day: DayOfWeek) => void;
  onCommitPlan: () => void;
  onUncommitPlan: () => void;
  onClearPlan: () => void;
  suggestionPool: Recipe[]; // Add suggestion pool to find recipes by ID
  allRecipes: Recipe[]; // Add all recipes to find recipes by ID if not in suggestion pool
}

export function WeeklyCalendar({
  weeklyPlan,
  weekLocked,
  onAssignRecipe,
  onRemoveRecipe,
  onCommitPlan,
  onUncommitPlan,
  onClearPlan,
  suggestionPool,
  allRecipes,
}: WeeklyCalendarProps) {
  const DAYS_OF_WEEK: readonly DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer!.dropEffect = 'copy';
    console.log('Drag over day slot:', e.currentTarget.getAttribute('data-day'));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('Drop event triggered on day slot:', e.currentTarget.getAttribute('data-day'));
    
    if (weekLocked) {
      console.log('Week is locked, cannot assign recipe');
      return;
    }
    
    const recipeId = e.dataTransfer?.getData('recipeId');
    console.log('Recipe ID from drag data:', recipeId);
    
    if (recipeId) {
      // First try to find the recipe from the suggestion pool
      let recipe = suggestionPool.find(r => r.id === recipeId);
      
      // If not found in suggestion pool, try to find it from all recipes
      if (!recipe) {
        recipe = allRecipes.find(r => r.id === recipeId);
      }
      
      if (recipe) {
        console.log('Found recipe:', recipe);
        
        // Get the day from the data attribute or from the element
        const dayElement = e.currentTarget;
        const day = dayElement.getAttribute('data-day') as DayOfWeek;
        console.log('Target day for assignment:', day);
        
        if (day) {
          console.log('Calling onAssignRecipe with day:', day, 'and recipe:', recipe);
          onAssignRecipe(day, recipe);
          console.log('Recipe assignment completed');
        } else {
          console.log('ERROR: Could not determine target day from data-day attribute');
        }
      } else {
        console.log('ERROR: Recipe not found in suggestion pool or all recipes:', recipeId);
        console.log('Current suggestion pool:', suggestionPool);
        console.log('All recipes:', allRecipes);
      }
    } else {
      console.log('ERROR: No recipe ID found in drag data');
    }
  };


  return (
    <section className="weekly-calendar">
      <div className="calendar-header">
        <h2>Weekly Meal Plan</h2>

        {!weekLocked ? (
          <button 
            className="btn-commit"
            onClick={onCommitPlan}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
          >
            Commit Plan
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <div className="committed-badge" aria-live="polite">Committed</div>
            <button
              className="btn-uncommit"
              onClick={onUncommitPlan}
              style={{ fontSize: '0.9rem', padding: '0.4rem 0.6rem' }}
            >
              Uncommit
            </button>
          </div>
        )}

        <button 
          className="btn-clear"
          onClick={onClearPlan}
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
              data-day={day}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e)}
            >
              <h3>{day}</h3>
              {dayRecipe ? (
                <div className="assigned-recipe">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <div className="assigned-title">{dayRecipe.title}</div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        className="btn-view"
                        onClick={() => {
                          // This would trigger search, handled by parent
                        }}
                        title="Search this recipe"
                        disabled={weekLocked}
                      >
                        🔍
                      </button>
                      <button
                        className="btn-remove"
                        onClick={() => onRemoveRecipe(day)}
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
  );
}