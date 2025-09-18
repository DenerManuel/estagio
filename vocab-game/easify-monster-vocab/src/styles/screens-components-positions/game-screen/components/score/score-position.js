import { App } from '../../../../../app/App.js';
import { calculateCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { gameScreenStyles } from '../../../../screens-components-styles/game-screen/game-screen-components-styles.js';

export const scorePosition = {
  desktop: {
    getPositionX: () => {
      return App.getInstance().renderer.width - gameScreenStyles.score.desktop.width - 20;
    },
    getPositionY: () => {
      return App.getInstance().renderer.height - gameScreenStyles.score.desktop.height - 20;
    },
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(gameScreenStyles.score.mobile.width);
    },
    getPositionY: () => {
      return 30
    },
  },
};
