import { categoriesScreenPositions } from "../../../../styles/screens-components-positions/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens-components-styles/categories-screen/categories-screen-components-styles.js";

export class TooltipTitle extends PIXI.Text {
  constructor(title) {
    super(title, categoriesScreenStyles.tooltipTitle.desktop)
    this.name = 'tooltipTitle'

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.tooltipTitle.desktop.x
    const positionY = categoriesScreenPositions.tooltipTitle.desktop.y

    this.anchor.set(0.5)
    this.position.set(positionX, positionY)
  }
}