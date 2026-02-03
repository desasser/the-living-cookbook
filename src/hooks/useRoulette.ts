import { useState } from 'react';
import { Recipe } from '../types/recipe';
import { scoreRecipes } from '../utils/scoringEngine';

export function useRoulette(allRecipes: Recipe[]) {
  const [winner, setWinner] = useState<Recipe | null>(null);

  // Update 'spin' to accept recentProteins AND the filtered list
  const spin = (recentProteins: string[], pool?: Recipe[]) => {
    // 1. Use the pool we passed in, otherwise fall back to all recipes
    const candidateList = pool || allRecipes;

    if (candidateList.length === 0) return;

    // 2. Score the candidates based on history
    const scoredRecipes = scoreRecipes(candidateList, recentProteins);

    // 3. Find the highest score
    const maxScore = Math.max(...scoredRecipes.map(r => r.score));
    
    // 4. Get everyone who tied for the top score
    const topTier = scoredRecipes.filter(r => r.score === maxScore);

    // 5. Pick one at random from the winners
    const randomPick = topTier[Math.floor(Math.random() * topTier.length)];
    
    setWinner(randomPick);
  };

  return { winner, spin, setWinner };
}