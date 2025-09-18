import { createPositionProxy } from '../../../utils/position/create-position-proxy.js';
import * as positions from './components/game-screen-components.js';

export const gameScreenPositions = {
  roundCounterContainer: createPositionProxy(positions.roundCounterContainerPosition),
  roundCounterText: createPositionProxy(positions.roundCounterTextPosition),
  timer: createPositionProxy(positions.timerPosition),
  score: createPositionProxy(positions.scorePosition),
  wellDoneText: createPositionProxy(positions.wellDoneTextPosition),
  heart: {
    desktop: (index) => {
      return positions.heartPosition.desktop(index);
    },
    mobile: (index) => {
      return positions.heartPosition.mobile(index);
    },
  },
};
