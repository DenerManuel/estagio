import { CustomButton } from "../../../../../components/button/CustomButton.js";
import { reviewScreenPositions } from "../../../../../styles/screens/reviewScreen/review-screen-components-positions.js";
import { reviewScreenStyles } from "../../../../../styles/screens/reviewScreen/review-screen-components-styles.js";

export class ToggleButton extends CustomButton {
  constructor() {
    super('T', reviewScreenStyles.toogleButton)

    this._setPosition()
  }

  _setPosition() {
    const positionX = reviewScreenPositions.toogleButton.x;
    const positionY = reviewScreenPositions.toogleButton.y;

    this.position.set(positionX, positionY);
  }
}