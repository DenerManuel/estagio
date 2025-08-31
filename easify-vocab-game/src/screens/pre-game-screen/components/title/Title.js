import CustomText from '../../../../components/text/CustomText.js';
import { preGameScreenPositions } from '../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';
import { preGameScreenStyles } from '../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export class Title extends CustomText {
  constructor(categoryTitle) {
    super(categoryTitle, preGameScreenStyles.title.desktop);
    this._setPosition();
  }

  _setPosition() {
    const POSITION_X = preGameScreenPositions.title.desktop.x;
    const POSITION_Y = preGameScreenPositions.title.desktop.y;

    this.position.set(POSITION_X, POSITION_Y);
  }
}
