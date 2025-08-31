import { reviewScreenPositions } from '../../../../styles/screens-components-positions/review-screen/review-screen-components-positions.js';
import { reviewScreenStyles } from '../../../../styles/screens-components-styles/reviewScreen/review-screen-components-styles.js';

export class FooterQuantity extends PIXI.Text {
  constructor() {
    super('', reviewScreenStyles.footerQuantity.desktop);

    this._setPosition();
  }

  _setPosition() {
    const positionX = reviewScreenPositions.footerQuantity.desktop.x;
    const positionY = reviewScreenPositions.footerQuantity.desktop.y;

    this.position.set(positionX, positionY);
    this.anchor.set(0.5);
  }
}
