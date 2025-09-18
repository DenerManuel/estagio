import { App } from '../../../../../app/App.js';
import { calculateCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { preGameScreenStyles } from '../../../../screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export const chooseButtonPosition = {
  desktop: {
    getPositionX: () => {
      return calculateCenteredXPosition(preGameScreenStyles.chooseButton.desktop.width);
    },
    getPositionY: () => {
      return (
        App.getInstance().renderer.height / 2 +
        (preGameScreenStyles.playButton.desktop.height + 55) +
        15
      );
    },
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(preGameScreenStyles.chooseButton.mobile.width);
    },
    getPositionY: () => {
      return (
        App.getInstance().renderer.height - preGameScreenStyles.chooseButton.mobile.height - 25
      );
    },
  },
};
