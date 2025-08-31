export function finishDrag(card, app, dragTickerHandler) {
  if (!card.dragging) return;

  card.dragging = false;
  card.data = null;
  card.cursor = 'pointer';

  // Remove listeners globais
  app.stage.off('pointermove');
  app.stage.off('pointerupoutside');
  app.stage.off('pointerleave');

  // Remove o ticker de renderização forçada
  app.ticker.remove(dragTickerHandler);
}