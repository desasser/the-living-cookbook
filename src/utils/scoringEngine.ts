import { Recipe } from '../types/recipe';

const WEIGHTS = {
  BASE_STALENESS: 20,    // Points per week since last cooked
  NEW_RECIPE_BONUS: 100, // High priority for things never cooked
  LOW_EFFORT: 30,
  VARIETY_PENALTY: -50,  // Heavy penalty for repeating proteins
};

export function scoreRecipes(recipes: Recipe[], recentProteins: string[] = []): (Recipe & { score: number })[] {
  const now = new Date().getTime();

  return recipes.filter(recipe => !recipe.isComponent).map(recipe => {
    let score = 0;

    // 1. DATE LOGIC (Staleness)
    if (recipe.lastCooked) {
      const lastCookedDate = new Date(recipe.lastCooked).getTime();
      const daysSince = Math.floor((now - lastCookedDate) / (1000 * 60 * 60 * 24));
      
      // Grant points for every week it has been "stale"
      // e.g., 3 weeks stale = 60 points
      const weeksSince = Math.floor(daysSince / 7);
      score += weeksSince * WEIGHTS.BASE_STALENESS;

      // Anti-Repeat: If cooked within the last 4 days, massive penalty
      if (daysSince < 4) score -= 200;
    } else {
      // Never cooked? Top of the pile!
      score += WEIGHTS.NEW_RECIPE_BONUS;
    }

    // 2. PROTEIN VARIETY
    // We check the last 2-3 proteins used to ensure we aren't suggesting Beef 3x in a row
    if (recentProteins.includes(recipe.protein)) {
      score += WEIGHTS.VARIETY_PENALTY;
    }

    // 3. EFFORT MATCHING
    // On average, we prefer Medium or Low effort for random picks
    if (recipe.effort === 'Low') score += WEIGHTS.LOW_EFFORT;
    if (recipe.effort === 'High') score -= 20;

    return { ...recipe, score };
  });
}