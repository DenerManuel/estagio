import { reviewScreenPositions } from "../../../../styles/screens/reviewScreen/review-screen-components-positions.js";
import { reviewScreenStyles } from "../../../../styles/screens/reviewScreen/review-screen-components-styles.js";

export class WordText extends PIXI.Text {
  constructor() {
    super('', reviewScreenStyles.wordText)

    this._setPosition()
  }

  _setPosition() {
    const positionX = reviewScreenPositions.wordText.x;
    const positionY = reviewScreenPositions.wordText.y;

    this.position.set(positionX, positionY);
    this.anchor.set(0.5);
  }
}