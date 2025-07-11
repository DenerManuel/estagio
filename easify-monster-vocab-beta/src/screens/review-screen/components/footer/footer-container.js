import { CustomContainer } from "../../../../components/container/CustomContainer.js";
import { reviewScreenPositions } from "../../../../styles/screens/reviewScreen/review-screen-components-positions.js";
import { reviewScreenStyles } from "../../../../styles/screens/reviewScreen/review-screen-components-styles.js";

export class FooterContainer extends CustomContainer {
  constructor(appContainer) {
    super(appContainer, reviewScreenStyles.footerContainer)

    this._setPosition()
  }

  _setPosition() {
    const positionX = reviewScreenPositions.footerContainer.x;
    const positionY = reviewScreenPositions.footerContainer.y;

    this.position.set(positionX, positionY);
  }
}