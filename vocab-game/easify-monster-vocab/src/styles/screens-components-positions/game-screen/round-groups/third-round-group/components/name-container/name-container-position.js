import {
  calculateCenteredXPosition,
  calculateCenteredYPosition,
  calculateLeftCenteredXPosition,
  calculateTopCenteredYPosition,
} from '../../../../../../../utils/position/calculateCenteredPosition.js';
import { thirdRoundGroupStyles } from '../../../../../../screens-components-styles/game-screen/round-groups/third-roun-group/third-round-components-styles.js';

const CARD_DESKTOP_WIDTH = thirdRoundGroupStyles.card.desktop.width;
const CARD_MOBILE_WIDTH = thirdRoundGroupStyles.card.mobile.width;
const NAME_CONTAINER_WIDTH = thirdRoundGroupStyles.nameContainer.desktop.width;
const NAME_CONTAINER_MOBILE_WIDTH = thirdRoundGroupStyles.nameContainer.mobile.width;
const NAME_CONTAINER_HEIGHT = thirdRoundGroupStyles.nameContainer.desktop.height;
const NAME_CONTAINER_MOBILE_HEIGHT = thirdRoundGroupStyles.nameContainer.mobile.height;

export const nameContainerPositions = {
  desktop: {
    firstPosition: (index) => {
      const POSITION_X = calculateLeftCenteredXPosition() + 5;
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_Y = calculateCenteredYPosition(CARD_DESKTOP_WIDTH) - 20;
          break;
        case 1:
          POSITION_Y =
            calculateCenteredYPosition(CARD_DESKTOP_WIDTH) - 20 + NAME_CONTAINER_HEIGHT + 15;
          break;
        case 2:
          POSITION_Y =
            calculateCenteredYPosition(CARD_DESKTOP_WIDTH) -
            20 +
            NAME_CONTAINER_HEIGHT +
            15 +
            NAME_CONTAINER_HEIGHT +
            15;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    secondPosition: (index) => {
      const POSITION_X = calculateLeftCenteredXPosition() + 5;
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_Y =
            calculateCenteredYPosition(CARD_DESKTOP_WIDTH) - 20 - NAME_CONTAINER_HEIGHT / 2;
          break;
        case 1:
          POSITION_Y =
            calculateCenteredYPosition(CARD_DESKTOP_WIDTH) - 20 + NAME_CONTAINER_HEIGHT / 2 + 15;
          break;
        case 2:
          POSITION_Y =
            calculateCenteredYPosition(CARD_DESKTOP_WIDTH) -
            20 +
            NAME_CONTAINER_HEIGHT / 2 +
            15 +
            NAME_CONTAINER_HEIGHT +
            15;
          break;
        case 3:
          POSITION_Y =
            calculateCenteredYPosition(CARD_DESKTOP_WIDTH) -
            20 +
            NAME_CONTAINER_HEIGHT / 2 +
            15 +
            NAME_CONTAINER_HEIGHT +
            15 +
            NAME_CONTAINER_HEIGHT +
            15;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    thirdPosition: (index) => {
      const POSITION_X = calculateLeftCenteredXPosition() + 5;
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_Y = calculateCenteredYPosition(CARD_DESKTOP_WIDTH) - 35 - NAME_CONTAINER_HEIGHT;
          break;
        case 1:
          POSITION_Y = calculateCenteredYPosition(CARD_DESKTOP_WIDTH) - 35 + 15;
          break;
        case 2:
          POSITION_Y =
            calculateCenteredYPosition(CARD_DESKTOP_WIDTH) - 35 + NAME_CONTAINER_HEIGHT + 15 + 15;
          break;
        case 3:
          POSITION_Y =
            calculateCenteredYPosition(CARD_DESKTOP_WIDTH) -
            35 +
            NAME_CONTAINER_HEIGHT +
            15 +
            NAME_CONTAINER_HEIGHT +
            15 +
            15;
          break;
        case 4:
          POSITION_Y =
            calculateCenteredYPosition(CARD_DESKTOP_WIDTH) -
            35 +
            NAME_CONTAINER_HEIGHT +
            15 +
            NAME_CONTAINER_HEIGHT +
            15 +
            NAME_CONTAINER_HEIGHT +
            15 +
            15;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    fourthPosition: (index) => {
      const POSITION_X = calculateLeftCenteredXPosition() + 5;
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_Y =
            calculateCenteredYPosition(CARD_DESKTOP_WIDTH) - 20 + NAME_CONTAINER_HEIGHT / 2 + 15;
          break;
        case 1:
          POSITION_Y =
            calculateCenteredYPosition(CARD_DESKTOP_WIDTH) -
            20 +
            NAME_CONTAINER_HEIGHT / 2 +
            15 +
            NAME_CONTAINER_HEIGHT +
            15;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    fifthPosition: (index) => {
      const POSITION_X = calculateLeftCenteredXPosition() + 5;
      const POSITION_Y =
        calculateCenteredYPosition(CARD_DESKTOP_WIDTH) - 20 + NAME_CONTAINER_HEIGHT + 15;

      return { x: POSITION_X, y: POSITION_Y };
    },
  },
  mobile: {
    firstPosition: (index) => {
      const POSITION_X = calculateCenteredXPosition(NAME_CONTAINER_MOBILE_WIDTH);
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_Y = calculateTopCenteredYPosition(NAME_CONTAINER_MOBILE_HEIGHT) + 30;
          break;
        case 1:
          POSITION_Y =
            calculateTopCenteredYPosition(NAME_CONTAINER_MOBILE_HEIGHT) +
            30 +
            NAME_CONTAINER_MOBILE_HEIGHT +
            12;
          0;
          break;
        case 2:
          POSITION_Y =
            calculateTopCenteredYPosition(NAME_CONTAINER_MOBILE_HEIGHT) +
            30 +
            NAME_CONTAINER_MOBILE_HEIGHT +
            12 +
            NAME_CONTAINER_MOBILE_HEIGHT +
            12;
          0;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    secondPosition: (index) => {
      const POSITION_X = calculateCenteredXPosition(NAME_CONTAINER_MOBILE_WIDTH);
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_Y = calculateTopCenteredYPosition(NAME_CONTAINER_MOBILE_HEIGHT) - 10;
          break;
        case 1:
          POSITION_Y =
            calculateTopCenteredYPosition(NAME_CONTAINER_MOBILE_HEIGHT) -
            10 +
            NAME_CONTAINER_MOBILE_HEIGHT +
            12;
          0;
          break;
        case 2:
          POSITION_Y =
            calculateTopCenteredYPosition(NAME_CONTAINER_MOBILE_HEIGHT) -
            10 +
            NAME_CONTAINER_MOBILE_HEIGHT +
            12 +
            NAME_CONTAINER_MOBILE_HEIGHT +
            12;
          0;
          break;
        case 3:
          POSITION_Y =
            calculateTopCenteredYPosition(NAME_CONTAINER_MOBILE_HEIGHT) -
            10 +
            NAME_CONTAINER_MOBILE_HEIGHT +
            12 +
            NAME_CONTAINER_MOBILE_HEIGHT +
            12 +
            NAME_CONTAINER_MOBILE_HEIGHT +
            12;
          0;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    thirdPosition: (index) => {
      const POSITION_X = calculateCenteredXPosition(NAME_CONTAINER_MOBILE_WIDTH);
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_Y =
            calculateTopCenteredYPosition(NAME_CONTAINER_MOBILE_HEIGHT) -
            10 +
            NAME_CONTAINER_MOBILE_HEIGHT +
            12;
          break;
        case 1:
          POSITION_Y =
            calculateTopCenteredYPosition(NAME_CONTAINER_MOBILE_HEIGHT) -
            10 +
            NAME_CONTAINER_MOBILE_HEIGHT +
            12 +
            NAME_CONTAINER_MOBILE_HEIGHT +
            12;
          0;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    fourthPosition: (index) => {
      const POSITION_X = calculateCenteredXPosition(NAME_CONTAINER_MOBILE_WIDTH);
      const POSITION_Y =
        calculateTopCenteredYPosition(NAME_CONTAINER_MOBILE_HEIGHT) +
        30 +
        NAME_CONTAINER_MOBILE_HEIGHT +
        12;

      return { x: POSITION_X, y: POSITION_Y };
    },
  },
};
