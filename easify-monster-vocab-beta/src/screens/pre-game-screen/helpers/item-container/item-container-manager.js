import { ItemCard } from '../../components/item/item-card.js';
import { ItemNameContainer } from '../../components/item/item-name-container.js';
import { positionItemContainers } from './item-container-position.js';

export function createItemContainers(category, appContainer) {
  const NUMBER_OF_ITEM_CONTAINERS = 10;
  const itemCards = []
  const itemNames = []

  for (let i = 0; i < NUMBER_OF_ITEM_CONTAINERS; i++) {
    const itemCard = new ItemCard(category, category.items[i])
    const itemName = new ItemNameContainer(appContainer, itemCard.item.name)

    itemCards.push(itemCard)
    itemNames.push(itemName)
  }
  positionItemContainers(itemCards, itemNames)

  return [itemCards, itemNames]
}
