import { CustomContainer } from "../../../../components/container/CustomContainer.js";
import { categoriesScreenPositions } from "../../../../styles/screens/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens/categories-screen/categories-screen-components-styles.js";

export class CategoriesContainer extends CustomContainer {
  constructor(appContainer) {
    super(appContainer, categoriesScreenStyles.categoriesContainer)

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.categoriesContainer.x;
    const positionY = categoriesScreenPositions.categoriesContainer.y;

    this.position.set(positionX, positionY);
  }
}