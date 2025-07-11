import { CustomButton } from "../../../../../components/button/CustomButton.js";
import { reviewScreenPositions } from "../../../../../styles/screens/reviewScreen/review-screen-components-positions.js";
import { reviewScreenStyles } from "../../../../../styles/screens/reviewScreen/review-screen-components-styles.js";

export class SoundButton extends CustomButton {
  constructor() {
    super('🔊', reviewScreenStyles.soundButton)

    this._setPosition()
  }

  _setPosition() {
    const positionX = reviewScreenPositions.soundButton.x;
    const positionY = reviewScreenPositions.soundButton.y;

    this.position.set(positionX, positionY);
  }
}