import { changeComponentsPositions } from './helpers/change-components-positions.js';
import { changeComponentsStyles } from './helpers/change-components-styles.js';
import { resetComponentsStyles } from './helpers/reset-components-styles.js';

export class ReviewScreenComponentsResponsive {
  static instance = null;

  static getInstance(components) {
    if (!ReviewScreenComponentsResponsive.instance) {
      ReviewScreenComponentsResponsive.instance = new ReviewScreenComponentsResponsive(components);
    }
    return ReviewScreenComponentsResponsive.instance;
  }

  constructor(components) {
    this.components = components;
    this.isLoaded = true;
  }

  changeComponentsStylesAndPositions() {
    changeComponentsStyles(this.components);
    changeComponentsPositions(this.components);
  }

  resetComponentsStylesAndPositions() {
    resetComponentsStyles(this.components);
  }

  updateComponents(components) {
    this.components = components;
  }
}
