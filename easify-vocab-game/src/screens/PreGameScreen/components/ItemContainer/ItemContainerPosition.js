export function positionItemContainers(itemCards, itemNames = null, startIndex = 0, endIndex = 3) {
  itemCards.forEach((itemCard) => itemCard.visible = false)
  itemNames.forEach((itemName) => itemName.visible = false)

  let visibleItemCards = []
  let visibleItemNames = []

  if (startIndex <= endIndex) {
    visibleItemCards = itemCards.slice(startIndex, endIndex + 1);
    visibleItemNames = itemNames.slice(startIndex, endIndex + 1)
  } else {
    const itemCardFirstPart = itemCards.slice(startIndex);
    const itemCardSecondPart = itemCards.slice(0, endIndex + 1);
    visibleItemCards = itemCardFirstPart.concat(itemCardSecondPart);

    const itemNameFirstPart = itemNames.slice(startIndex);
    const itemNameSecondPart = itemNames.slice(0, endIndex + 1);
    visibleItemNames = itemNameFirstPart.concat(itemNameSecondPart);
  }
  visibleItemCards.forEach((itemCard, index) => {
    itemCard.visible = true
    _positionItemCard(itemCard, index)
  })
  visibleItemNames.forEach((itemName, index) => {
    itemName.visible = true
    _positionItemName(itemName, index)
  })
}
const _positionItemCard = (itemCard, index) => {
  const MARGIN = (itemCard.settings.width) + 31.5

  const horizontalPosition = (30 + (index * MARGIN))
  const verticalPosition = 115

  itemCard.position.set(horizontalPosition, verticalPosition)
}
const _positionItemName = (itemName, index) => {
  const MARGIN = (itemName.settings.width) + 12

  const horizontalPosition = (115 + (index * MARGIN))
  const verticalPosition = 290

  itemName.position.set(horizontalPosition, verticalPosition)
}