import {
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
} from '../../../../../utils/position/calculateCenteredPosition.js';
import { preGameScreenStyles } from '../../../../screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export const itemCardPosition = {
  desktop: (index) => {
    const MARGIN = preGameScreenStyles.itemCard.desktop.width + 34;
    const POSITION_X = 34 + index * MARGIN;

    return {x: POSITION_X, y: 115};
  },
  mobile: (index) => {
    switch (index) {
      case 0:
        return {
          x: calculateRightCenteredXPosition(preGameScreenStyles.itemCard.mobile.width) - 25,
          y: 120,
        };
      case 1:
        return {
          x: calculateLeftCenteredXPosition() + 25,
          y: 120,
        };
      case 2:
        return {
          x: calculateRightCenteredXPosition(preGameScreenStyles.itemCard.mobile.width) - 25,
          y: 360,
        };
      case 3:
        return {
          x: calculateLeftCenteredXPosition() + 25,
          y: 360,
        };
    }
  },
};
