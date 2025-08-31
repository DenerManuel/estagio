import { getPIXIConfigurations } from '../core/pixi-configuration/PIXIConfigurations.js';
import { applyStyles } from '../core/pixi-configuration/applyStyles.js';

export class App extends PIXI.Application {
  static instance = null;

  static getInstance() {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }

  screens = {};
  categories = {};

  constructor() {
    super(getPIXIConfigurations());
    applyStyles(this.view);
  }

  getSize() {
    const WIDTH = this.renderer.width;
    const HEIGHT = this.renderer.height;

    return { width: WIDTH, height: HEIGHT };
  }

  setSize(newWidth, newHeight) {
    this.renderer.resize(newWidth, newHeight);
    this.view.style.width = `${newWidth * 2}px`;
    this.view.style.height = `${newHeight * 2}px`;
  }
}
