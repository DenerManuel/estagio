import { CustomButton } from "../../../../components/button/CustomButton.js";
import { categoriesScreenPositions } from "../../../../styles/screens/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens/categories-screen/categories-screen-components-styles.js";

export class NextButton extends CustomButton {
  constructor() {
    super('▶', categoriesScreenStyles.navigationButtons)

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.nextButton.x;
    const positionY = categoriesScreenPositions.nextButton.y;

    this.position.set(positionX, positionY);
  }
}