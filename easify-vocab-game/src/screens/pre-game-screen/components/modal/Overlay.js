import { preGameScreenPositions } from '../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';

export class Overlay extends PIXI.Graphics {
  constructor() {
    super();
    this._init();
  }
  _init() {
    this.beginFill(0x000000, 0.5);
    this.drawRect(
      0,
      0,
      preGameScreenPositions.overlay.desktop.x,
      preGameScreenPositions.overlay.desktop.y
    );
    this.endFill();
    this.eventMode = 'dynamic';
  }
}
