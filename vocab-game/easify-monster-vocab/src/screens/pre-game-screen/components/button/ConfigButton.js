import { CustomButton } from '../../../../components/button/CustomButton.js';
import { preGameScreenPositions } from '../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';
import { preGameScreenStyles } from '../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export class ConfigButton extends CustomButton {
  constructor(preGameScreen) {
    super('⚙️', preGameScreenStyles.configButton.desktop);

    this._setEvents(preGameScreen);
    this._setPosition();
  }

  _setEvents(preGameScreen) {
    this.eventMode = 'dynamic';
    this.cursor = 'pointer';
    this.on('pointertap', () => preGameScreen._showConfigModal());
  }
  _setPosition() {
    const positionX = preGameScreenPositions.configButton.desktop.x;
    const positionY = preGameScreenPositions.configButton.desktop.y;

    this.position.set(positionX, positionY);
  }
}
