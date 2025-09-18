import { Graphics } from 'pixi.js';
import { preGameScreenStyles } from '../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

const WIDTH = preGameScreenStyles.modal.desktop.width;
const HEIGHT = preGameScreenStyles.modal.desktop.height;
const BORDER_RADIUS = preGameScreenStyles.modal.desktop.borderRadius;
const BORDER_WIDTH = preGameScreenStyles.modal.desktop.borderWidth;
const BORDER_COLOR = preGameScreenStyles.modal.desktop.borderColor;
const BACKGROUND_COLOR = preGameScreenStyles.modal.desktop.backgroundColor;

export class Modal extends Graphics {
  constructor() {
    super();
    this._init();
  }
  _init() {
    this.beginFill(BACKGROUND_COLOR, 1);
    this.drawRoundedRect(0, 0, WIDTH, HEIGHT, BORDER_RADIUS);
    this.lineStyle(BORDER_WIDTH, BORDER_COLOR);
    this.endFill();
  }
}
