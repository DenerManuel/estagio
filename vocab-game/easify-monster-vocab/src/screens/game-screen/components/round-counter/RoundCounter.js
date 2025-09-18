import { Text } from 'pixi.js';
import { CustomContainer } from '../../../../components/container/CustomContainer.js';
import { gameScreenPositions } from '../../../../styles/screens-components-positions/game-screen/game-screen-components-position.js';
import { gameScreenStyles } from '../../../../styles/screens-components-styles/game-screen/game-screen-components-styles.js';

export class RoundCounter extends CustomContainer {
  constructor(appContainer) {
    super(appContainer, gameScreenStyles.roundCounterContainer.desktop);

    this.roundCounterText = new RoundConterText();
    this.addChild(this.roundCounterText);
    this._setPosition('desktop');
    // this._setupResponsiveness();
  }

  _setPosition(deviceType) {
    const IS_MOBILE = deviceType === 'mobile';
    let position;

    if (IS_MOBILE) {
      position = gameScreenPositions.roundCounterContainer.desktop;
    } else {
      position = gameScreenPositions.roundCounterContainer.mobile;
    }

    this.position.set(position.x, position.y);
  }
  // _setupResponsiveness() {
  //   this.mediaQuery = window.matchMedia('(max-width: 767px)');
  //   const IS_MOBILE = this.mediaQuery.matches;

  //   if (IS_MOBILE) {
  //     this.updateStyle(gameScreenStyles.roundCounterContainer.mobile);
  //     this._setPosition('mobile')
  //   }

  //   this.mediaQuery.addEventListener('change', (e) => {
  //     if (e.matches) {
  //       this.updateStyle(gameScreenStyles.roundCounterContainer.mobile);
  //       this._setPosition('mobile')
  //     } else {
  //       this.updateStyle(gameScreenStyles.roundCounterContainer.desktop);
  //       this._setPosition('desktop')
  //     }
  //   });
  // }
}

class RoundConterText extends Text {
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
