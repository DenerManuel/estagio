import { TextContainer } from '../../../../components/text-container/TextContainer.js';
import { preGameScreenStyles } from "../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js"

export class ItemName extends TextContainer {
  constructor(text) {
    super(text, preGameScreenStyles.itemName.desktop)
  }
}
