import { calculateCenteredXPosition, calculateCenteredYPosition } from "../../../utils/position/calculateCenteredPosition.js"
import { APP_SIZE } from "../../size/app-size.js"
import { homeScreenStyles } from "./home-screen-components-styles.js"

const BUTTONS_MARGIN = 10

const START_BUTTON_WIDTH = homeScreenStyles.startButton.width
const START_BUTTON_HEIGHT = homeScreenStyles.startButton.height
const START_BUTTON_POSITION_Y = calculateCenteredYPosition(START_BUTTON_HEIGHT) + 20
const CHOOSE_BUTTON_WIDTH = homeScreenStyles.chooseButton.width
const CHOOSE_BUTTON_HEIGHT = homeScreenStyles.chooseButton.height
const CHOOSE_BUTTON_POSITION_Y = START_BUTTON_POSITION_Y + START_BUTTON_HEIGHT + BUTTONS_MARGIN
const REVIEW_BUTTON_WIDTH = homeScreenStyles.reviewButton.width
const REVIEW_BUTTON_POSITION_Y = CHOOSE_BUTTON_POSITION_Y + CHOOSE_BUTTON_HEIGHT + BUTTONS_MARGIN

export const homeScreenPositions = {
  title: {
    x: (APP_SIZE.width / 2),
    y: ((APP_SIZE.height / 2) - 150)
  },
  startButton: {
    x: calculateCenteredXPosition(START_BUTTON_WIDTH),
    y: START_BUTTON_POSITION_Y
  },
  chooseButton: {
    x: calculateCenteredXPosition(CHOOSE_BUTTON_WIDTH),
    y: CHOOSE_BUTTON_POSITION_Y
  },
  reviewButton: {
    x: calculateCenteredXPosition(REVIEW_BUTTON_WIDTH),
    y: REVIEW_BUTTON_POSITION_Y
  }
}