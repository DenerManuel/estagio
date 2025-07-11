import { calculateCenteredXPosition } from "../../../utils/position/calculateCenteredPosition.js"
import { appSize } from "../../appSize.js"
import { categoriesScreenStyles } from "./categories-screen-components-styles.js"

const CATEGORIES_CONTAINER_WIDTH = categoriesScreenStyles.categoriesContainer.width
const TOOLTIP_CONTAINER_WIDTH = categoriesScreenStyles.tooltipContainer.width
const TOOLTIP_CONTAINER_HEIGHT = categoriesScreenStyles.tooltipContainer.height
const NAVIGATION_BUTTONS_WIDTH = categoriesScreenStyles.navigationButtons.width
const PREVIOUS_BUTTON_POSITION_X = 20


export const categoriesScreenPositions = {
  categoriesContainer: {
    x: calculateCenteredXPosition(CATEGORIES_CONTAINER_WIDTH),
    y: 140,
  },
  tooltipContainer: {
    x: calculateCenteredXPosition(TOOLTIP_CONTAINER_WIDTH),
    y: 70,
  },
  defaultTooltipContent: {
    x: TOOLTIP_CONTAINER_WIDTH / 2,
    y: TOOLTIP_CONTAINER_HEIGHT / 2,
  },
  tooltipItemTexts: {
    x: TOOLTIP_CONTAINER_WIDTH / 2,
    y: (TOOLTIP_CONTAINER_HEIGHT / 2) + 15
  },
  tooltipTitle: {
    x: TOOLTIP_CONTAINER_WIDTH / 2,
    y: (TOOLTIP_CONTAINER_HEIGHT / 2) - 25
  },
  cardsContainer: {
    x: 0,
    y: 50,
  },
  previousButton: {
    x: PREVIOUS_BUTTON_POSITION_X,
    y: 270,
  },
  nextButton: {
    x: appSize.width - (NAVIGATION_BUTTONS_WIDTH + PREVIOUS_BUTTON_POSITION_X),
    y: 270,
  }
}