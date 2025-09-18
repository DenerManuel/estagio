import { gameScreenStyles } from '../../../../screens-components-styles/game-screen/game-screen-components-styles.js';

export const roundCounterTextPosition = {
  desktop: {
    getPositionX: () => {
      return gameScreenStyles.roundCounterContainer.desktop.width / 2;
    },
    getPositionY: () => {
      return gameScreenStyles.roundCounterContainer.desktop.height / 2;
    },
  },
  mobile: {
    getPositionX: () => {
      return gameScreenStyles.roundCounterContainer.mobile.width / 2;
    },
    getPositionY: () => {
      return gameScreenStyles.roundCounterContainer.mobile.height / 2;
    },
  },
};
