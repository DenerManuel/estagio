import { preGameScreenStyles } from '../../../../../screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export const heartModeButtonPosition = {
  desktop: {
    getPositionX: () => {
      return 290;
    },
    getPositionY: () => {
      return preGameScreenStyles.modal.desktop.height / 2 - 25;
    },
  },
  mobile: {
    getPositionX: () => {
      return 290;
    },
    getPositionY: () => {
      return preGameScreenStyles.modal.mobile.height / 2 - 25;
    },
  },
};
