import { categoriesScreenPositions } from "../../../../styles/screens/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens/categories-screen/categories-screen-components-styles.js";
import { removeTooltipItems } from "../../helpers/tooltip/remove-tooltip-items.js";

export class DefaultTooltipContent extends PIXI.Text {
  constructor() {
    super('Select Content', categoriesScreenStyles.defaultTooltipContent)
    this.name = 'defaultTooltipContent';

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.defaultTooltipContent.x
    const positionY = categoriesScreenPositions.defaultTooltipContent.y

    this.anchor.set(0.5)
    this.position.set(positionX, positionY)
  }

  addToTooltipContainer(tooltipContainer) {
    tooltipContainer.addChild(this);
  }

  static getInstance(tooltipContainer) {
    if (!DefaultTooltipContent._instance) {
      DefaultTooltipContent._instance = new DefaultTooltipContent(tooltipContainer);
    }
    removeTooltipItems(tooltipContainer);
    return DefaultTooltipContent._instance;
  }
}
