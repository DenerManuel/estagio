import { gameScreenPositions } from '../../../../styles/screens-components-positions/game-screen/game-screen-components-position.js';
import { gameScreenStyles } from '../../../../styles/screens-components-styles/game-screen/game-screen-components-styles.js';
import { Text } from "pixi.js"

export class Heart extends Text {
  constructor(index) {
    super('❤️', gameScreenStyles.heart.desktop);

    this._setPosition(index);
  }
  _setPosition(index) {
    const [POSITION_X, POSITION_Y] = gameScreenPositions.heart.desktop(index);

    this.position.set(POSITION_X, POSITION_Y);
  }
}
