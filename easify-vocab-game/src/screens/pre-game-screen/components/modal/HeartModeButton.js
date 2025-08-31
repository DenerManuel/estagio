import { preGameScreenPositions } from '../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';
import { preGameScreenStyles } from '../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export class HeartModeButton extends PIXI.Text {
  constructor() {
    super('Heart Mode', preGameScreenStyles.heartModeButton.desktop);
    this._setPosition();
  }
  setEvents(preGameScreen) {
    this.eventMode = 'dynamic';
    this.cursor = 'pointer';
    this.on('pointertap', () => {
      preGameScreen.selectedMode = 'heart';
      preGameScreen.scoreModeButton.style.fill = 0x888888;
      // preGameScreen.playButton.setEvents(preGameScreen)
      this.style.fill = 0xff0000;
    });
  }
  _setPosition() {
    const POSITION_X = preGameScreenPositions.heartModeButton.desktop.x;
    const POSITION_Y = preGameScreenPositions.heartModeButton.desktop.y;

    this.position.set(POSITION_X, POSITION_Y);
  }
}
