import { categoriesScreenPositions } from "../../../../styles/screens/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens/categories-screen/categories-screen-components-styles.js";

const TOOLTIP_TITLE_OPTIONS = {
  fontFamily: 'Arial, sans-serif',
  fontSize: 20,
  fontWeight: '700',
  fill: 0xFFFFFF,
  align: 'center'
}

export class TooltipTitle extends PIXI.Text {
  constructor(title) {
    super(title, categoriesScreenStyles.tooltipTitle)
    this.name = 'tooltipTitle'

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.tooltipTitle.x
    const positionY = categoriesScreenPositions.tooltipTitle.y

    this.anchor.set(0.5)
    this.position.set(positionX, positionY)
  }
}