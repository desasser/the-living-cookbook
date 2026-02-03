import { Recipe } from '../types/recipe';

interface Props {
  recipe: Recipe;
  onClose: () => void;
  onConfirm: (id: string, protein: string) => void;
}

export function RecipeDetail({ recipe, onClose, onConfirm }: Props) {
  const handleConfirm = () => {
    onConfirm(recipe.id, recipe.protein);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="recipe-detail-header">
          <h1 className="brand-title">{recipe.title}</h1>
          <p className="brand-subtitle">{recipe.protein} • {recipe.effort} Effort • {recipe.source}</p>
        </div>

        <section>
          <h3>Ingredients</h3>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>
                <strong>{ing.amount}</strong> {ing.item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Instructions</h3>
          <div className="instructions-text">
            {recipe.instructions}
          </div>
        </section>

        <button className="btn-success" onClick={handleConfirm}>
          🍽️ I Made This!
        </button>
      </div>
    </div>
  );
}