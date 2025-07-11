import { CustomContainer } from "../../../../components/container/CustomContainer.js";
import { reviewScreenPositions } from "../../../../styles/screens/reviewScreen/review-screen-components-positions.js";
import { reviewScreenStyles } from "../../../../styles/screens/reviewScreen/review-screen-components-styles.js";

export class WordContainer extends CustomContainer {
  constructor(appContainer) {
    super(appContainer, reviewScreenStyles.wordContainer)

    this._setPosition()
  }

  _setPosition() {
    const positionX = reviewScreenPositions.wordContainer.x;
    const positionY = reviewScreenPositions.wordContainer.y;

    this.position.set(positionX, positionY);
  }
}