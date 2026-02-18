import matter from 'gray-matter';
import { Buffer } from 'buffer';
import { type Recipe } from '../types/recipe';

if (typeof window !== 'undefined') {
  // @ts-expect-error: Adding Buffer to the global window object
  window.Buffer = Buffer;
}

// This Vite-specific feature allows us to grab all .md files in the recipes folder
const recipeFiles = import.meta.glob('../recipes/*.md', { query: '?raw', import: 'default', eager: true });

export const getAllRecipes = (): Recipe[] => {
  return Object.keys(recipeFiles).map((filePath) => {
    const content = recipeFiles[filePath] as string;
    const { data, content: body } = matter(content);

    // Extract the filename to use as an ID (e.g., 'tacos.md' -> 'tacos')
    const id = filePath.split('/').pop()?.replace('.md', '') || filePath;

    return {
      id,
      title: data.title || 'Untitled Recipe',
      source: data.source || 'Unknown',
      meal: data.meal || [],
      isComponent: data.is_component ?? false,
      effort: data.effort || 'Medium',
      season: data.season || ['All-year'],
      protein: data.protein || 'Other',
      cost: data.cost || 'Medium',
      kitchenImpact: data.kitchen_impact || 'Medium', // mapping snake_case from YAML
      repeatability: data.repeatability || 'Medium',
      microwavableLeftovers: !!data.microwavable_leftovers,
      lastCooked: data.last_cooked,
      ingredients: data.ingredients || [],
      instructions: body.trim(),
      tags: data.tags || [],
    };
  });
};