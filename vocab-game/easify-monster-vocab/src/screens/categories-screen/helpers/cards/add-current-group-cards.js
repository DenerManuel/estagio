import { configureCardEvents } from '../categories-screen-helpers.js';

export function addCurrentGroupCards(categoriesScreen) {
  const cardGroups = categoriesScreen.cardGroups;
  const currentGroupIndex = categoriesScreen.currentGroupIndex;
  const cardsContainer = categoriesScreen.cardsContainer;
  const tooltipContainer = categoriesScreen.tooltipContainer;

  const currentCards = cardGroups.getGroups()[currentGroupIndex];

  cardGroups.groups.forEach((cardGroup) => {
    cardGroup.forEach((card, index) => {
      card.visible = false;
    });
  });

  currentCards.forEach((card) => {
    card.visible = true;
    // positionCard(card, cardsContainer);
    configureCardEvents(card, tooltipContainer);
    categoriesScreen.addChild(card);
  });
}
