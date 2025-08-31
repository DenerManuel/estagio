import { TextContainer } from '../../../../../../components/text-container/TextContainer.js';
import { firstRoundGroupPositions } from '../../../../../../styles/screens-components-positions/game-screen/round-groups/first-round-group/first-round-group-components-positions.js';
import { firstRoundGroupStyles } from '../../../../../../styles/screens-components-styles/game-screen/round-groups/first-round-group/first-round-components-styles.js';

export class ItemName extends TextContainer {
  constructor(text) {
    super(text, firstRoundGroupStyles.nameFieldContainer.desktop);
    this.name = text;
    this._setPosition();
  }

  _setPosition() {
    const POSITION = firstRoundGroupPositions.nameFieldContainer.desktop.firstPosition();

    this.position.set(POSITION[0], POSITION[1]);
  }
}
