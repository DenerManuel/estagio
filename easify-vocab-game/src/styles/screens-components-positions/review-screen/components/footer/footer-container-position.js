import { App } from '../../../../../app/App.js';
import { calculateCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { reviewScreenStyles } from '../../../../screens-components-styles/reviewScreen/review-screen-components-styles.js';

export const footerContainerPosition = {
  desktop: {
    getPositionX: () => {
      return calculateCenteredXPosition(reviewScreenStyles.footerContainer.desktop.width);
    },
    getPositionY: () => {
      return 460;
    },
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(reviewScreenStyles.footerContainer.mobile.width);
    },
    getPositionY: () => {
      return App.getInstance().renderer.height - reviewScreenStyles.footerContainer.mobile.height - 35;
    },
  },
};
