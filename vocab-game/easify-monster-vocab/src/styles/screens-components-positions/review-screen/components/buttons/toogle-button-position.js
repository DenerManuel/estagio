import { calculateRightCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { reviewScreenStyles } from '../../../../screens-components-styles/reviewScreen/review-screen-components-styles.js';
import { reviewScreenPositions } from '../../review-screen-components-positions.js';
import { TOOGLE_SOUND_BUTTONS_SPACING } from './toogle-sound-buttons-spacing.js';

export const toogleButtonPosition = {
  desktop: {
    getPositionX: () => {
      return (
        calculateRightCenteredXPosition(reviewScreenStyles.toggleButton.desktop.width) -
        reviewScreenStyles.wordContainer.desktop.width / 2 -
        TOOGLE_SOUND_BUTTONS_SPACING.desktop
      );
    },
    getPositionY: () => {
      return 360;
    },
  },
  mobile: {
    getPositionX: () => {
      return (
        calculateRightCenteredXPosition(reviewScreenStyles.toggleButton.mobile.width) - 8
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
