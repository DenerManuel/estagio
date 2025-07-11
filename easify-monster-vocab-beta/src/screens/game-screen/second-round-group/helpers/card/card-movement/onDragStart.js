import { onGlobalDragMove } from "./onGlobalDragMove.js";

export function onDragStart({ app, card, event, dragTickerHandler }) {
  _bringChildToFront(card)
  _startDrag(card, event)
  _setupStage(app);
  _addGlobalEvents(app, card, dragTickerHandler);
}
const _bringChildToFront = (card) => {
  if (card.parent) {
    card.parent.addChild(card);
  }

}
const _startDrag = (card, event) => {
  card.data = event.data;
  card.dragging = true;
  card.dragStart = { x: card.x, y: card.y };
 
  // Salva o offset do clique em relação ao topo esquerdo do card
  const position = event.data.getLocalPosition(card.parent);
  card.dragOffset = { x: position.x - card.x, y: position.y - card.y };
  card.cursor = 'grabbing';
}
const _setupStage = (app) => {
  app.stage.eventMode = 'static';
  app.stage.hitArea = app.screen;
}
const _addGlobalEvents = (app, card, dragTickerHandler) => {
  app.stage.on('pointermove', evt => onGlobalDragMove(card, evt));
  app.ticker.add(dragTickerHandler);
}