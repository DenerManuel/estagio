import { App } from '../../../../app/App.js';
import { CustomButton } from '../../../../components/button/CustomButton.js';
import { NavigationManager } from '../../../../core/NavigationManager.js';
import { homeScreenPositions } from '../../../../styles/screens-components-positions/home-screen/home-screen-components-position.js';
import { homeScreenStyles } from '../../../../styles/screens-components-styles/home-screen/home-screen-components-styles.js';

export class ReviewButton extends CustomButton {
  constructor() {
    super('Review', homeScreenStyles.reviewButton.desktop);

    this._setPosition();
    this._setEvents();
  }

  _setPosition() {
    const POSITION_X = homeScreenPositions.reviewButton.desktop.x;
    const POSITION_Y = homeScreenPositions.reviewButton.desktop.y;

    this.position.set(POSITION_X, POSITION_Y);
  }

  _setEvents() {
    this.on('pointertap', () => {
      NavigationManager.getInstance().navigateTo('categoriesScreen');
      App.getInstance().context = 'review';
    });
  }
}
