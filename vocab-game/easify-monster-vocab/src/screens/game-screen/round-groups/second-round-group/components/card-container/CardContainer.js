import { CustomContainer } from '../../../../../../components/container/CustomContainer.js';
import { secondRoundGroupPositions } from '../../../../../../styles/screens-components-positions/game-screen/round-groups/second-round-group/second-round-group-components-positions.js';
import { secondRoundGroupStyles } from '../../../../../../styles/screens-components-styles/game-screen/round-groups/second-round-group/second-round-components-styles.js';

export class CardContainer extends CustomContainer {
  constructor(index, currentRound) {
    super(null, secondRoundGroupStyles.cardContainer.desktop);
    this.width -= 5
    this.height -= 5
    this._setPosition(index, currentRound);
    this._setResponsive(index, currentRound);
  }
  _setPosition(index, currentRound) {
    let POSITION;
    if (currentRound >= 14) {
      POSITION = secondRoundGroupPositions.cardContainer.desktop.secondPosition(index);
    } else {
      POSITION = secondRoundGroupPositions.cardContainer.desktop.firstPosition(index);
    }

    this.position.set(POSITION.x, POSITION.y);
  }

  _setResponsive(index, currentRound) {
    this.mediaQuery = window.matchMedia('(max-width: 767px)');
    const IS_MOBILE = this.mediaQuery.matches;

    if (IS_MOBILE) {
      this.updateStyle(secondRoundGroupStyles.cardContainer.mobile)
      let POSITION;
      if (currentRound >= 14) {
        POSITION = secondRoundGroupPositions.cardContainer.mobile.secondPosition(index);
      } else {
        POSITION = secondRoundGroupPositions.cardContainer.mobile.firstPosition(index);
      }
      this.position.set(POSITION.x, POSITION.y)
    }
  }
}
