import { CustomButton } from "../../../../../components/button/CustomButton.js";
import { preGameScreenPositions } from "../../../../../styles/screens/pre-game-screen/pre-game-screen-components-position.js";
import { preGameScreenStyles } from "../../../../../styles/screens/pre-game-screen/pre-game-screen-components-styles.js";

export class NextButton extends CustomButton {
  constructor() {
    super('▶', preGameScreenStyles.navigationButtons)

    this._setPosition()
  }

  _setPosition() {
    const positionX = preGameScreenPositions.nextButton.x;
    const positionY = preGameScreenPositions.nextButton.y;

    this.position.set(positionX, positionY);
  }
}