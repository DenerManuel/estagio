import { preGameScreenPositions } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-position.js";
import { preGameScreenStyles } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-styles.js";

export class ItemNameText extends PIXI.Text {
  constructor(itemName) {
    super(itemName, preGameScreenStyles.itemNameText);
    this._setPosition();
  }
  _setPosition() {
    const POSITION_X = preGameScreenPositions.itemNameText.x;
    const POSITION_Y = preGameScreenPositions.itemNameText.y;

    this.anchor.set(0.5)
    this.position.set(POSITION_X, POSITION_Y);
  }
}