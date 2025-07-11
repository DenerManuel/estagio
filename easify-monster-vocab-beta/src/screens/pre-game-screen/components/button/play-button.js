import { CustomButton } from "../../../../components/button/CustomButton.js";
import { preGameScreenPositions } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-position.js";
import { preGameScreenStyles } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-styles.js";

export class PlayButton extends CustomButton {
  constructor() {
    super('Play', preGameScreenStyles.playButton)

    this._setPosition()
  }

  _setPosition() {
    const PositionX = preGameScreenPositions.playButton.x
    const PositionY = preGameScreenPositions.playButton.y

    this.position.set(PositionX, PositionY)
  }
}