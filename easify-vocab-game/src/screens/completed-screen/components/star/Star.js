import { completedScreenPositions } from '../../../../styles/screens-components-positions/completed-screen/completed-screen-components-positions.js';
import { completedScreenStyles } from '../../../../styles/screens-components-styles/completed-screen/completed-screen-components-styles.js';

export class Star extends PIXI.Text {
  constructor(index, activedStars) {
    super(
      index < activedStars ? '⭐' : '☆',
      completedScreenStyles.star.desktop(index, activedStars)
    );

    this._setPosition(index);
  }

  _setPosition(index) {
    const [POSITION_X, POSITION_Y] = completedScreenPositions.star.desktop(index);

    this.anchor.set(0.5);
    this.position.set(POSITION_X, POSITION_Y);
  }
}
