import CustomText from '../../../../components/text/CustomText.js';
import { gameScreenPositions } from '../../../../styles/screens-components-positions/game-screen/game-screen-components-position.js';
import { gameScreenStyles } from '../../../../styles/screens-components-styles/game-screen/game-screen-components-styles.js';

export class WellDoneText extends CustomText {
  constructor() {
    super('Well Done!', gameScreenStyles.wellDoneText.desktop);

    this._setPosition();
  }
  setPositionMobile() {
    const POSITIONS = gameScreenPositions.wellDoneText.mobile;

    this.position.set(POSITIONS.x, POSITIONS.y);
  }
  _setPosition() {
    const POSITIONS = gameScreenPositions.wellDoneText.desktop;

    this.position.set(POSITIONS.x, POSITIONS.y);
    this.anchor.set(0.5);
  }
}
