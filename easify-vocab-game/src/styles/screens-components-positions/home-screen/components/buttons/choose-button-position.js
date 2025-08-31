import { calculateCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { homeScreenStyles } from '../../../../screens-components-styles/home-screen/home-screen-components-styles.js';
import { homeScreenPositions } from '../../home-screen-components-position.js';
import { BUTTONS_MARGIN } from './buttons-margin.js';
import { startButtonPosition } from './start-button-position.js';

export const chooseButtonPosition = {
  desktop: {
    getPositionX: () => {
      return calculateCenteredXPosition(homeScreenStyles.chooseButton.desktop.width);
    },
    getPositionY: () => {
      return (
        startButtonPosition.desktop.getPositionY() +
        homeScreenStyles.startButton.desktop.height +
        BUTTONS_MARGIN.desktop
      );
    },
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(homeScreenStyles.chooseButton.mobile.width);
    },
    getPositionY: () => {
      return (
        homeScreenPositions.startButton.mobile.y +
        homeScreenStyles.startButton.mobile.height +
        BUTTONS_MARGIN.mobile
      );
    },
  },
};
