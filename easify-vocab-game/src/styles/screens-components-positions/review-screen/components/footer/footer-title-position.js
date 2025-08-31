import { reviewScreenStyles } from '../../../../screens-components-styles/reviewScreen/review-screen-components-styles.js';

export const footerTitlePosition = {
  desktop: {
    getPositionX: () => {
      return reviewScreenStyles.footerContainer.desktop.width / 2;
    },
    getPositionY: () => {
      return reviewScreenStyles.footerContainer.desktop.height / 2 - 15;
    },
  },
  mobile: {
    getPositionX: () => {
      return reviewScreenStyles.footerContainer.mobile.width / 2;
    },
    getPositionY: () => {
      return reviewScreenStyles.footerContainer.mobile.height / 2 - 15;
    },
  },
};
