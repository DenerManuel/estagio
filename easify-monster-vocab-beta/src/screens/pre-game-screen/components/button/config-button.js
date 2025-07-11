import { CustomButton } from "../../../../components/button/CustomButton.js";
import { preGameScreenPositions } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-position.js";
import { preGameScreenStyles } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-styles.js";

export class ConfigButton extends CustomButton {
  constructor(preGameScreen) {
    super('⚙️', preGameScreenStyles.configButton)

    this._setEvents(preGameScreen)
    this._setPosition()
  }

  _setEvents(preGameScreen) {
    this.eventMode = 'dynamic';
    this.cursor = 'pointer';
    this.on('pointertap', () => preGameScreen._showConfigModal());
  }
  _setPosition() {
    const positionX = preGameScreenPositions.configButton.x
    const positionY = preGameScreenPositions.configButton.y

    this.position.set(positionX, positionY);
  }
}