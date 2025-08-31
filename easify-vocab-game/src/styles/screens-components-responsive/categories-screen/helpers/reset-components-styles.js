import { categoriesScreenPositions } from '../../../screens-components-positions/categories-screen/categories-screen-components-positions.js';
import { positionCards } from '../../../screens-components-positions/categories-screen/helpers/cards/position-cards.js';
import { categoriesScreenStyles } from '../../../screens-components-styles/categories-screen/categories-screen-components-styles.js';

export function resetComponentsStyles(components, defaultSizes) {
  components.cardGroups.cards.forEach((card) => {
    card.updateStyle(categoriesScreenStyles.card.desktop);
  });
  components.categoriesContainer.updateStyle(categoriesScreenStyles.categoriesContainer.desktop);
  components.tooltipContainer.updateStyle(categoriesScreenStyles.tooltipContainer.desktop);
  components.cardsContainer.updateStyle(categoriesScreenStyles.cardsContainer.desktop);
  components.previousButton.updateStyle(categoriesScreenStyles.navigationButtons.desktop);
  components.nextButton.updateStyle(categoriesScreenStyles.navigationButtons.desktop);
  components.backButton.width = defaultSizes.backButton.width;
  components.backButton.height = defaultSizes.backButton.height;

  resetComponentsPositions(components);
}

function resetComponentsPositions(components) {
  const CATEGORIES_CONTAINER_POSITIONS = categoriesScreenPositions.categoriesContainer.desktop;
  const TOOLTIP_CONTAINER_POSITIONS = categoriesScreenPositions.tooltipContainer.desktop;
  const PREVIOUS_BUTTON_POSITIONS = categoriesScreenPositions.previousButton.desktop;
  const NEXT_BUTTON_POSITIONS = categoriesScreenPositions.nextButton.desktop;
  const BACK_BUTTON_POSITIONS = { x: 20, y: 512 };

  components.categoriesContainer.position.set(
    CATEGORIES_CONTAINER_POSITIONS.x,
    CATEGORIES_CONTAINER_POSITIONS.y
  );
  components.tooltipContainer.position.set(
    TOOLTIP_CONTAINER_POSITIONS.x,
    TOOLTIP_CONTAINER_POSITIONS.y
  );
  components.previousButton.position.set(PREVIOUS_BUTTON_POSITIONS.x, PREVIOUS_BUTTON_POSITIONS.y);
  components.nextButton.position.set(NEXT_BUTTON_POSITIONS.x, NEXT_BUTTON_POSITIONS.y);
  components.backButton.position.set(BACK_BUTTON_POSITIONS.x, BACK_BUTTON_POSITIONS.y);

  positionCards(components.cardGroups, 'desktop');
}
