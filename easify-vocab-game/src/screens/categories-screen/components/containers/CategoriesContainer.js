import { CustomContainer } from "../../../../components/container/CustomContainer.js";
import { categoriesScreenPositions } from "../../../../styles/screens-components-positions/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens-components-styles/categories-screen/categories-screen-components-styles.js";

export class CategoriesContainer extends CustomContainer {
  constructor(appContainer) {
    super(appContainer, categoriesScreenStyles.categoriesContainer.desktop)

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.categoriesContainer.desktop.x
    const positionY = categoriesScreenPositions.categoriesContainer.desktop.y

    this.position.set(positionX, positionY);
  }
}
