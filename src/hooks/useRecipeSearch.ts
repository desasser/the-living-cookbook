import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { Recipe } from '../types/recipe';

export function useRecipeSearch(recipes: Recipe[]) {
  const [query, setQuery] = useState('');

  const fuse = useMemo(() => {
    return new Fuse(recipes, {
      keys: ['title', 'protein', 'tags', 'ingredients.item'],
      threshold: 0.3, // Lower = stricter matching
    });
  }, [recipes]);

  const results = useMemo(() => {
    if (!query) return recipes;
    return fuse.search(query).map(result => result.item);
  }, [fuse, query, recipes]);

  return { query, setQuery, results };
}