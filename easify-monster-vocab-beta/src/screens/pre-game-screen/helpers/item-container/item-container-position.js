import { preGameScreenPositions } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-position.js";

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
  const [POSITION_X, POSITION_Y] = preGameScreenPositions.itemCard(index)
  itemCard.position.set(POSITION_X, POSITION_Y)
}
const _positionItemName = (itemName, index) => {
  const [POSITION_X, POSITION_Y] = preGameScreenPositions.itemNameContainer(index)
  itemName.position.set(POSITION_X, POSITION_Y)
}