import CustomText from "../../../../components/text/CustomText.js";
import { homeScreenStyles } from "../../../../styles/screens-components-styles/home-screen/home-screen-components-styles.js";
import { homeScreenPositions } from "../../../../styles/screens-components-positions/home-screen/home-screen-components-position.js";

export class Title extends CustomText {
  constructor() {
    super('Easify Vocab', homeScreenStyles.title.desktop)

    this._setPosition()
  }

  _setPosition() {
    const POSITION_X = homeScreenPositions.title.desktop.x
    const POSITION_Y = homeScreenPositions.title.desktop.y

    this.anchor.set(0.5);
    this.position.set(POSITION_X, POSITION_Y);
  }
}
