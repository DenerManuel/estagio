import { changeComponentsPositions } from './helpers/change-components-positions.js';
import { changeComponentsStyles } from './helpers/change-components-styles.js';
import { resetComponentsStyles } from './helpers/reset-components-styles.js';

export class HomeScreenComponentsResponsive {
  static instance = null;

  static getInstance(components) {
    if (!HomeScreenComponentsResponsive.instance) {
      HomeScreenComponentsResponsive.instance = new HomeScreenComponentsResponsive(components);
    }
    return HomeScreenComponentsResponsive.instance;
  }

  constructor(components) {
    this.components = components
  }

  changeComponentsStylesAndPositions() {
    changeComponentsStyles(this.components);
    changeComponentsPositions(this.components);
  }

  resetComponentsStylesAndPositions() {
    resetComponentsStyles(this.components);
  }
}
