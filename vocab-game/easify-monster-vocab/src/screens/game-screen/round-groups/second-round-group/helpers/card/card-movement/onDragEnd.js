import { GLOBAL_COLORS } from "../../../../../../../styles/colors/global-colors.js";

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
  card.changeBorderColor(GLOBAL_COLORS.SECONDARY);
}
const removeGlobalEvents = (app) => {
  app.stage.off('pointermove');
}
const handleDrop = (card, onDrop) => {
  if (onDrop) onDrop(card);
}
