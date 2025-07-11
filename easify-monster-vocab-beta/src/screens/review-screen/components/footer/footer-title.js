import { reviewScreenPositions } from '../../../../styles/screens/reviewScreen/review-screen-components-positions.js';
import { reviewScreenStyles } from '../../../../styles/screens/reviewScreen/review-screen-components-styles.js';

export class FooterTitle extends PIXI.Text {
  constructor() {
    super('', reviewScreenStyles.footerTitle)

    this._setPosition()
  }

  _setPosition() {
    const positionX = reviewScreenPositions.footerTitle.x;
    const positionY = reviewScreenPositions.footerTitle.y;

    this.position.set(positionX, positionY);
    this.anchor.set(0.5);
  }
}