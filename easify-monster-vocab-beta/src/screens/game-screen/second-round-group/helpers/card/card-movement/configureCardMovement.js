import { onDragStart } from "./onDragStart.js";
import { onDragEnd } from "./onDragEnd.js"

export function configureCardMovement({ app, card, onDrop, dragTickerHandler }) {
  _enableCardInteractive(card)

  card
    .on('pointerdown', event => {
      card.background.changeBorderColor(0x03BB85)
      onDragStart({ app, card, event, dragTickerHandler })
    })
    .on('pointerup', () => onDragEnd({ app, card, onDrop }))
    .on('pointerupoutside', () => onDragEnd({ app, card, onDrop }));
}
const _enableCardInteractive = (card) => {
  card.eventMode = "dynamic";
  card.cursor = "pointer";
}