import { CustomButton } from '../../../../../components/button/CustomButton.js';
import { preGameScreenPositions } from '../../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';
import { preGameScreenStyles } from '../../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';
import { rotationRightArray } from '../../../../../utils/array/rotation-array.js';

export class PreviousButton extends CustomButton {
  constructor(preGameScreen) {
    super('◀', preGameScreenStyles.navigationButtons.desktop);

    this._setPosition();
  }

  _setPosition() {
    const positionX = preGameScreenPositions.previousButton.desktop.x;
    const positionY = preGameScreenPositions.previousButton.desktop.y;

    this.position.set(positionX, positionY);
  }
}
