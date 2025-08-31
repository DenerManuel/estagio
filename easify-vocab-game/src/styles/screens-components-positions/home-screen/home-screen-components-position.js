import { createPositionProxy } from '../../../utils/position/create-position-proxy.js';
import * as positions from './components/home-screen-components.js';

export const homeScreenPositions = {
  title: createPositionProxy(positions.titlePosition),
  startButton: createPositionProxy(positions.startButtonPosition),
  chooseButton: createPositionProxy(positions.chooseButtonPosition),
  reviewButton: createPositionProxy(positions.reviewButtonPosition),
};
