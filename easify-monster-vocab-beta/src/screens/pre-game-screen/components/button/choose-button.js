import { CustomButton } from "../../../../components/button/CustomButton.js";
import { preGameScreenPositions } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-position.js";
import { preGameScreenStyles } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-styles.js";

export class ChooseButton extends CustomButton {
  constructor() {
    super('Choose', preGameScreenStyles.chooseButton)

    this._setPosition()
  }

  _setPosition() {
    const positionX = preGameScreenPositions.chooseButton.x
    const positionY = preGameScreenPositions.chooseButton.y

    this.position.set(positionX, positionY)
  }
}