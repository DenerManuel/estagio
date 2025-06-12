import { getRandomItem } from "../item-container/randomItemManager.js";
import { CustomItemCard } from "../../../../components/item-card/CustomItemCard.js";

export function createItemCard(category) {
  const item = getRandomItem(category.items)
  const itemCard = new CustomItemCard(category, item);
  itemCard.visible = false

  return itemCard
}