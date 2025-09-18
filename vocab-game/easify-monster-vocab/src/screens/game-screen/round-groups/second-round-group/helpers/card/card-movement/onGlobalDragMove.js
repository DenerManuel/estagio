export function onGlobalDragMove(card, event) {
  if (!card.dragging) return;
  const newPosition = getNewPosition(card, event);
  updateCardPosition(card, newPosition);
}
const getNewPosition = (card, event) => {
  return event.data.getLocalPosition(card.parent);
}
const updateCardPosition = (card, newPosition) => {
  card.x = newPosition.x - (card.dragOffset?.x || 0);
  card.y = newPosition.y - (card.dragOffset?.y || 0);
}