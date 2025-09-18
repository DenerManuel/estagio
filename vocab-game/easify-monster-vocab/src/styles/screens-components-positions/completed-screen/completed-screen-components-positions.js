import { createPositionProxy } from '../../../utils/position/create-position-proxy.js';
import * as positions from './components/completed-screen-components.js';

export const completedScreenPositions = {
  title: createPositionProxy(positions.titlePosition),
  scoreText: createPositionProxy(positions.scoreTextPosition),
  buttonNew: createPositionProxy(positions.buttonNewPosition),
  star: {
    desktop: (index) => {
      return positions.starPosition.desktop(index);
    },
    mobile: (index) => {
      return positions.starPosition.mobile(index);
    },
  },
};
