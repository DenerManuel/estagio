import { calculateCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { completedScreenStyles } from '../../../../screens-components-styles/completed-screen/completed-screen-components-styles.js';

export const buttonNewPosition = {
  desktop: {
    getPositionX: () => {
      return calculateCenteredXPosition(completedScreenStyles.buttonNew.desktop.width);
    },
    getPositionY: () => {
      return 360;
    },
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(completedScreenStyles.buttonNew.mobile.width);
    },
    getPositionY: () => {
      return 360;
    },
  },
};
