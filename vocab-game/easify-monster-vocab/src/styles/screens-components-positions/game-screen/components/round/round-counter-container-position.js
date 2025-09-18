import { App } from '../../../../../app/App.js';
import { calculateCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { gameScreenStyles } from '../../../../screens-components-styles/game-screen/game-screen-components-styles.js';

export const roundCounterContainerPosition = {
  desktop: {
    getPositionX: () => {
      return calculateCenteredXPosition(gameScreenStyles.roundCounterContainer.desktop.width);
    },
    getPositionY: () => {
      return (
        App.getInstance().renderer.height -
        (gameScreenStyles.roundCounterContainer.desktop.height + 15)
      );
    },
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(gameScreenStyles.roundCounterContainer.mobile.width);
    },
    getPositionY: () => {
      return (
        App.getInstance().renderer.height -
        (gameScreenStyles.roundCounterContainer.mobile.height + 15)
      );
    },
  },
};
