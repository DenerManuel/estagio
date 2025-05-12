import { CustomCategoryCard } from '../../../../components/CategoryCard/CustomCategoryCard.js';

export async function loadCards(cardGroup) {
  const cards = [];
  let j = 0

  for (let i = 0; i < 30; i++) {
    const card = _createCard(cardGroup[j]);
    cards.push(card);
    j++
    if (j === 3) {
      j = 0
    }
  }
  // cardGroup.forEach((category) => {
  //   const card = _createCard(category);
  //   cards.push(card);
  // });
  return cards;
}

const _createCard = (category) => {
  return new CustomCategoryCard(category);
};