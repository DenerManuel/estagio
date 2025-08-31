import { preGameScreenPositions } from '../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';
import { preGameScreenStyles } from '../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export class CloseButton extends PIXI.Text {
  constructor(preGameScreen) {
    super('Close', preGameScreenStyles.closeButton.desktop);
    this._setPosition();
    this._setEvents(preGameScreen);
  }
  _setPosition() {
    const POSITION_X = preGameScreenPositions.closeButton.desktop.x;
    const POSITION_Y = preGameScreenPositions.closeButton.desktop.y;

    this.position.set(POSITION_X, POSITION_Y);
  }
  _setEvents(preGameScreen) {
    this.anchor.set(0.5);
    this.eventMode = 'dynamic';
    this.cursor = 'pointer';
    this.on('pointertap', () => preGameScreen._hideConfigModal());
  }
}
