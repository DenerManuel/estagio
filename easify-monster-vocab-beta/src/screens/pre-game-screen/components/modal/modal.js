import { preGameScreenPositions } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-position.js"
import { preGameScreenStyles } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-styles.js"

const WIDTH = preGameScreenStyles.modal.width
const HEIGHT = preGameScreenStyles.modal.height
const BORDER_RADIUS = preGameScreenStyles.modal.borderRadius
const BORDER_WIDTH = preGameScreenStyles.modal.borderWidth
const BORDER_COLOR = preGameScreenStyles.modal.borderColor
const BACKGROUND_COLOR = preGameScreenStyles.modal.backgroundColor

export class Modal extends PIXI.Graphics {
  constructor() {
    super()
    this._init()
  }
  _init() {
    this.beginFill(BACKGROUND_COLOR, 1);
    this.drawRoundedRect(0, 0, WIDTH, HEIGHT, BORDER_RADIUS);
    this.lineStyle(BORDER_WIDTH, BORDER_COLOR);
    this.endFill();
  }
}