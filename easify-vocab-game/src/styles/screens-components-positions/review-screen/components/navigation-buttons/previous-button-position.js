import { calculateRightCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { reviewScreenStyles } from '../../../../screens-components-styles/reviewScreen/review-screen-components-styles.js';
import { reviewScreenPositions } from '../../review-screen-components-positions.js';
import { NAV_BUTTON_SPACING } from './nav-button-spacing.js';

export const previousButtonPosition = {
  desktop: {
    getPositionX: () => {
      return (
        calculateRightCenteredXPosition(reviewScreenStyles.navigationButtons.desktop.width) -
        reviewScreenStyles.imageContainer.desktop.width / 2 -
        NAV_BUTTON_SPACING.desktop
      );
    },
    getPositionY: () => {
      return 140;
    },
  },
  mobile: {
    getPositionX: () => {
      return reviewScreenPositions.toggleButton.mobile.x - reviewScreenStyles.toggleButton.mobile.width - 16
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
