import { Recipe } from '../types/recipe';
import { scoreRecipes } from '../utils/scoringEngine';

export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export type MealType = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';

export const DAYS_OF_WEEK: readonly DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

/**
 * Generates 5 rolled suggestions for the specified meal category
 */
export function generateSuggestionPool(recipes: Recipe[], assignedRecipeIds: Set<string>, category: MealType): Recipe[] {
  // Get recent proteins from weeklyPlan for variety scoring
  const recentProteins: string[] = []; // This would be passed in from weekly plan if needed

  // Filter recipes by category and exclude already assigned
  const categoryRecipes = recipes.filter(
    r => r.meal.includes(category) && !assignedRecipeIds.has(r.id)
  );

  // Score and sort by score descending
  const scored = scoreRecipes(categoryRecipes, recentProteins);
  const top5 = scored.sort((a, b) => b.score - a.score).slice(0, 5);

  return top5.map(recipe => recipe);
}

/**
 * Refreshes a single suggestion with the next highest-scored recipe
 */
export function refreshSuggestion(
  recipes: Recipe[],
  assignedRecipeIds: Set<string>,
  currentPoolIds: Set<string>,
  recentProteins: string[],
  category: MealType
): Recipe | null {
  // Get all candidates: category recipes minus assigned minus current pool
  const candidateRecipes = recipes.filter(
    r => r.meal.includes(category) &&
         !assignedRecipeIds.has(r.id) &&
         !currentPoolIds.has(r.id)
  );

  // Score and get next best
  const scored = scoreRecipes(candidateRecipes, recentProteins);
  const sortedCandidates = scored.sort((a, b) => b.score - a.score);

  if (sortedCandidates.length > 0) {
    return sortedCandidates[0];
  }

  return null;
}

/**
 * Adds a recipe to the suggestion pool, optionally at the beginning
 */
export function addToSuggestionPool(pool: Recipe[], recipe: Recipe, prepend = true): Recipe[] {
  if (pool.some(r => r.id === recipe.id)) return pool;
  return prepend ? [recipe, ...pool] : [...pool, recipe];
}

/**
 * Removes a recipe from the suggestion pool by ID
 */
export function removeFromSuggestionPool(pool: Recipe[], recipeId: string): Recipe[] {
  return pool.filter(r => r.id !== recipeId);
}

/**
 * Filters suggestions based on search query
 */
export function filterSuggestions(pool: Recipe[], query: string): Recipe[] {
  if (!query) return pool;

  const queryLower = query.toLowerCase();
  return pool.filter(r =>
    r.title.toLowerCase().includes(queryLower) ||
    r.protein.toLowerCase().includes(queryLower) ||
    r.tags.some(tag => tag.toLowerCase().includes(queryLower))
  );
}

/**
 * Creates a new empty weekly plan
 */
export function createEmptyWeeklyPlan(): Record<DayOfWeek, Recipe | null> {
  return DAYS_OF_WEEK.reduce((acc, day) => ({ ...acc, [day]: null }), {} as Record<DayOfWeek, Recipe | null>);
}

/**
 * Gets recipe IDs that are currently assigned in the weekly plan
 */
export function getAssignedRecipeIds(weeklyPlan: Record<DayOfWeek, Recipe | null>): Set<string> {
  return new Set(
    DAYS_OF_WEEK
      .map(day => weeklyPlan[day]?.id)
      .filter((id): id is string => !!id)
  );
}

/**
 * Serializes weekly plan for localStorage
 */
export function serializeWeeklyPlan(weeklyPlan: Record<DayOfWeek, Recipe | null>): Record<string, string | null> {
  return DAYS_OF_WEEK.reduce((acc, day) => ({ ...acc, [day]: weeklyPlan[day]?.id || null }), {} as Record<string, string | null>);
}

/**
 * Deserializes weekly plan from localStorage
 */
export function deserializeWeeklyPlan(
  serialized: Record<string, string | null>,
  recipes: Recipe[]
): Record<DayOfWeek, Recipe | null> {
  return DAYS_OF_WEEK.reduce((acc, day) => ({ ...acc, [day]: recipes.find(r => r.id === serialized[day]) || null }), {} as Record<DayOfWeek, Recipe | null>);
}