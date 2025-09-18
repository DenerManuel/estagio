import { reviewScreenStyles } from '../../../../screens-components-styles/reviewScreen/review-screen-components-styles.js';

export const wordTextPosition = {
  desktop: {
    getPositionX: () => {
      return reviewScreenStyles.wordContainer.desktop.width / 2;
    },
    getPositionY: () => {
      return reviewScreenStyles.wordContainer.desktop.height / 2;
    },
  },
  mobile: {
    getPositionX: () => {
      return reviewScreenStyles.wordContainer.desktop.width / 2;
    },
    getPositionY: () => {
      return reviewScreenStyles.wordContainer.desktop.height / 2;
    },
  },
};
