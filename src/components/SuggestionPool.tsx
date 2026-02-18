import { Recipe } from '../types/recipe';
import { MealType, filterSuggestions } from '../utils/plannerUtils';

interface SuggestionPoolProps {
  suggestions: Recipe[];
  activeCategory: MealType | null;
  weekLocked: boolean;
  query: string;
  onQueryChange: (query: string) => void;
  onRoll5: (category: MealType) => void;
  onAssignRecipe: (day: string, recipe: Recipe) => void;
  onRefreshSuggestion: (index: number) => void;
}

export function SuggestionPool({
  suggestions,
  activeCategory,
  weekLocked,
  query,
  onQueryChange,
  onRoll5,
  onAssignRecipe,
  onRefreshSuggestion,
}: SuggestionPoolProps) {
  const filteredSuggestions = filterSuggestions(suggestions, query);

  return (
    <aside className="suggestion-pool">
      <h2>Suggestion Pool</h2>
      
      <input
        type="text"
        placeholder="Search suggestions..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
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
              onClick={() => onRoll5(meal)}
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
                console.log('Drag start for recipe:', recipe.id, recipe.title);
                e.dataTransfer?.setData('recipeId', recipe.id);
                e.dataTransfer!.effectAllowed = 'copy';
                console.log('Set drag data with recipe ID:', recipe.id);
              }}
            >
              <div className="suggestion-content">
                <div className="suggestion-title">{recipe.title}</div>
                <div className="suggestion-meta">
                  <span>{recipe.protein}</span>
                  <span>Effort: {recipe.effort}</span>
                </div>
              </div>

              <div className="suggestion-controls">
                <select id={`assign-select-${recipe.id}`} className="assign-select" defaultValue="Monday">
                  {(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const).map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <button
                  className="btn-assign"
                  onClick={() => {
                    const sel = document.getElementById(`assign-select-${recipe.id}`) as HTMLSelectElement | null;
                    const day = sel?.value as string | undefined;
                    if (day) onAssignRecipe(day, recipe);
                  }}
                  title="Assign to day"
                  disabled={weekLocked}
                >
                  ➕
                </button>

                <button
                  className="btn-refresh"
                  onClick={() => onRefreshSuggestion(idx)}
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
  );
}