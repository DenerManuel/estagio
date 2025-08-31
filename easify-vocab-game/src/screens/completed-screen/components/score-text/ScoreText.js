import { completedScreenPositions } from '../../../../styles/screens-components-positions/completed-screen/completed-screen-components-positions.js';
import { completedScreenStyles } from '../../../../styles/screens-components-styles/completed-screen/completed-screen-components-styles.js';

export class ScoreText extends PIXI.Text {
  constructor(totalScore) {
    super(`Score: ${totalScore}`, completedScreenStyles.scoreText.desktop);

    this._setPosition();
  }

  _setPosition() {
    const POSITION = completedScreenPositions.scoreText.desktop;

    this.anchor.set(0.5);
    this.position.set(POSITION.x, POSITION.y);
  }
}
