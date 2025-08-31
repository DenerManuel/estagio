import {
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
} from '../../../../../../utils/position/calculateCenteredPosition.js';
import { preGameScreenStyles } from '../../../../../screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';
import { preGameScreenPositions } from '../../../pre-game-screen-components-positions.js';
import { NAVIGATION_BUTTONS_MARGIN } from './navigation-buttons-margin.js';
import { NAVIGATION_BUTTONS_POSITION_Y_OFFSET } from './navigation-buttons-position-y-offset.js';

export const nextButtonPosition = {
  desktop: {
    getPositionX: () => {
      return (
        calculateLeftCenteredXPosition() +
        preGameScreenStyles.playButton.desktop.width / 2 +
        NAVIGATION_BUTTONS_MARGIN.desktop
      );
    },
    getPositionY: () => {
      return NAVIGATION_BUTTONS_POSITION_Y_OFFSET.desktop;
    },
  },
  mobile: {
    getPositionX: () => {
      return (
        calculateLeftCenteredXPosition() +
        preGameScreenStyles.playButton.mobile.width / 2 +
        NAVIGATION_BUTTONS_MARGIN.desktop
      );
    },
    getPositionY: () => {
      return preGameScreenPositions.playButton.mobile.y + 10
    },
  },
};
