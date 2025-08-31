import { CustomContainer } from '../../../../components/container/CustomContainer.js';
import { reviewScreenPositions } from '../../../../styles/screens-components-positions/review-screen/review-screen-components-positions.js';
import { reviewScreenStyles } from '../../../../styles/screens-components-styles/reviewScreen/review-screen-components-styles.js';

export class WordContainer extends CustomContainer {
  constructor(appContainer) {
    super(appContainer, reviewScreenStyles.wordContainer.desktop);

    this._setPosition();
  }

  _setPosition() {
    const positionX = reviewScreenPositions.wordContainer.desktop.x;
    const positionY = reviewScreenPositions.wordContainer.desktop.y;

    this.position.set(positionX, positionY);
  }
}
