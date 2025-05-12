import { getRandomItem } from "../ItemContainer/RandomItemManager.js";
import { CustomItemCard } from "../../../../../components/ItemCard/CustomItemCard.js";

export function createItemCard(category) {
  const item = getRandomItem(category.items)
  const itemCard = new CustomItemCard(category, item);
  itemCard.visible = false
  
  return itemCard
}