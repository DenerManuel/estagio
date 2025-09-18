import { preGameScreenStyles } from '../../../../../screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export const closeButtonPosition = {
  desktop: {
    getPositionX: () => {
      return preGameScreenStyles.modal.desktop.width / 2;
    },
    getPositionY: () => {
      return preGameScreenStyles.modal.desktop.height - 40;
    },
  },
  mobile: {
    getPositionX: () => {
      return preGameScreenStyles.modal.mobile.width / 2;
    },
    getPositionY: () => {
      return preGameScreenStyles.modal.mobile.height - 40;
    },
  },
};
