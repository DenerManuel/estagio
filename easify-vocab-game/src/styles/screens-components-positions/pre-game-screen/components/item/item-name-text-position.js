import { preGameScreenStyles } from '../../../../screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export const itemNameTextPosition = {
  desktop: {
    getPositionX: () => {
      return preGameScreenStyles.itemName.desktop.width / 2;
    },
    getPositionY: () => {
      return preGameScreenStyles.itemName.desktop.height / 2;
    },
  },
  mobile: {
    getPositionX: () => {
      return preGameScreenStyles.itemName.mobile.width / 2;
    },
    getPositionY: () => {
      return preGameScreenStyles.itemName.mobile.height / 2;
    },
  },
};
