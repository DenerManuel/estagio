import { reviewScreenPositions } from '../../../../styles/screens-components-positions/review-screen/review-screen-components-positions.js';
import { reviewScreenStyles } from '../../../../styles/screens-components-styles/reviewScreen/review-screen-components-styles.js';
import { Text } from "pixi.js"

export class WordText extends Text {
  constructor() {
    super('', reviewScreenStyles.wordText.desktop);

    this._setPosition();
  }

  _setPosition() {
    const positionX = reviewScreenPositions.wordText.desktop.x;
    const positionY = reviewScreenPositions.wordText.desktop.y;

    this.position.set(positionX, positionY);
    this.anchor.set(0.5);
  }
}
