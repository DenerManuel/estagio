import { changeComponentsPositions } from './helpers/change-components-positions.js';
import { changeComponentsStyles } from './helpers/change-components-styles.js';
import { resetComponentsStyles } from './helpers/reset-components-styles.js';

export class GameScreenComponentsResponsive {
  static instance = null;

  static getInstance(components) {
    if (!GameScreenComponentsResponsive.instance) {
      GameScreenComponentsResponsive.instance = new GameScreenComponentsResponsive(components);
    }
    return GameScreenComponentsResponsive.instance;
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
