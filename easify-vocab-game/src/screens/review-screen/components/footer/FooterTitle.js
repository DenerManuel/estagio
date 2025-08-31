import { reviewScreenPositions } from '../../../../styles/screens-components-positions/review-screen/review-screen-components-positions.js';
import { reviewScreenStyles } from '../../../../styles/screens-components-styles/reviewScreen/review-screen-components-styles.js';

export class FooterTitle extends PIXI.Text {
  constructor() {
    super('', reviewScreenStyles.footerTitle.desktop);

    this._setPosition();
  }

  _setPosition() {
    const positionX = reviewScreenPositions.footerTitle.desktop.x;
    const positionY = reviewScreenPositions.footerTitle.desktop.y;

    this.position.set(positionX, positionY);
    this.anchor.set(0.5);
  }
}
