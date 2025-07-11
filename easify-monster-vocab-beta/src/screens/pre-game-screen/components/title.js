import { preGameScreenPositions } from "../../../styles/screens/pre-game-screen/pre-game-screen-components-position.js";
import { preGameScreenStyles } from "../../../styles/screens/pre-game-screen/pre-game-screen-components-styles.js";

export class Title extends PIXI.Text {
  constructor(categoryTitle) {
    super(categoryTitle, preGameScreenStyles.title);
    this._setPosition();
  }

  _setPosition() {
    const POSITION_X = preGameScreenPositions.title.x;
    const POSITION_Y = preGameScreenPositions.title.y;

    this.anchor.set(0.5);
    this.position.set(POSITION_X, POSITION_Y);
  }
}