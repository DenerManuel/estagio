import { preGameScreenStyles } from '../../../../../screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export const scoreModeButtonPosition = {
  desktop: {
    getPositionX: () => {
      return 60;
    },
    getPositionY: () => {
      return preGameScreenStyles.modal.desktop.height / 2 - 25;
    },
  },
  mobile: {
    getPositionX: () => {
      return 60;
    },
    getPositionY: () => {
      return preGameScreenStyles.modal.mobile.height / 2 - 25;
    },
  },
};
