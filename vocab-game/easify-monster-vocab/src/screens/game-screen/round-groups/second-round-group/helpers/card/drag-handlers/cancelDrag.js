import { finishDrag } from './finishDrag.js';

export function cancelDrag(card, app, dragTickerHandler) {
  if (card.dragging) {
    card.x = card.dragStart.x;
    card.y = card.dragStart.y;
    finishDrag(card, app, dragTickerHandler);
  }
}