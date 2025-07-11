import { CustomButton } from "../../../../components/button/CustomButton.js";
import { reviewScreenPositions } from "../../../../styles/screens/reviewScreen/review-screen-components-positions.js";
import { reviewScreenStyles } from "../../../../styles/screens/reviewScreen/review-screen-components-styles.js";

export class PreviousButton extends CustomButton {
  constructor() {
    super('◀', reviewScreenStyles.navigationButtons)

    this._setPosition()
  }

  _setPosition() {
    const positionX = reviewScreenPositions.previousButton.x;
    const positionY = reviewScreenPositions.previousButton.y;

    this.position.set(positionX, positionY);
  }
}