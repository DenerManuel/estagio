import { CustomButton } from "../../../../components/button/CustomButton.js";
import { reviewScreenPositions } from "../../../../styles/screens/reviewScreen/review-screen-components-positions.js";
import { reviewScreenStyles } from "../../../../styles/screens/reviewScreen/review-screen-components-styles.js";

export class NextButton extends CustomButton {
  constructor() {
    super('▶', reviewScreenStyles.navigationButtons)

    this._setPosition()
  }

  _setPosition() {
    const positionX = reviewScreenPositions.nextButton.x;
    const positionY = reviewScreenPositions.nextButton.y;

    this.position.set(positionX, positionY);
  }
}