import { CustomButton } from '../../../../components/button/CustomButton.js';
import { reviewScreenPositions } from '../../../../styles/screens-components-positions/review-screen/review-screen-components-positions.js';
import { reviewScreenStyles } from '../../../../styles/screens-components-styles/reviewScreen/review-screen-components-styles.js';

export class PreviousButton extends CustomButton {
  constructor() {
    super('◀', reviewScreenStyles.navigationButtons.desktop);

    this._setPosition();
  }

  _setPosition() {
    const positionX = reviewScreenPositions.previousButton.desktop.x;
    const positionY = reviewScreenPositions.previousButton.desktop.y;

    this.position.set(positionX, positionY);
  }
}
