import { Card } from '../../screens/categories-screen/components/card/Card.js';
import { validateCategory } from '../../validators/categories/validateCategory.js';
import { validateGameCategories } from '../../validators/categories/validateGameCategories.js';

export async function loadCategoriesScreenCards(gameCategories) {
  validateGameCategories(gameCategories);

  // Versão real (comente a de teste)
  return gameCategories.map((category) => _createCard(category));

  // Versão de teste (deixar comentada como exemplo)
  // const testCards = [];
  // for (let i = 0; i < 30; i++) {
  //   const categoryIndex = i % gameCategories.length;
  //   testCards.push(_createCard(gameCategories[categoryIndex]));
  // }
  // return testCards;
}

const _createCard = (category) => {
  validateCategory(category);
  const ITEM_FIRST_IMAGE_PATH = `assets/categories/${category.title}/${category.items[0].image}`;

  return new Card(category, ITEM_FIRST_IMAGE_PATH);
};
