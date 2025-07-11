import { CustomContainer } from "../../../../components/container/CustomContainer.js";
import { reviewScreenPositions } from "../../../../styles/screens/reviewScreen/review-screen-components-positions.js";
import { reviewScreenStyles } from "../../../../styles/screens/reviewScreen/review-screen-components-styles.js";

export class ImageContainer extends CustomContainer {
  constructor(appContainer) {
    super(appContainer, reviewScreenStyles.imageContainer)

    this._setPosition()
  }

  _setPosition() {
    const positionX = reviewScreenPositions.imageContainer.x;
    const positionY = reviewScreenPositions.imageContainer.y;

    this.position.set(positionX, positionY);
  }
}