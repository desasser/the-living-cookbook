import { useState, useEffect } from 'react';

export interface HistoryEntry {
  recipeId: string;
  date: string;
  protein: string;
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    const saved = localStorage.getItem('cook_history');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cook_history', JSON.stringify(history));
  }, [history]);

  const recordMeal = (recipeId: string, protein: string) => {
    const newEntry: HistoryEntry = {
      recipeId,
      protein,
      date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
    };
    // Keep the last 50 entries
    setHistory(prev => [newEntry, ...prev].slice(0, 50));
  };

  return { history, recordMeal };
}