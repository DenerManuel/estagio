import { categoriesScreenPositions } from "../../../../styles/screens/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens/categories-screen/categories-screen-components-styles.js";
import { createItemsText } from "../../helpers/tooltip/format-tooltip-text.js";

export class TooltipItemTexts extends PIXI.Text {
  itemTexts = null

  constructor(categoryItems) {
    const itemTexts = createItemsText(categoryItems)
    super(itemTexts, categoriesScreenStyles.tooltipItemtexts)

    this.itemTexts = itemTexts
    this.name = 'tooltipItemTexts'

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.tooltipItemTexts.x
    const positionY = categoriesScreenPositions.tooltipItemTexts.y

    this.anchor.set(0.5)
    this.position.set(positionX, positionY)
  }
}
