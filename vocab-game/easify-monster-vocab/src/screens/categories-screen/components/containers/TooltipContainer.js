import { CustomContainer } from "../../../../components/container/CustomContainer.js";
import { categoriesScreenPositions } from "../../../../styles/screens-components-positions/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens-components-styles/categories-screen/categories-screen-components-styles.js";


export class TooltipContainer extends CustomContainer {
  constructor(appContainer) {
    super(appContainer, categoriesScreenStyles.tooltipContainer.desktop)

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.tooltipContainer.desktop.x;
    const positionY = categoriesScreenPositions.tooltipContainer.desktop.y;

    this.position.set(positionX, positionY);
  }
}
