import { App } from '../../../../../app/App.js';
import { gameScreenStyles } from '../../../../screens-components-styles/game-screen/game-screen-components-styles.js';

export const timerPosition = {
  desktop: {
    getPositionX: () => {
      return App.getInstance().renderer.width - 120;
    },
    getPositionY: () => {
      return App.getInstance().renderer.height - (gameScreenStyles.score.desktop.height + 70);;
    },
  },
  mobile: {
    getPositionX: () => {
      return App.getInstance().renderer.width - 175;
    },
    getPositionY: () => {
      return 45
    },
  },
};
