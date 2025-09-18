import { CustomContainer } from "../../../../components/container/CustomContainer.js";
import { categoriesScreenPositions } from "../../../../styles/screens-components-positions/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens-components-styles/categories-screen/categories-screen-components-styles.js";

export class CardsContainer extends CustomContainer {
  constructor(categoriesContainer) {
    super(categoriesContainer, categoriesScreenStyles.cardsContainer.desktop)

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.cardsContainer.desktop.x;
    const positionY = categoriesScreenPositions.cardsContainer.desktop.y;

    this.position.set(positionX, positionY);
  }
}
