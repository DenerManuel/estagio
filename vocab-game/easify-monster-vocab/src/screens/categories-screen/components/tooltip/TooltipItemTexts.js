import { categoriesScreenPositions } from "../../../../styles/screens-components-positions/categories-screen/categories-screen-components-positions.js";
import { categoriesScreenStyles } from "../../../../styles/screens-components-styles/categories-screen/categories-screen-components-styles.js";
import { createItemsText } from "../../helpers/tooltip/format-tooltip-text.js";
import { Text } from "pixi.js"

export class TooltipItemTexts extends Text {
  itemTexts = null

  constructor(categoryItems) {
    const itemTexts = createItemsText(categoryItems)
    super(itemTexts, categoriesScreenStyles.tooltipItemtexts.desktop)

    this.itemTexts = itemTexts
    this.name = 'tooltipItemTexts'

    this._setPosition()
  }

  _setPosition() {
    const positionX = categoriesScreenPositions.tooltipItemTexts.desktop.x
    const positionY = categoriesScreenPositions.tooltipItemTexts.desktop.y

    this.anchor.set(0.5)
    this.position.set(positionX, positionY)
  }
}
