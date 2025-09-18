import { calculateCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { homeScreenStyles } from '../../../../screens-components-styles/home-screen/home-screen-components-styles.js';
import { BUTTONS_MARGIN } from './buttons-margin.js';
import { chooseButtonPosition } from './choose-button-position.js';

export const reviewButtonPosition = {
  desktop: {
    getPositionX: () => {
      return calculateCenteredXPosition(homeScreenStyles.reviewButton.desktop.width);
    },
    getPositionY: () => {
      return (
        chooseButtonPosition.desktop.getPositionY() +
        homeScreenStyles.chooseButton.desktop.height +
        BUTTONS_MARGIN.desktop
      );
    },
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(homeScreenStyles.reviewButton.mobile.width);
    },
    getPositionY: () => {
      return (
        chooseButtonPosition.mobile.getPositionY() +
        homeScreenStyles.chooseButton.mobile.height +
        BUTTONS_MARGIN.mobile
      );
    },
  },
};
