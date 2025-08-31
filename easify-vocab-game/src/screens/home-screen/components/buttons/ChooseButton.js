import { App } from '../../../../app/App.js';
import { CustomButton } from '../../../../components/button/CustomButton.js';
import { NavigationManager } from '../../../../core/NavigationManager.js';
import { homeScreenPositions } from '../../../../styles/screens-components-positions/home-screen/home-screen-components-position.js';
import { homeScreenStyles } from '../../../../styles/screens-components-styles/home-screen/home-screen-components-styles.js';

export class ChooseButton extends CustomButton {
  constructor() {
    super('Choose', homeScreenStyles.chooseButton.desktop);

    this._setPosition();
    this._setEvents();
  }

  _setPosition() {
    const POSITION_X = homeScreenPositions.chooseButton.desktop.x;
    const POSITION_Y = homeScreenPositions.chooseButton.desktop.y;

    this.position.set(POSITION_X, POSITION_Y);
  }

  _setEvents() {
    this.on('pointertap', () => {
      NavigationManager.getInstance().navigateTo('categoriesScreen');
      App.getInstance().context = 'game';
    });
  }
}
