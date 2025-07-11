import { preGameScreenPositions } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-position.js";
import { preGameScreenStyles } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-styles.js";

export class ModalTitle extends PIXI.Text {
  constructor() {
    super("Choose Game Mode", preGameScreenStyles.modalTitle)
    this._setPosition()
  }
  _setPosition() {
    const POSITION_X = preGameScreenPositions.modalTitle.x
    const POSITION_Y = preGameScreenPositions.modalTitle.y

    this.anchor.set(0.5)
    this.position.set(POSITION_X, POSITION_Y)
  }
}