import { createPositionProxy } from '../../../utils/position/create-position-proxy.js';
import * as positions from './components/categories-screen-components.js';

export const categoriesScreenPositions = {
  cards: {
    desktop: (index) => {
      return positions.cardsPosition.desktop(index);
    },
    mobile: (index) => {
      return positions.cardsPosition.mobile(index);
    },
  },
  categoriesContainer: createPositionProxy(positions.categoriesContainerPosition),
  tooltipContainer: createPositionProxy(positions.tooltipContainerPosition),
  defaultTooltipContent: createPositionProxy(positions.defaultTooltipContentPosition),
  tooltipItemTexts: createPositionProxy(positions.tooltipItemTextsPosition),
  tooltipTitle: createPositionProxy(positions.tooltipTitlePosition),
  cardsContainer: createPositionProxy(positions.cardsContainerPosition),
  previousButton: createPositionProxy(positions.previousButtonPosition),
  nextButton: createPositionProxy(positions.nextButtonPosition),
};
