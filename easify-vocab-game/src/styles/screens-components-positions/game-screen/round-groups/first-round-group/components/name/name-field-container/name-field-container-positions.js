import { calculateCenteredXPosition } from '../../../../../../../../utils/position/calculateCenteredPosition.js';
import { firstRoundGroupStyles } from '../../../../../../../screens-components-styles/game-screen/round-groups/first-round-group/first-round-components-styles.js';

export const nameFieldContainerPosition = {
  desktop: {
    firstPosition: () => {
      const POSITION_X = calculateCenteredXPosition(
        firstRoundGroupStyles.nameFieldContainer.desktop.width
      );
      const POSITION_Y = 360;

      return [POSITION_X, POSITION_Y];
    },
    secondPosition: () => {
      const POSITION_X = calculateCenteredXPosition(
        firstRoundGroupStyles.nameFieldContainer.desktop.width
      );
      const POSITION_Y = 400;

      return [POSITION_X, POSITION_Y];
    },
  },
  mobile: {
    firstPosition: () => {
      const POSITION_X = calculateCenteredXPosition(
        firstRoundGroupStyles.nameFieldContainer.desktop.width
      );
      const POSITION_Y = 360;

      return [POSITION_X, POSITION_Y];
    },
    secondPosition: () => {
      const POSITION_X = calculateCenteredXPosition(
        firstRoundGroupStyles.nameFieldContainer.desktop.width
      );
      const POSITION_Y = 400;

      return [POSITION_X, POSITION_Y];
    },
  },
};
