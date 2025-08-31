import { App } from '../../../../app/App.js';
import { CustomButton } from '../../../../components/button/CustomButton.js';
import { NavigationManager } from '../../../../core/NavigationManager.js';
import { preGameScreenPositions } from '../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';
import { preGameScreenStyles } from '../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export class ChooseButton extends CustomButton {
  constructor() {
    super('Choose', preGameScreenStyles.chooseButton.desktop);

    this._setPosition();
    this._setEvents();
  }

  _setPosition() {
    const positionX = preGameScreenPositions.chooseButton.desktop.x;
    const positionY = preGameScreenPositions.chooseButton.desktop.y;

    this.position.set(positionX, positionY);
  }
  _setEvents() {
    this.on('pointertap', () => {
      NavigationManager.getInstance().navigateTo('categoriesScreen');
      App.getInstance().context = 'game';
    });
  }
}
