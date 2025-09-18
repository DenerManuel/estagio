import { CustomButton } from '../../../../../components/button/CustomButton.js';
import { preGameScreenPositions } from '../../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';
import { preGameScreenStyles } from '../../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export class NextButton extends CustomButton {
  constructor(preGameScreen) {
    super('▶', preGameScreenStyles.navigationButtons.desktop);

    this._setPosition();
  }

  _setPosition() {
    const positionX = preGameScreenPositions.nextButton.desktop.x;
    const positionY = preGameScreenPositions.nextButton.desktop.y;

    this.position.set(positionX, positionY);
  }
}
