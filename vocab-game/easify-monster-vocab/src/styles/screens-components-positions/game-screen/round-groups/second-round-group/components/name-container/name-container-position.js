import {
  calculateBottomCenteredYPosition,
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
  calculateTopCenteredYPosition,
} from '../../../../../../../utils/position/calculateCenteredPosition.js';
import { secondRoundGroupStyles } from '../../../../../../screens-components-styles/game-screen/round-groups/second-round-group/second-round-components-styles.js';

const CARD_CONTAINER_DESKTOP_WIDTH = secondRoundGroupStyles.cardContainer.desktop.width;
const CARD_CONTAINER_MOBILE_WIDTH = secondRoundGroupStyles.cardContainer.mobile.width;
const NAME_CONTAINER_DESKTOP_HEIGHT = secondRoundGroupStyles.nameContainer.desktop.height;
const NAME_CONTAINER_MOBILE_HEIGHT = secondRoundGroupStyles.nameContainer.mobile.height;

const SIZE_DESKTOP_DIFFERENCE =
  secondRoundGroupStyles.nameContainer.desktop.width -
  secondRoundGroupStyles.cardContainer.desktop.width;
const SIZE_MOBILE_DIFFERENCE =
  secondRoundGroupStyles.nameContainer.mobile.width -
  secondRoundGroupStyles.cardContainer.mobile.width;

export const nameContainerPosition = {
  desktop: {
    firstPosition: (index) => {
      const POSITION_X = calculateLeftCenteredXPosition() + 80 - SIZE_DESKTOP_DIFFERENCE / 2;

      let POSITION_Y;

      if (index === 0) {
        POSITION_Y = 20 + CARD_CONTAINER_DESKTOP_WIDTH - NAME_CONTAINER_DESKTOP_HEIGHT / 2;
      } else {
        POSITION_Y =
          secondRoundGroupStyles.cardContainer.desktop.width +
          80 +
          CARD_CONTAINER_DESKTOP_WIDTH -
          NAME_CONTAINER_DESKTOP_HEIGHT / 2;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    secondPosition: (index) => {
      const POSITION_Y =
        calculateTopCenteredYPosition(CARD_CONTAINER_DESKTOP_WIDTH) +
        CARD_CONTAINER_DESKTOP_WIDTH -
        45 -
        NAME_CONTAINER_DESKTOP_HEIGHT / 2;

      let POSITION_X;

      if (index === 0) {
        POSITION_X =
          calculateRightCenteredXPosition(CARD_CONTAINER_DESKTOP_WIDTH) -
          50 -
          SIZE_DESKTOP_DIFFERENCE / 2;
      } else {
        POSITION_X = calculateLeftCenteredXPosition() + 50 - SIZE_DESKTOP_DIFFERENCE / 2;
      }

      return { x: POSITION_X, y: POSITION_Y };
    },
  },
  mobile: {
    firstPosition: (index) => {
      const POSITION_X =
        calculateLeftCenteredXPosition(CARD_CONTAINER_MOBILE_WIDTH) +
        25 -
        SIZE_MOBILE_DIFFERENCE / 2;
      let POSITION_Y;

      if (index === 0) {
        POSITION_Y =
          calculateBottomCenteredYPosition(CARD_CONTAINER_MOBILE_WIDTH) -
          15 +
          (CARD_CONTAINER_MOBILE_WIDTH - NAME_CONTAINER_MOBILE_HEIGHT);
      } else {
        POSITION_Y =
          calculateTopCenteredYPosition(CARD_CONTAINER_MOBILE_WIDTH) +
          15 +
          (CARD_CONTAINER_MOBILE_WIDTH - NAME_CONTAINER_MOBILE_HEIGHT);
      }

      return { x: POSITION_X, y: POSITION_Y };
    },
    secondPosition: (index) => {
      const POSITION_Y =
        calculateTopCenteredYPosition(CARD_CONTAINER_MOBILE_WIDTH) +
        CARD_CONTAINER_MOBILE_WIDTH + 85 -
        NAME_CONTAINER_MOBILE_HEIGHT / 2;

      let POSITION_X;

      if (index === 0) {
        POSITION_X =
          calculateRightCenteredXPosition(CARD_CONTAINER_MOBILE_WIDTH) -
          40 -
          SIZE_MOBILE_DIFFERENCE / 2;
      } else {
        POSITION_X = calculateLeftCenteredXPosition() + 40 - SIZE_MOBILE_DIFFERENCE / 2;
      }

      return { x: POSITION_X, y: POSITION_Y };
    },
  },
};
