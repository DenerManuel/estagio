import { PreGameScreen } from "../../screens/pre-game-screen/PreGameScreen.js";

export function createPreGameScreen(screenManager, gameCategory) {
  const category = _getCategory(screenManager, gameCategory)
  return new PreGameScreen(category);
}

const _getCategory = (screenManager, category) => {
  const categories = screenManager.categories;

  // Se houver uma categoria específica, retorna ela
  if (category) {
    return category;
  }
  // Se não houver categoria específica, retorna uma aleatória
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}
