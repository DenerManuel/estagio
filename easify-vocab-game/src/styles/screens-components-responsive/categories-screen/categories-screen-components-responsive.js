import { getDefaultComponentsStyles } from './default/default-components-styles.js';
import { changeComponentsPositions } from './helpers/change-components-positions.js';
import { changeComponentsStyles } from './helpers/change-components-styles.js';
import { resetComponentsStyles } from './helpers/reset-components-styles.js';

export class CategoriesScreenComponentsResponsive {
  static instance = null;

  static getInstance(components) {
    if (!CategoriesScreenComponentsResponsive.instance) {
      CategoriesScreenComponentsResponsive.instance = new CategoriesScreenComponentsResponsive(
        components
      );
    }
    return CategoriesScreenComponentsResponsive.instance;
  }

  constructor(components) {
    components.cardGroups.cards.forEach((card) => {
    });
    this._getComponents(components);
    this.defaultSizes = getDefaultComponentsStyles(components);
  }

  changeComponentsStyles() {
    changeComponentsStyles(this.components);
    changeComponentsPositions(this.components);
  }

  resetComponentsStyles() {
    // this.defaultPositions = getDefaultComponentsPositions(this.components);
    resetComponentsStyles(this.components, this.defaultSizes);
  }

  _getComponents(components) {
    this.components = {
      cardGroups: components.cardGroups,
      categoriesContainer: components.categoriesContainer,
      tooltipContainer: components.tooltipContainer,
      cardsContainer: components.cardsContainer,
      previousButton: components.previousButton,
      nextButton: components.nextButton,
      backButton: components.backButton,
    };
  }
}
