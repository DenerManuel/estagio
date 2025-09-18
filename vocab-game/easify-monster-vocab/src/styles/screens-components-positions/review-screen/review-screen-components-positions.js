import { createPositionProxy } from '../../../utils/position/create-position-proxy.js';
import * as positions from './components/review-screen-components.js';

export const reviewScreenPositions = {
  imageContainer: createPositionProxy(positions.imageContainerPosition),
  previousButton: createPositionProxy(positions.previousButtonPosition),
  nextButton: createPositionProxy(positions.nextButtonPosition),
  wordContainer: createPositionProxy(positions.wordContainerPosition),
  wordText: createPositionProxy(positions.wordTextPosition),
  toggleButton: createPositionProxy(positions.toogleButtonPosition),
  soundButton: createPositionProxy(positions.soundButtonPosition),
  footerContainer: createPositionProxy(positions.footerContainerPosition),
  footerTitle: createPositionProxy(positions.footerTitlePosition),
  footerQuantity: createPositionProxy(positions.footerQuantityPosition),
};
