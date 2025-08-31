import { createPositionProxy } from '../../utils/position/create-position-proxy.js';
import * as positions from './components/components.js';

export const componentsPositions = {
  backButton: createPositionProxy(positions.backButtonPosition),
};
