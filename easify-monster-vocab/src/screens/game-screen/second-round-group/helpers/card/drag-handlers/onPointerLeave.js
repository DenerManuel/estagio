import { cancelDrag } from './cancelDrag.js';

export function onPointerLeave(cardRefs, app, dragTickerHandler) {
  cardRefs.forEach(card => {
    if (card.dragging) {
      cancelDrag(card, app, dragTickerHandler);
    }
  });
}