import { getPIXIConfigurations } from '../core/pixi-configuration/PIXIConfigurations.js';

const CONTAINER_ID = 'game-container'

export class App extends PIXI.Application {
  screens = {};
  categories = {};

  constructor() {
    super(getPIXIConfigurations());
    // APP_CONTAINER.appendChild(this.view);
  }

  getAppResolution() {
    return {
      width: this.screen.width,
      height: this.screeb.height
    }
  }
}