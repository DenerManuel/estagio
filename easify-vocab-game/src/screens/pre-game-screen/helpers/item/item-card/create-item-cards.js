import { ItemCard } from "../../../components/item/ItemCard.js"
import { positionItemCard } from "./position-item-card.js"

export function createItemCards(category) {
  const itemCards = [];

  for (let i = 0; i < 4; i++) {
    const itemCard = new ItemCard(category, category.items[i]);
    itemCards.push(itemCard);
    positionItemCard(itemCard, i);
  }

  return itemCards;
}
