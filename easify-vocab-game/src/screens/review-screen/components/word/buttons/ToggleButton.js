import { CustomButton } from '../../../../../components/button/CustomButton.js';
import { reviewScreenPositions } from '../../../../../styles/screens-components-positions/review-screen/review-screen-components-positions.js';
import { reviewScreenStyles } from '../../../../../styles/screens-components-styles/reviewScreen/review-screen-components-styles.js';

export class ToggleButton extends CustomButton {
  constructor() {
    super('T', reviewScreenStyles.toggleButton.desktop);

    this._setPosition();
  }

  _setPosition() {
    const positionX = reviewScreenPositions.toggleButton.desktop.x;
    const positionY = reviewScreenPositions.toggleButton.desktop.y;

    this.position.set(positionX, positionY);
  }
}
