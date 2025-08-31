import { CustomButton } from "../../../../components/button/CustomButton.js";
import { categoriesScreenPositions } from "../../../../styles/screens-components-positions/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens-components-styles/categories-screen/categories-screen-components-styles.js";

export class PreviousButton extends CustomButton {
  constructor() {
    super('◀', categoriesScreenStyles.navigationButtons.desktop)

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.previousButton.desktop.x;
    const positionY = categoriesScreenPositions.previousButton.desktop.y;

    this.position.set(positionX, positionY);
  }
}
