import { CustomContainer } from '../../../../components/container/CustomContainer.js';
import { reviewScreenPositions } from '../../../../styles/screens-components-positions/review-screen/review-screen-components-positions.js';
import { reviewScreenStyles } from '../../../../styles/screens-components-styles/reviewScreen/review-screen-components-styles.js';

export class FooterContainer extends CustomContainer {
  constructor(appContainer) {
    super(appContainer, reviewScreenStyles.footerContainer.desktop);

    this._setPosition();
  }

  _setPosition() {
    const positionX = reviewScreenPositions.footerContainer.desktop.x;
    const positionY = reviewScreenPositions.footerContainer.desktop.y;

    this.position.set(positionX, positionY);
  }
}
