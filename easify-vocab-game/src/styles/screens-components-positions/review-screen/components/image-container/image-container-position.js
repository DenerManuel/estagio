import { calculateCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { reviewScreenStyles } from '../../../../screens-components-styles/reviewScreen/review-screen-components-styles.js';
import { reviewScreenPositions } from '../../review-screen-components-positions.js';

export const imageContainerPosition = {
  desktop: {
    getPositionX: () => {
      return calculateCenteredXPosition(reviewScreenStyles.imageContainer.desktop.width);
    },
    getPositionY: () => {
      return 45;
    },
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(reviewScreenStyles.imageContainer.mobile.width);
    },
    getPositionY: () => {
      return (
        reviewScreenPositions.wordContainer.mobile.y -
        reviewScreenStyles.imageContainer.mobile.height -
        40
      );
    },
  },
};
