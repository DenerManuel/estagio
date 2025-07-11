import { configureCardEvents } from "./configure-card-events.js";
import { positionCard } from "./position-cards.js";

export function addCurrentGroupCards(categoriesScreen) {
  const cardGroups = categoriesScreen.cardGroups;
  const currentGroupIndex = categoriesScreen.currentGroupIndex;
  const cardsContainer = categoriesScreen.cardsContainer;
  const tooltipContainer = categoriesScreen.tooltipContainer;
  const app = categoriesScreen.app

  const currentCards = cardGroups.getGroups()[currentGroupIndex];

  currentCards.forEach((card) => {
    positionCard(card, cardsContainer);
    configureCardEvents(card, tooltipContainer, app)
    cardsContainer.addChild(card);
  });
}