import { categoriesScreenStyles } from '../../../screens-components-styles/categories-screen/categories-screen-components-styles.js';

export function changeComponentsStyles(components) {
  components.cardGroups.cards.forEach((card) => {
    card.updateStyle(categoriesScreenStyles.card.mobile);
  });
  components.categoriesContainer.updateStyle(categoriesScreenStyles.categoriesContainer.mobile);
  components.tooltipContainer.updateStyle(categoriesScreenStyles.tooltipContainer.mobile);
  components.previousButton.updateStyle(categoriesScreenStyles.navigationButtons.mobile);
  components.nextButton.updateStyle(categoriesScreenStyles.navigationButtons.mobile);
}
