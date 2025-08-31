import { homeScreenPositions } from "../../../screens-components-positions/home-screen/home-screen-components-position.js";
import { homeScreenStyles } from "../../../screens-components-styles/home-screen/home-screen-components-styles.js";

export function resetComponentsStyles(components) {
  components.title.style.fontSize = homeScreenStyles.title.desktop.fontSize
  components.startButton.updateStyle(homeScreenStyles.startButton.desktop);
  components.chooseButton.updateStyle(homeScreenStyles.chooseButton.desktop);
  components.reviewButton.updateStyle(homeScreenStyles.reviewButton.desktop);

  resetComponentsPositions(components)
}

function resetComponentsPositions(components) {
  const TITLE_POSITIONS = homeScreenPositions.title.desktop
  const START_POSITIONS = homeScreenPositions.startButton.desktop
  const CHOOSE_POSITIONS = homeScreenPositions.chooseButton.desktop
  const REVIEW_POSITIONS = homeScreenPositions.reviewButton.desktop

  components.title.position.set(TITLE_POSITIONS.x, TITLE_POSITIONS.y)
  components.startButton.position.set(START_POSITIONS.x, START_POSITIONS.y)
  components.chooseButton.position.set(CHOOSE_POSITIONS.x, CHOOSE_POSITIONS.y)
  components.reviewButton.position.set(REVIEW_POSITIONS.x, REVIEW_POSITIONS.y)
}
