import {
  calculateCenteredXPosition,
  calculateCenteredYPosition,
  calculateRightCenteredXPosition,
} from '../../../../../../../utils/position/calculateCenteredPosition.js';
import { thirdRoundGroupStyles } from '../../../../../../screens-components-styles/game-screen/round-groups/third-roun-group/third-round-components-styles.js';

export const cardPosition = {
  desktop: {
    getPositionX: () => {
      return calculateRightCenteredXPosition(thirdRoundGroupStyles.card.desktop.width) - 5;
    },
    getPositionY: () => {
      return calculateCenteredYPosition(thirdRoundGroupStyles.card.desktop.width) - 25;
    },
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(thirdRoundGroupStyles.card.mobile.width);
    },
    getPositionY: () => {
      return 115
    },
  },
};
