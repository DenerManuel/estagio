import { CustomButton } from '../../../../components/button/CustomButton.js';
import { NavigationManager } from '../../../../core/NavigationManager.js';
import { preGameScreenPositions } from '../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';
import { preGameScreenStyles } from '../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export class PlayButton extends CustomButton {
  constructor(preGameScreen) {
    super('Play', preGameScreenStyles.playButton.desktop);

    this._setPosition();
    this.setEvents(preGameScreen);
  }

  _setPosition() {
    const PositionX = preGameScreenPositions.playButton.desktop.x;
    const PositionY = preGameScreenPositions.playButton.desktop.y;

    this.position.set(PositionX, PositionY);
  }
  setEvents(preGameScreen) {
    this.off('pointertap');
    this.on('pointertap', () => {
      NavigationManager.getInstance().navigateTo(
        'gameScreen',
        preGameScreen.category,
        preGameScreen.selectedMode
      );
    });
  }
}
