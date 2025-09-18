import {
  calculateBottomCenteredYPosition,
  calculateCenteredXPosition,
  calculateCenteredYPosition,
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
  calculateTopCenteredYPosition,
} from '../../../../../../../utils/position/calculateCenteredPosition.js';
import { secondRoundGroupStyles } from '../../../../../../screens-components-styles/game-screen/round-groups/second-round-group/second-round-components-styles.js';

const CARD_DESKTOP_WIDTH = secondRoundGroupStyles.card.desktop.width;
const CARD_MOBILE_WIDTH = secondRoundGroupStyles.card.mobile.width;

export const cardsPositions = {
  desktop: {
    firstPosition: (index) => {
      const POSITION_X = calculateRightCenteredXPosition(CARD_DESKTOP_WIDTH) - 80;
      let POSITION_Y;

      if (index === 0) {
        POSITION_Y = 40;
      } else {
        POSITION_Y = CARD_DESKTOP_WIDTH + 100;
      }

      return { x: POSITION_X, y: POSITION_Y };
    },
    secondPosition: (index) => {
      let POSITION_X;
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_X =
            calculateRightCenteredXPosition(CARD_DESKTOP_WIDTH) - CARD_DESKTOP_WIDTH - 10;
          POSITION_Y = 60;
          break;
        case 1:
          POSITION_X = calculateRightCenteredXPosition(CARD_DESKTOP_WIDTH);
          POSITION_Y = 60;
          break;
        case 2:
          POSITION_X =
            calculateRightCenteredXPosition(CARD_DESKTOP_WIDTH) - CARD_DESKTOP_WIDTH / 2 - 5;
          POSITION_Y = 60 + CARD_DESKTOP_WIDTH + 10;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    thirdPosition: (index) => {
      let POSITION_X;
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_X =
            calculateRightCenteredXPosition(CARD_DESKTOP_WIDTH) - CARD_DESKTOP_WIDTH - 15;
          POSITION_Y = 60;
          break;
        case 1:
          POSITION_X = calculateRightCenteredXPosition(CARD_DESKTOP_WIDTH) - 5;
          POSITION_Y = 40;
          break;
        case 2:
          POSITION_X = calculateLeftCenteredXPosition() + 5;
          POSITION_Y = 40;
          break;
        case 3:
          POSITION_X = calculateLeftCenteredXPosition() + CARD_DESKTOP_WIDTH + 15;
          POSITION_Y = 60;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    fourthPosition: (index) => {
      let POSITION_X;
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_X = calculateCenteredXPosition(CARD_DESKTOP_WIDTH) - CARD_DESKTOP_WIDTH - 25;
          POSITION_Y = 60;
          break;
        case 1:
          POSITION_X = calculateCenteredXPosition(CARD_DESKTOP_WIDTH);
          POSITION_Y = 40;
          break;
        case 2:
          POSITION_X = calculateCenteredXPosition(CARD_DESKTOP_WIDTH) + CARD_DESKTOP_WIDTH + 25;
          POSITION_Y = 60;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    fifthPosition: (index) => {
      let POSITION_X;
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_X = calculateRightCenteredXPosition(CARD_DESKTOP_WIDTH) - 20;
          POSITION_Y = 50;
          break;
        case 1:
          POSITION_X = calculateLeftCenteredXPosition() + 20;
          POSITION_Y = 50;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    sixthPosition: (index) => {
      const POSITION_X = calculateCenteredXPosition(CARD_DESKTOP_WIDTH);
      const POSITION_Y = 50;

      return { x: POSITION_X, y: POSITION_Y };
    },
  },
  mobile: {
    firstPosition: (index) => {
      const POSITION_X = calculateRightCenteredXPosition(CARD_MOBILE_WIDTH) - 50;
      let POSITION_Y;

      if (index === 0) {
        POSITION_Y = calculateBottomCenteredYPosition(CARD_MOBILE_WIDTH) - 15;
      } else {
        POSITION_Y = calculateTopCenteredYPosition(CARD_MOBILE_WIDTH) + 15;
      }

      return { x: POSITION_X, y: POSITION_Y };
    },
    secondPosition: (index) => {
      const POSITION_X = calculateRightCenteredXPosition(CARD_MOBILE_WIDTH) - 50;
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_Y = calculateCenteredYPosition(CARD_MOBILE_WIDTH) - CARD_MOBILE_WIDTH - 5;
          break;
        case 1:
          POSITION_Y = calculateCenteredYPosition(CARD_MOBILE_WIDTH) + 10;
          break;
        case 2:
          POSITION_Y = calculateCenteredYPosition(CARD_MOBILE_WIDTH) + CARD_MOBILE_WIDTH + 25;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    thirdPosition: (index) => {
      let POSITION_X;
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_X = calculateRightCenteredXPosition(CARD_MOBILE_WIDTH) - 10;
          POSITION_Y = 115;
          break;
        case 1:
          POSITION_X = calculateLeftCenteredXPosition(CARD_MOBILE_WIDTH) + 10;
          POSITION_Y = 115;
          break;
        case 2:
          POSITION_X = calculateRightCenteredXPosition(CARD_MOBILE_WIDTH) - 10;
          POSITION_Y = 115 + CARD_MOBILE_WIDTH + 8;
          break;
        case 3:
          POSITION_X = calculateLeftCenteredXPosition(CARD_MOBILE_WIDTH) + 10;
          POSITION_Y = 115 + CARD_MOBILE_WIDTH + 8;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    fourthPosition: (index) => {
      let POSITION_X;
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_X = calculateCenteredXPosition(CARD_MOBILE_WIDTH);
          POSITION_Y = 115;
          break;
        case 1:
          POSITION_X = calculateRightCenteredXPosition(CARD_MOBILE_WIDTH) - 8;
          POSITION_Y = 115 + CARD_MOBILE_WIDTH + 8;
          break;
        case 2:
          POSITION_X = calculateLeftCenteredXPosition(CARD_MOBILE_WIDTH) + 8;
          POSITION_Y = 115 + CARD_MOBILE_WIDTH + 8;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    fifthPosition: (index) => {
      let POSITION_X;
      let POSITION_Y;

      switch (index) {
        case 0:
          POSITION_X = calculateRightCenteredXPosition(CARD_MOBILE_WIDTH) - 8;
          POSITION_Y = 115 + CARD_MOBILE_WIDTH + 8;
          break;
        case 1:
          POSITION_X = calculateLeftCenteredXPosition(CARD_MOBILE_WIDTH) + 8;
          POSITION_Y = 115 + CARD_MOBILE_WIDTH + 8;
          break;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    sixthPosition: (index) => {
      const POSITION_X = calculateCenteredXPosition(CARD_MOBILE_WIDTH);
      const POSITION_Y = 115 + CARD_MOBILE_WIDTH + 8;

      return { x: POSITION_X, y: POSITION_Y };
    },
  },
};
