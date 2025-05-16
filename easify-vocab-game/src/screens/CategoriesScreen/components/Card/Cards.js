import { CustomCategoryCard } from '../../../../components/CategoryCard/CustomCategoryCard.js';

export async function loadCards(cardGroup) {
  const cards = [];
  let j = 0

  // Utilizei esse for para criar um determinado número de cards, para fins de teste
  for (let i = 0; i < 30; i++) {
    const card = _createCard(cardGroup[j]);
    cards.push(card);
    j++
    if (j === 3) {
      j = 0
    }
  }
  
  // Utilize esse forEach caso queira criar os cards de acordo com a quantidade de categorias

  // cardGroup.forEach((category) => {
  //   const card = _createCard(category);
  //   cards.push(card);
  // });
  return cards;
}

const _createCard = (category) => {
  return new CustomCategoryCard(category);
};