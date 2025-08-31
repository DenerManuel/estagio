import { calculateCenteredXPosition, calculateCenteredYPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { reviewScreenStyles } from '../../../../screens-components-styles/reviewScreen/review-screen-components-styles.js';

export const wordContainerPosition = {
  desktop: {
    getPositionX: () => {
      return calculateCenteredXPosition(reviewScreenStyles.wordContainer.desktop.width);
    },
    getPositionY: () => {
      return 350;
    },
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(reviewScreenStyles.wordContainer.mobile.width);
    },
    getPositionY: () => {
      return calculateCenteredYPosition(reviewScreenStyles.wordContainer.mobile.height) + 50;
    },
  },
};
