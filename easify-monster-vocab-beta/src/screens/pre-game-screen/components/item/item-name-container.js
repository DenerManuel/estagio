import { CustomContainer } from "../../../../components/container/CustomContainer.js";
import { preGameScreenStyles } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-styles.js";
import { ItemNameText } from "./item-name-text.js";

export class ItemNameContainer extends CustomContainer {
  constructor(appContainer, itemName) {
    super(appContainer, preGameScreenStyles.itemNameContainer)
    this.itemNameText = new ItemNameText(itemName)
    this.addChild(this.itemNameText);
  }
}