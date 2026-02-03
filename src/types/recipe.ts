export type EffortLevel = 'Low' | 'Medium' | 'High';
export type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter' | 'All-year';
export type Protein = 'Beef' | 'Chicken' | 'Pork' | 'Seafood' | 'Vegetarian' | 'Other';
export type Repeatability = 'High' | 'Medium' | 'Low'; 

export interface Ingredient {
  item: string;
  quantity: number | string;
  unit?: string;
}

export interface Recipe {
  id: string;               // The filename (slug)
  title: string;
  source: string;        
  meal: ('Breakfast' | 'Lunch' | 'Dinner' | 'Snack')[];
  isComponent: boolean;

  // Categorization for Weighted Randomizer
  effort: EffortLevel;
  season: Season[];
  protein: Protein;
  cost: 'Low' | 'Medium' | 'High';
  kitchenImpact: 'Low' | 'Medium' | 'High'; // Maps from kitchen_impact
  
  // Logic Constraints
  repeatability: Repeatability;
  microwavableLeftovers: boolean;
  lastCooked?: string;      // ISO Date (YYYY-MM-DD)
  
  // Content
  ingredients: Ingredient[];
  instructions: string;     // The Markdown body text
  tags: string[];
  
  // Optional: Calculated score for the Roulette engine
  score?: number;
}

export interface MealPlan {
  id: string;
  startDate: string;     // ISO Date
  days: {
    [date: string]: {
      breakfast?: string; // Recipe ID
      lunch?: string;     // Recipe ID
      dinner?: string;    // Recipe ID
    };
  };
}