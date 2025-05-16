import { createItemCard } from '../Item/ItemCard.js';
import { createItemName } from '../Item/ItemName.js';
import { positionItemContainers } from './ItemContainerPosition.js';
import { restoreAvailableItems } from './RandomItemManager.js';

export function createItemContainers(category, appContainer) {
  const NUMBER_OF_ITEM_CONTAINERS = 10;
  const itemCards = []
  const itemNames = []

  for (let i = 0 ; i < NUMBER_OF_ITEM_CONTAINERS ; i++) {
    const itemCard = createItemCard(category)
    const itemName = createItemName(itemCard.item.name, appContainer)

    itemCards.push(itemCard)
    itemNames.push(itemName)
  }
  restoreAvailableItems()
  positionItemContainers(itemCards, itemNames)

  return [itemCards, itemNames]
}
