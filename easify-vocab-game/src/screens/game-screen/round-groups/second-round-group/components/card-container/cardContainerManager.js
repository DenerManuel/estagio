import { CustomContainer } from '../../../../../../components/container/CustomContainer.js';
import { calculateRightCenteredXPosition } from '../../../../../../utils/position/calculateCenteredPosition.js';

const CARD_CONTAINER_CONFIG = {
  width: 170,
  height: 170,
  backgroundColor: 0xfff8dc,
  borderColor: 0xfb7302,
  borderWidth: 5,
  borderRadius: 40,
  hover: false,
};

export function createCardContainer(appContainer) {
  return new CustomContainer(appContainer, CARD_CONTAINER_CONFIG);
}
;
export function positionCardContainer(cardContainer, index, currentRound) {
  if (currentRound <= 13) {
    cardContainer.x = 495;
    cardContainer.y = 35 + index * 220;
  } else if (currentRound <= 19) {
    195 + index * 275;
    cardContainer.x = 200 + index * 275
    cardContainer.y = 260;
  }
}
