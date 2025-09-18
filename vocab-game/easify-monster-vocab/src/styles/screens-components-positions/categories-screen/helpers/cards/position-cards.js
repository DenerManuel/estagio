import { categoriesScreenPositions } from "../../categories-screen-components-positions.js";

export function positionCards(cardGroups, deviceType) {
  cardGroups.groups.forEach((cardGroup) => {
    cardGroup.forEach((card, index) => {
      const position = categoriesScreenPositions.cards[deviceType](index);
      card.position.set(position.x, position.y);
    });
  });
}
