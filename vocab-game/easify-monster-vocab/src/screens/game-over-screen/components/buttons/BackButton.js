import { App } from '../../../../app/App.js';
import { CustomButton } from '../../../../components/button/CustomButton.js';
import { NavigationManager } from '../../../../core/NavigationManager.js';
import { calculateLeftCenteredXPosition } from '../../../../utils/position/calculateCenteredPosition.js';

export class BackButton extends CustomButton {
  constructor(gameOverScreen) {
    super('Back', {
      width: 180,
      height: 80,
    });

    this._setPosition();
    this._setEvents(gameOverScreen);
  }

  _setPosition() {
    const POSITION_X = calculateLeftCenteredXPosition() + 10;
    // App.getInstance().renderer.width / 2 - 20;
    const POSITION_Y = 340;

    this.position.set(POSITION_X, POSITION_Y);
  }

  _setEvents(gameOverScreen) {
    this.on('pointertap', () => {
      App.getInstance().stage.removeChild(gameOverScreen);
      NavigationManager.getInstance().navigateTo('homeScreen');
    });
  }
}
