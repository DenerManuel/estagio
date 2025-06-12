import { CustomCategoryCard } from "../../components/category-card/CustomCategoryCard.js";

export async function loadCategoriesScreenCards(gameCategories) {
  _validateParameter(gameCategories)

  // Versão real (comente a de teste)
  // return gameCategories.map(category => _createCard(category));

  // Versão de teste (deixar comentada como exemplo)
  const testCards = [];
  for (let i = 0; i < 30; i++) {
    const categoryIndex = i % gameCategories.length;
    testCards.push(_createCard(gameCategories[categoryIndex]));
  }
  return testCards;
}
const _createCard = (category) => {
  _validateCategory(category)
  return new CustomCategoryCard(category);
};

const _validateParameter = (gameCategories) => {
  if (!gameCategories?.length) {
    throw new Error('Nenhuma categoria fornecida.');
  }
}
const _validateCategory = (category) => {
  if (!category?.title || !category?.items) {
    throw new Error('Estrutura de categoria inválida.');
  }
}