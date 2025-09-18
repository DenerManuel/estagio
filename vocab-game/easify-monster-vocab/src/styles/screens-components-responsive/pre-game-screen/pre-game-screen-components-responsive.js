import { changeComponentsPositions } from './helpers/change-components-positions.js';
import { changeComponentsStyles } from './helpers/change-components-styles.js';
import { resetComponentsStyles } from './helpers/reset-components-styles.js';

export class PreGameScreenComponentsResponsive {
  static instance = null;

  static getInstance(components) {
    if (!PreGameScreenComponentsResponsive.instance) {
      PreGameScreenComponentsResponsive.instance = new PreGameScreenComponentsResponsive(components);
    }
    return PreGameScreenComponentsResponsive.instance;
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
