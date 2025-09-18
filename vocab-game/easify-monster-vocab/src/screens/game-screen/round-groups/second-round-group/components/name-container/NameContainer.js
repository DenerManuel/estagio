import { TextContainer } from '../../../../../../components/text-container/TextContainer.js';
import { secondRoundGroupPositions } from '../../../../../../styles/screens-components-positions/game-screen/round-groups/second-round-group/second-round-group-components-positions.js';
import { secondRoundGroupStyles } from '../../../../../../styles/screens-components-styles/game-screen/round-groups/second-round-group/second-round-components-styles.js';

export class NameContainer extends TextContainer {
  constructor(name, index, currentRound) {
    super(name, secondRoundGroupStyles.nameContainer.desktop);
    this.name = name;

    this._setPosition(index, currentRound);
    this._setResponsive(index, currentRound)
  }

  _setPosition(index, currentRound) {
    let POSITION;
    if (currentRound >= 14) {
      POSITION = secondRoundGroupPositions.nameContainer.desktop.secondPosition(index);
    } else {
      POSITION = secondRoundGroupPositions.nameContainer.desktop.firstPosition(index);
    }

    this.position.set(POSITION.x, POSITION.y);
  }

  _setResponsive(index, currentRound) {
    this.mediaQuery = window.matchMedia('(max-width: 767px)');
    const IS_MOBILE = this.mediaQuery.matches;

    if (IS_MOBILE) {
      this.updateStyle(secondRoundGroupStyles.nameContainer.mobile)
      this.text.updateStyle(secondRoundGroupStyles.nameContainer.mobile)
      let POSITION;
      if (currentRound >= 14) {
        POSITION = secondRoundGroupPositions.nameContainer.mobile.secondPosition(index);
      } else {
        POSITION = secondRoundGroupPositions.nameContainer.mobile.firstPosition(index);
      }
      this.position.set(POSITION.x, POSITION.y)
    }
  }
}
