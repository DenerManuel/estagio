import { CustomContainer } from '../../../../components/container/CustomContainer.js';
import { gameScreenPositions } from '../../../../styles/screens-components-positions/game-screen/game-screen-components-position.js';
import { gameScreenStyles } from '../../../../styles/screens-components-styles/game-screen/game-screen-components-styles.js';

export class RoundCounter extends CustomContainer {
  constructor(appContainer) {
    super(appContainer, gameScreenStyles.roundCounterContainer.desktop);

    this.roundCounterText = new RoundConterText();
    this.addChild(this.roundCounterText);
    this._setPosition();
  }

  _setPosition() {
    const positionX = gameScreenPositions.roundCounterContainer.desktop.x;
    const positionY = gameScreenPositions.roundCounterContainer.desktop.y;

    this.position.set(positionX, positionY);
  }
}

class RoundConterText extends PIXI.Text {
  constructor() {
    super('1 / 30', gameScreenStyles.roundCounterText.desktop);

    this._setPosition();
  }

  _setPosition() {
    const positionX = gameScreenPositions.roundCounterText.desktop.x;
    const positionY = gameScreenPositions.roundCounterText.desktop.y;

    this.position.set(positionX, positionY);
    this.anchor.set(0.5);
  }
}
