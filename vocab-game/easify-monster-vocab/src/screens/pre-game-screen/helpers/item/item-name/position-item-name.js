import { preGameScreenPositions } from '../../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';

export function positionItemName(itemName, index) {
  const ITEM_NAME_POSITION = preGameScreenPositions.itemNameContainer.desktop(index);
  itemName.x = ITEM_NAME_POSITION.x;
  itemName.y = ITEM_NAME_POSITION.y;
}
