import { App } from '../../../../app/App.js';
import { CustomButton } from '../../../../components/button/CustomButton.js';
import { NavigationManager } from '../../../../core/NavigationManager.js';
import { completedScreenPositions } from '../../../../styles/screens-components-positions/completed-screen/completed-screen-components-positions.js';
import { completedScreenStyles } from '../../../../styles/screens-components-styles/completed-screen/completed-screen-components-styles.js';

export class ButtonNew extends CustomButton {
  constructor(completedScreen) {
    super('New', completedScreenStyles.buttonNew.desktop);

    this._setPosition();
    this._setEvents(completedScreen);
  }

  _setPosition() {
    const POSITION = completedScreenPositions.buttonNew.desktop;

    this.position.set(POSITION.x, POSITION.y);
  }
  _setEvents(completedScreen) {
    this.on('pointertap', () => {
      App.getInstance().stage.removeChild(completedScreen);
      NavigationManager.getInstance().navigateTo('homeScreen');
    });
  }
}
