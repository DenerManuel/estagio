import { ItemName } from '../../../components/pre-game-screen-components.js';
import { positionItemName } from './position-item-name.js';

export function createItensName(category) {
  const itemNames = [];

  for (let i = 0; i < 4; i++) {
    const itemName = new ItemName(category.items[i].name);
    itemNames.push(itemName);
    positionItemName(itemName, i);
  }

  return itemNames;
}
