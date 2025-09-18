import { App } from '../../../../app/App.js';
import { CustomButton } from '../../../../components/button/CustomButton.js';
import { calculateRightCenteredXPosition } from '../../../../utils/position/calculateCenteredPosition.js';
import { restartGame } from '../../../game-screen/helpers/game-screen-helpers.js';

export class RetryButton extends CustomButton {
  constructor(gameScreen, gameOverScreen) {
    super('Retry', {
      width: 180,
      height: 80,
    });

    this._setPosition();
    this._setEvents(gameScreen, gameOverScreen);
  }

  _setPosition() {
    const POSITION_X = calculateRightCenteredXPosition(180) - 10;
    const POSITION_Y = 340;

    this.position.set(POSITION_X, POSITION_Y);
  }

  _setEvents(gameScreen, gameOverScreen) {
    this.on('pointertap', () => {
      App.getInstance().stage.removeChild(gameOverScreen);
      restartGame(gameScreen);
    });
  }
}
