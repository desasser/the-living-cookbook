import { useState, useMemo } from 'react';
import { getAllRecipes } from './utils/recipeLoader';
import { useRecipeSearch } from './hooks/useRecipeSearch';
import { useRoulette } from './hooks/useRoulette';
import { useHistory } from './hooks/useHistory';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetail } from './components/RecipeDetail';
import { PlannerView } from './components/PlannerView';
import { Recipe } from './types/recipe';
import './App.css';

const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner', 'Snack'] as const;
type ViewMode = 'instant' | 'planner';

function App() {
  // 1. Data & History Initialization
  const [recipes] = useState<Recipe[]>(() => getAllRecipes());
  const [viewMode, setViewMode] = useState<ViewMode>('instant');
  const { history, recordMeal } = useHistory();

  // 2. UI State
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeMeal, setActiveMeal] = useState<typeof MEAL_TYPES[number] | null>(null);
  const [showComponents, setShowComponents] = useState(false);

  // 3. Search & Roulette Hooks
  const { query, setQuery, results } = useRecipeSearch(recipes);
  const { winner, spin, setWinner } = useRoulette(recipes);

  // 4. Filtering Logic
  // This combines the search results with your active filters (Dinner, Components, etc.)
  const filteredResults = useMemo(() => {
    let list = results;

    // Filter by Meal Type (Dinner, Lunch, etc.)
    if (activeMeal) {
      list = list.filter(r => r.meal.includes(activeMeal));
    }

    // Toggle: Show only Components (sauces) OR only Main Meals
    list = list.filter(r => r.isComponent === showComponents);

    return list;
  }, [results, activeMeal, showComponents]);

  // 5. Scoring Context
  const recentProteins = useMemo(() => 
    history.slice(0, 3).map(h => h.protein), 
    [history]
  );

  // 6. Action Handlers
  const handleRouletteSpin = () => {
    // Only pick from the current filtered list, but ALWAYS exclude components from roulette
    const roulettePool = filteredResults.filter(r => !r.isComponent);
    
    if (roulettePool.length > 0) {
      spin(recentProteins, roulettePool);
    } else {
      alert("No recipes in the current view to pick from!");
    }
  };

  const handleRecordMeal = (id: string, protein: string) => {
    recordMeal(id, protein);
    setWinner(null); // Clear the winner banner once cooked
  };

  return (
    <div className="container">
      <header className="app-header">
        <div>
          <h1 className="brand-title">The Living Cookbook</h1>
          <p className="brand-subtitle">
            {recipes.length} recipes indexed • {history.length} meals recorded
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div className="view-mode-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'instant' ? 'active' : ''}`}
              onClick={() => setViewMode('instant')}
            >
              🎲 Instant
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'planner' ? 'active' : ''}`}
              onClick={() => setViewMode('planner')}
            >
              📅 Planner
            </button>
          </div>
          <button className="btn-roulette" onClick={handleRouletteSpin}>
            🎲 Pick for Me
          </button>
        </div>
      </header>

      {/* Filter and Search Section */}
      {viewMode === 'instant' && (
      <section className="controls">
        <input
          type="text"
          placeholder="Search by title, protein, or tags..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setWinner(null);
          }}
          className="search-input"
        />

        <div className="filter-bar">
          {MEAL_TYPES.map(type => (
            <button 
              key={type}
              className={`chip ${activeMeal === type ? 'active' : ''}`}
              onClick={() => setActiveMeal(activeMeal === type ? null : type)}
            >
              {type}
            </button>
          ))}
          
          <span style={{ borderLeft: '1px solid var(--border)', margin: '0 0.5rem', height: '20px' }} />
          
          <button 
            className={`chip ${showComponents ? 'active' : ''}`}
            onClick={() => setShowComponents(!showComponents)}
          >
            {showComponents ? '📦 View Components' : '🍳 View Meals'}
          </button>
        </div>
      </section>
      )}

      <main>
        {viewMode === 'instant' ? (
          <>
            {/* Roulette Winner Banner */}
            {winner && (
              <section className="winner-banner">
                <h2>Tonight you're cooking: <span>{winner.title}</span>!</h2>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button className="btn-clear" onClick={() => setSelectedRecipe(winner)}>
                    View Recipe
                  </button>
                  <button className="btn-clear" onClick={() => setWinner(null)}>
                    Clear
                  </button>
                </div>
              </section>
            )}

            {/* Recipe Grid - Uses filteredResults instead of results */}
            <div className="recipe-grid">
              {filteredResults.map(recipe => (
                <div 
                  key={recipe.id} 
                  className={winner?.id === recipe.id ? 'highlight-winner' : ''}
                  onClick={() => setSelectedRecipe(recipe)}
                  style={{ cursor: 'pointer' }}
                >
                   <RecipeCard recipe={recipe} />
                </div>
              ))}
            </div>

            {filteredResults.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '3rem' }}>
                No recipes found for this filter.
              </p>
            )}
          </>
        ) : (
          <PlannerView recipes={recipes} />
        )}
      </main>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <RecipeDetail 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)}
          onConfirm={handleRecordMeal}
        />
      )}
    </div>
  );
}

export default App;