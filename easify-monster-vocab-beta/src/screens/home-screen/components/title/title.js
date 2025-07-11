import { homeScreenPositions } from "../../../../styles/screens/home-screen/home-screen-components-position.js";
import { homeScreenStyles } from "../../../../styles/screens/home-screen/home-screen-components-styles.js";

export class Title extends PIXI.Text {
  constructor() {
    super('Easify Vocab', homeScreenStyles.title)

    this._position()
  }

  _position() {
    const POSITION_X = homeScreenPositions.title.x
    const POSITION_Y = homeScreenPositions.title.y

    this.anchor.set(0.5);
    this.position.set(POSITION_X, POSITION_Y);
  }
}