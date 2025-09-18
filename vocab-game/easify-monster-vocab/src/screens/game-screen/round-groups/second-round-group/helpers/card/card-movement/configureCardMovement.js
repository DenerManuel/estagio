import { GLOBAL_COLORS } from '../../../../../../../styles/colors/global-colors.js';
import { onDragEnd } from './onDragEnd.js';
import { onDragStart } from './onDragStart.js';
GLOBAL_COLORS;

export function configureCardMovement({ app, card, onDrop, dragTickerHandler }) {
  _enableCardInteractive(card);

  card
    .on('pointerdown', (event) => {
      card.changeBorderColor(0x03bb85);
      onDragStart({ app, card, event, dragTickerHandler });
    })
    .on('pointerup', () => {
      card.changeBorderColor(GLOBAL_COLORS.SECONDARY);
      onDragEnd({ app, card, onDrop });
    })
    .on('pointerupoutside', () => onDragEnd({ app, card, onDrop }));
}
const _enableCardInteractive = (card) => {
  card.eventMode = 'dynamic';
  card.cursor = 'pointer';
};
