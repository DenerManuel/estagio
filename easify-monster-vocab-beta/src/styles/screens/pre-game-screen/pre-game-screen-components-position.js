import { calculateCenteredXPosition, calculateLeftCenteredXPosition, calculateRightCenteredXPosition } from "../../../utils/position/calculateCenteredPosition.js"
import { APP_SIZE } from "../../size/app-size.js"
import { preGameScreenStyles } from "./pre-game-screen-components-styles.js"

const MODAL_WIDTH = preGameScreenStyles.modal.width
const MODAL_HEIGHT = preGameScreenStyles.modal.height
const ITEM_CARD_WIDTH = preGameScreenStyles.itemCard.width
const ITEM_NAME_CONTAINER_WIDTH = preGameScreenStyles.itemNameContainer.width
const ITEM_NAME_CONTAINER_HEIGHT = preGameScreenStyles.itemNameContainer.height
const PREVIOUS_BUTTON_WIDTH = preGameScreenStyles.navigationButtons.width
const PLAY_BUTTON_WIDTH = preGameScreenStyles.playButton.width
const CHOOSE_BUTTON_WIDTH = preGameScreenStyles.chooseButton.width
const PLAY_BUTTON_HEIGHT = preGameScreenStyles.playButton.height
const CONFIG_MODAL_WIDTH = preGameScreenStyles.modal.width
const CONFIG_MODAL_HEIGHT = preGameScreenStyles.modal.height


export const preGameScreenPositions = {
  title: {
    x: (APP_SIZE.width / 2),
    y: ((APP_SIZE.height / 2) - 240) // Higher up
  },
  itemCard: function (index) {
    const MARGIN = (ITEM_CARD_WIDTH) + 34
    const POSITION_X = (34 + (index * MARGIN))
    const POSITION_Y = 115

    return [POSITION_X, POSITION_Y]
  },
  itemNameContainer: function (index) {
    const MARGIN = (ITEM_NAME_CONTAINER_WIDTH) + 12

    const POSITION_X = (23 + (index * MARGIN))
    const POSITION_Y = 260

    return [POSITION_X, POSITION_Y]
  },
  itemNameText: {
    x: ITEM_NAME_CONTAINER_WIDTH / 2,
    y: ITEM_NAME_CONTAINER_HEIGHT / 2
  },
  previousButton: {
    x: (calculateRightCenteredXPosition(PREVIOUS_BUTTON_WIDTH) - (PLAY_BUTTON_WIDTH / 2)) - 20,
    y: 353
  },
  nextButton: {
    x: (calculateLeftCenteredXPosition() + (PLAY_BUTTON_WIDTH / 2)) + 20,
    y: 353
  },
  playButton: {
    x: calculateCenteredXPosition(PLAY_BUTTON_WIDTH),
    y: APP_SIZE.height / 2 + 55
  },
  chooseButton: {
    x: calculateCenteredXPosition(CHOOSE_BUTTON_WIDTH),
    y: APP_SIZE.height / 2 + (PLAY_BUTTON_HEIGHT + 55) + 15
  },
  configButton: {
    x: 100,
    y: APP_SIZE.height - 70
  },
  scoreModeButton: {
    x: 60,
    y: (MODAL_HEIGHT / 2) - 25
  },
  heartModeButton: {
    x: 290,
    y: (MODAL_HEIGHT / 2) - 25
  },
  modalTitle: {
    x: MODAL_WIDTH / 2,
    y: 40
  },
  configModal: {
    x: (APP_SIZE.width - MODAL_WIDTH) / 2,
    y: (APP_SIZE.height - MODAL_HEIGHT) / 2
  },
  closeButton: {
    x: CONFIG_MODAL_WIDTH / 2,
    y: CONFIG_MODAL_HEIGHT - 40
  }
}