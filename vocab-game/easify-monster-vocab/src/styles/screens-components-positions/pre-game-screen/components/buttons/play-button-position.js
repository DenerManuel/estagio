import { App } from '../../../../../app/App.js';
import { calculateCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { preGameScreenStyles } from '../../../../screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';
import { preGameScreenPositions } from '../../pre-game-screen-components-positions.js';

export const playButtonPosition = {
  desktop: {
    getPositionX: () => {
      return calculateCenteredXPosition(preGameScreenStyles.playButton.desktop.width);
    },
    getPositionY: () => {
      return App.getInstance().renderer.height / 2 + 55;
    },
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(preGameScreenStyles.playButton.mobile.width);
    },
    getPositionY: () => {
      return preGameScreenPositions.chooseButton.mobile.y - preGameScreenStyles.playButton.mobile.height - 15;
    },
  },
};
