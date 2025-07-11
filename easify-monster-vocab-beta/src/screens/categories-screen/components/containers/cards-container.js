import { CustomContainer } from "../../../../components/container/CustomContainer.js";
import { categoriesScreenPositions } from "../../../../styles/screens/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens/categories-screen/categories-screen-components-styles.js";

export class CardsContainer extends CustomContainer {
  constructor(categoriesContainer) {
    super(categoriesContainer, categoriesScreenStyles.cardsContainer)

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.cardsContainer.x;
    const positionY = categoriesScreenPositions.cardsContainer.y;

    this.position.set(positionX, positionY);
  }
}