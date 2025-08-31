export function getDefaultComponentsStyles(components) {
  return {
    cardGroups: {
      width: components.cardGroups.cards[0].width,
      height: components.cardGroups.cards[0].height
    },
    categoriesContainer: {
      width: components.categoriesContainer.width,
      height: components.categoriesContainer.height,
    },
    tooltipContainer: {
      width: components.tooltipContainer.width,
      height: components.tooltipContainer.height,
    },
    cardsContainer: {
      width: components.cardsContainer.width,
      height: components.cardsContainer.height,
    },
    previousButton: {
      width: components.previousButton.width,
      height: components.previousButton.height,
    },
    nextButton: {
      width: components.nextButton.width,
      height: components.nextButton.height,
    },
    backButton: {
      width: components.backButton.width,
      height: components.backButton.height,
    }
  };
}