export function onDragEnd({ app, card, onDrop }) {
  endDrag(card);
  removeGlobalEvents(app);
  handleDrop(card, onDrop);
}
const endDrag = (card) => {
  if (!card.dragging) return;
  card.dragging = false;
  card.data = null;
  card.cursor = 'pointer';
}
const removeGlobalEvents = (app) => {
  app.stage.off('pointermove');
}
const handleDrop = (card, onDrop) => {
  if (onDrop) onDrop(card);
}