import { reviewScreenPositions } from '../../../../styles/screens/reviewScreen/review-screen-components-positions.js';
import { reviewScreenStyles } from '../../../../styles/screens/reviewScreen/review-screen-components-styles.js';

export class FooterQuantity extends PIXI.Text {
  constructor() {
    super('', reviewScreenStyles.footerQuantity)

    this._setPosition()
  }

  _setPosition() {
    const positionX = reviewScreenPositions.footerQuantity.x;
    const positionY = reviewScreenPositions.footerQuantity.y;

    this.position.set(positionX, positionY);
    this.anchor.set(0.5);
  }
}