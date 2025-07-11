import { calculateCenteredXPosition, calculateLeftCenteredXPosition, calculateRightCenteredXPosition } from "../../../utils/position/calculateCenteredPosition.js"
import { reviewScreenStyles } from "./review-screen-components-styles.js"

reviewScreenStyles

const IMAGE_CONTAINER_WIDTH = reviewScreenStyles.imageContainer.width
const PREVIOUS_BUTTON_WIDTH = reviewScreenStyles.navigationButtons.width
const WORD_CONTAINER_WIDTH = reviewScreenStyles.wordContainer.width
const WORD_CONTAINER_HEIGHT = reviewScreenStyles.wordContainer.height
const TOOGLE_BUTTON_WIDTH = reviewScreenStyles.toogleButton.width
const FOOTER_CONTAINER_WIDTH = reviewScreenStyles.footerContainer.width
const FOOTER_CONTAINER_HEIGHT = reviewScreenStyles.footerContainer.height
// const TOOLTIP_CONTAINER_HEIGHT = categoriesScreenStyles.tooltipContainer.height
// const NAVIGATION_BUTTONS_WIDTH = categoriesScreenStyles.navigationButtons.width
// const PREVIOUS_BUTTON_POSITION_X = 20


export const reviewScreenPositions = {
  imageContainer: {
    x: calculateCenteredXPosition(IMAGE_CONTAINER_WIDTH),
    y: 45,
  },
  previousButton: {
    x: (calculateRightCenteredXPosition(PREVIOUS_BUTTON_WIDTH) - (IMAGE_CONTAINER_WIDTH / 2) - 25),
    y: 140,
  },
  nextButton: {
    x: (calculateLeftCenteredXPosition() + (IMAGE_CONTAINER_WIDTH / 2) + 25),
    y: 140,
  },
  wordContainer: {
    x: calculateCenteredXPosition(WORD_CONTAINER_WIDTH),
    y: 350,
  },
  wordText: {
    x: WORD_CONTAINER_WIDTH / 2,
    y: WORD_CONTAINER_HEIGHT / 2,
  },
  toogleButton: {
    x: (calculateRightCenteredXPosition(TOOGLE_BUTTON_WIDTH) - (WORD_CONTAINER_WIDTH / 2) - 20),
    y: 360,
  },
  soundButton: {
    x: (calculateLeftCenteredXPosition() + (WORD_CONTAINER_WIDTH / 2) + 20),
    y: 360
  },
  footerContainer: {
    x: calculateCenteredXPosition(FOOTER_CONTAINER_WIDTH),
    y: 460
  },
  footerTitle: {
    x: FOOTER_CONTAINER_WIDTH / 2,
    y: (FOOTER_CONTAINER_HEIGHT / 2) - 15,
  },
  footerQuantity: {
    x: FOOTER_CONTAINER_WIDTH / 2,
    y: (FOOTER_CONTAINER_HEIGHT / 2) + 20,
  },
}