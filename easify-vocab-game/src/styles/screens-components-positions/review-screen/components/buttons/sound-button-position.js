import { calculateLeftCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { reviewScreenStyles } from '../../../../screens-components-styles/reviewScreen/review-screen-components-styles.js';
import { reviewScreenPositions } from '../../review-screen-components-positions.js';
import { TOGGLE_SOUND_BUTTONS_POSITION_Y_OFFSET } from './toogle-sound-buttons-position-y-offset.js';
import { TOOGLE_SOUND_BUTTONS_SPACING } from './toogle-sound-buttons-spacing.js';

export const soundButtonPosition = {
  desktop: {
    getPositionX: () => {
      return (
        calculateLeftCenteredXPosition() +
        reviewScreenStyles.wordContainer.desktop.width / 2 +
        TOOGLE_SOUND_BUTTONS_SPACING.desktop
      );
    },
    getPositionY: () => {
      return TOGGLE_SOUND_BUTTONS_POSITION_Y_OFFSET.desktop;
    },
  },
  mobile: {
    getPositionX: () => {
      return (
        calculateLeftCenteredXPosition() + 8
      );
    },
    getPositionY: () => {
      return (
        reviewScreenPositions.wordContainer.mobile.y +
        reviewScreenStyles.wordContainer.mobile.height +
        35
      );
    },
  },
};
