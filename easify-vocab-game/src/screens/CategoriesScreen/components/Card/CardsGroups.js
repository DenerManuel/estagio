import { configureCardEvents } from "../Card/CardInteractions.js"
import { positionCard } from "../Card/CardsPosition.js"

export function createCardGroups(cards) {
  let cardGroups = []
  let currentGroup = []

  cards.forEach((card, indice) => {
    currentGroup.push(card)

    if (currentGroup.length === 7 || indice === cards.length - 1) {
      cardGroups.push(currentGroup)
      currentGroup = []
    }
  })

  return cardGroups
}

export function addCurrentGroupCards(categoriesScreen) {
  const cardGroups = categoriesScreen.cardGroups;
  const currentGroupIndex = categoriesScreen.currentGroupIndex;
  const cardsContainer = categoriesScreen.cardsContainer;
  const tooltipContainer = categoriesScreen.tooltipContainer;
  const app = categoriesScreen.app

  const currentCards = cardGroups[currentGroupIndex];

  currentCards.forEach((card) => {
    positionCard(card, cardsContainer);
    configureCardEvents(card, tooltipContainer, app)
    cardsContainer.addChild(card);
  });
}