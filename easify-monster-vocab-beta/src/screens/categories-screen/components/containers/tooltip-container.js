import { CustomContainer } from "../../../../components/container/CustomContainer.js";
import { categoriesScreenPositions } from "../../../../styles/screens/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens/categories-screen/categories-screen-components-styles.js";

export class TooltipContainer extends CustomContainer {
  constructor(appContainer) {
    super(appContainer, categoriesScreenStyles.tooltipContainer)

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.tooltipContainer.x;
    const positionY = categoriesScreenPositions.tooltipContainer.y;

    this.position.set(positionX, positionY);
  }
}

