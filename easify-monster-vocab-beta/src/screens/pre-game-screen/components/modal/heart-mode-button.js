import { preGameScreenPositions } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-position.js";
import { preGameScreenStyles } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-styles.js";


export class HeartModeButton extends PIXI.Text {
  constructor() {
    super("Heart Mode", preGameScreenStyles.heartModeButton)
    this._setPosition()
  }
  setEvents(preGameScreen) {
    this.eventMode = "dynamic"
    this.cursor = "pointer"
    this.on('pointertap', () => {
      preGameScreen.selectedMode = 'heart';
      this.style.fill = 0xff0000;
      preGameScreen.scoreModeButton.style.fill = 0x888888;
    });
  }
  _setPosition() {
    const POSITION_X = preGameScreenPositions.heartModeButton.x
    const POSITION_Y = preGameScreenPositions.heartModeButton.y

    this.position.set(POSITION_X, POSITION_Y)
  }
}