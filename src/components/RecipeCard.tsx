import { type Recipe } from '../types/recipe';
import styles from './RecipeCard.module.css'; // We'll create this next

interface Props {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: Props) {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <span className={styles.proteinTag}>{recipe.protein}</span>
        <span className={styles.effort}>{recipe.effort} Effort</span>
      </header>
      
      <h2 className={styles.title}>{recipe.title}</h2>
      
      <div className={styles.footer}>
        {recipe.tags.slice(0, 3).map(tag => (
          <span key={tag} className={styles.tag}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}