import { preGameScreenPositions } from '../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';
import { preGameScreenStyles } from '../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';
import { Text } from "pixi.js"


export class ModalTitle extends Text {
  constructor() {
    super('Choose Game Mode', preGameScreenStyles.modalTitle.desktop);
    this._setPosition();
  }
  _setPosition() {
    const POSITION_X = preGameScreenPositions.modalTitle.desktop.x;
    const POSITION_Y = preGameScreenPositions.modalTitle.desktop.y;

    this.anchor.set(0.5);
    this.position.set(POSITION_X, POSITION_Y);
  }
}
