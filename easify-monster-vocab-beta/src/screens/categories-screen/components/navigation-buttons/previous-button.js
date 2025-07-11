import { CustomButton } from "../../../../components/button/CustomButton.js";
import { categoriesScreenPositions } from "../../../../styles/screens/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens/categories-screen/categories-screen-components-styles.js";

export class PreviousButton extends CustomButton {
  constructor() {
    super('◀', categoriesScreenStyles.navigationButtons)

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.previousButton.x;
    const positionY = categoriesScreenPositions.previousButton.y;

    this.position.set(positionX, positionY);
  }
}