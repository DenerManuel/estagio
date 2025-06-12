import { createItemCard } from '../item/item-card.js';
import { createItemName } from '../item/item-name.js';
import { positionItemContainers } from './itemContainerPosition.js';
import { restoreAvailableItems } from './randomItemManager.js';

export function createItemContainers(category, appContainer) {
  const NUMBER_OF_ITEM_CONTAINERS = 10;
  const itemCards = []
  const itemNames = []

  for (let i = 0; i < NUMBER_OF_ITEM_CONTAINERS; i++) {
    const itemCard = createItemCard(category)
    const itemName = createItemName(itemCard.item.name, appContainer)

    itemCards.push(itemCard)
    itemNames.push(itemName)
  }
  restoreAvailableItems()
  positionItemContainers(itemCards, itemNames)

  return [itemCards, itemNames]
}
