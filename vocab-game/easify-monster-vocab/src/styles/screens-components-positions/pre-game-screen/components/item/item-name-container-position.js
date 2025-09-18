import {
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
} from '../../../../../utils/position/calculateCenteredPosition.js';
import { preGameScreenStyles } from '../../../../screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export const itemNameContainerPosition = {
  desktop: (index) => {
    const MARGIN = preGameScreenStyles.itemName.desktop.width + 12;
    const POSITION_X = 23 + index * MARGIN;

    return {x: POSITION_X, y: 260};
  },
  mobile: (index) => {
    switch (index) {
      case 0:
        return {
          x:
            calculateRightCenteredXPosition(preGameScreenStyles.itemName.mobile.width) -
            10,
          y: 285,
        };
      case 1:
        return {
          x: calculateLeftCenteredXPosition() + 10,
          y: 285,
        };
      case 2:
        return {
          x:
            calculateRightCenteredXPosition(preGameScreenStyles.itemName.mobile.width) -
            10,
          y: 530,
        };
      case 3:
        return {
          x: calculateLeftCenteredXPosition() + 10,
          y: 530,
        };
    }
  },
};
