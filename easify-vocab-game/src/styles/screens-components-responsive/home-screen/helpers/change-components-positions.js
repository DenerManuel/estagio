import { homeScreenPositions } from '../../../screens-components-positions/home-screen/home-screen-components-position.js';

export function changeComponentsPositions(components) {
  const TITLE_POSITIONS = homeScreenPositions.title.mobile;
  const START_POSITIONS = homeScreenPositions.startButton.mobile;
  const CHOOSE_POSITIONS = homeScreenPositions.chooseButton.mobile;
  const REVIEW_POSITIONS = homeScreenPositions.reviewButton.mobile;

  components.title.position.set(TITLE_POSITIONS.x, TITLE_POSITIONS.y);
  components.startButton.position.set(START_POSITIONS.x, START_POSITIONS.y);
  components.chooseButton.position.set(CHOOSE_POSITIONS.x, CHOOSE_POSITIONS.y);
  components.reviewButton.position.set(REVIEW_POSITIONS.x, REVIEW_POSITIONS.y);
}
