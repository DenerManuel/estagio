import { CustomButton } from '../../../../../components/button/CustomButton.js';
import { reviewScreenPositions } from '../../../../../styles/screens-components-positions/review-screen/review-screen-components-positions.js';
import { reviewScreenStyles } from '../../../../../styles/screens-components-styles/reviewScreen/review-screen-components-styles.js';

export class SoundButton extends CustomButton {
  constructor() {
    super('🔊', reviewScreenStyles.soundButton.desktop);

    this._setPosition();
  }

  _setPosition() {
    const positionX = reviewScreenPositions.soundButton.desktop.x;
    const positionY = reviewScreenPositions.soundButton.desktop.y;

    this.position.set(positionX, positionY);
  }
}
