import { preGameScreenPositions } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-position.js";
import { preGameScreenStyles } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-styles.js";


export class ScoreModeButton extends PIXI.Text {
  constructor() {
    super("Score Mode", preGameScreenStyles.scoreModeButton)
    this._setPosition()
  }
  setEvents(preGameScreen) {
    this.eventMode = "dynamic"
    this.cursor = "pointer"
    this.on('pointertap', () => {
      preGameScreen.selectedMode = 'score';
      this.style.fill = 0x00ff00;
      preGameScreen.heartModeButton.style.fill = 0x888888;
    });
  }
  _setPosition() {
    const POSITION_X = preGameScreenPositions.scoreModeButton.x
    const POSITION_Y = preGameScreenPositions.scoreModeButton.y

    this.position.set(POSITION_X, POSITION_Y)
  }
}