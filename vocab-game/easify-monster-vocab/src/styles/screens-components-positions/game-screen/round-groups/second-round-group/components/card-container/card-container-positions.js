import {
  calculateBottomCenteredYPosition,
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
  calculateTopCenteredYPosition,
} from '../../../../../../../utils/position/calculateCenteredPosition.js';
import { secondRoundGroupStyles } from '../../../../../../screens-components-styles/game-screen/round-groups/second-round-group/second-round-components-styles.js';

const CARD_DESKTOP_WIDTH = secondRoundGroupStyles.card.desktop.width;
const CARD_MOBILE_WIDTH = secondRoundGroupStyles.card.mobile.width;

export const cardContainerPosition = {
  desktop: {
    firstPosition: (index) => {
      const POSITION_X = calculateLeftCenteredXPosition() + 80;

      let POSITION_Y;

      if (index === 0) {
        POSITION_Y = 40;
      } else {
        POSITION_Y = CARD_DESKTOP_WIDTH + 100;
      }
      return { x: POSITION_X, y: POSITION_Y };
    },
    secondPosition: (index) => {
      const POSITION_Y = calculateTopCenteredYPosition(CARD_DESKTOP_WIDTH) - 45;

      let POSITION_X;

      if (index === 0) {
        POSITION_X = calculateRightCenteredXPosition(CARD_DESKTOP_WIDTH) - 50;
      } else {
        POSITION_X = calculateLeftCenteredXPosition() + 50;
      }

      return { x: POSITION_X, y: POSITION_Y };
    },
  },
  mobile: {
    firstPosition: (index) => {
      const POSITION_X = calculateLeftCenteredXPosition(CARD_MOBILE_WIDTH) + 25;
      let POSITION_Y;

      if (index === 0) {
        POSITION_Y = calculateBottomCenteredYPosition(CARD_MOBILE_WIDTH) - 15;
      } else {
        POSITION_Y = calculateTopCenteredYPosition(CARD_MOBILE_WIDTH) + 15;
      }

      return { x: POSITION_X, y: POSITION_Y };
    },
    secondPosition: (index) => {
      const POSITION_Y = calculateTopCenteredYPosition(CARD_MOBILE_WIDTH) + 110;

      let POSITION_X;

      if (index === 0) {
        POSITION_X = calculateRightCenteredXPosition(CARD_MOBILE_WIDTH) - 40;
      } else {
        POSITION_X = calculateLeftCenteredXPosition() + 40;
      }

      return { x: POSITION_X, y: POSITION_Y };
    },
  },
};
