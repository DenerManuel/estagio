import { preGameScreenPositions } from '../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';
import { preGameScreenStyles } from '../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export class ScoreModeButton extends PIXI.Text {
  constructor() {
    super('Score Mode', preGameScreenStyles.scoreModeButton.desktop);
    this._setPosition();
  }
  setEvents(preGameScreen) {
    this.eventMode = 'dynamic';
    this.cursor = 'pointer';
    this.on('pointertap', () => {
      preGameScreen.selectedMode = 'score';
      preGameScreen.heartModeButton.style.fill = 0x888888;
      // preGameScreen.playButton.setEvents(preGameScreen)
      this.style.fill = 0x00ff00;
    });
  }
  _setPosition() {
    const POSITION_X = preGameScreenPositions.scoreModeButton.desktop.x;
    const POSITION_Y = preGameScreenPositions.scoreModeButton.desktop.y;

    this.position.set(POSITION_X, POSITION_Y);
  }
}
