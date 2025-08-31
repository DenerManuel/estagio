import { ItemCard } from '../../components/card/ItemCard.js';
import { Card } from '../../components/game-screen-components.js';

export async function loadItemCards(gameCategory) {
  const itemCards = [];

  gameCategory.items.forEach((item, index) => {
    const itemCard = new ItemCard(gameCategory, item);
    itemCards.push(itemCard);
  });
  return itemCards;
}
