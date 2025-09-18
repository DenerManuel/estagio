import { preGameScreenPositions } from '../../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';

export function positionItemCard(itemCard, index, deviceType = 'desktop') {
  const ITEM_CARD_POSITION = preGameScreenPositions.itemCard[deviceType](index);
  itemCard.x = ITEM_CARD_POSITION.x;
  itemCard.y = ITEM_CARD_POSITION.y;
}
