import {
  calculateCenteredXPosition,
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
} from '../../../../../utils/position/calculateCenteredPosition.js';
import { categoriesScreenStyles } from '../../../../screens-components-styles/categories-screen/categories-screen-components-styles.js';

const CARD_DESKTOP_WIDTH = categoriesScreenStyles.card.desktop.width;
const CARD_DESKTOP_HEIGHT = categoriesScreenStyles.card.desktop.height;

export const cardsPosition = {
  desktop: (index) => {
    switch (index) {
      case 0:
        return {
          x: calculateRightCenteredXPosition(CARD_DESKTOP_WIDTH) - CARD_DESKTOP_WIDTH - 15,
          y: 200,
        };
      case 1:
        return {
          x: calculateRightCenteredXPosition(CARD_DESKTOP_WIDTH) - 5,
          y: 200,
        };
      case 2:
        return {
          x: calculateLeftCenteredXPosition() + 5,
          y: 200,
        };
      case 3:
        return {
          x: calculateLeftCenteredXPosition() + CARD_DESKTOP_WIDTH + 15,
          y: 200,
        };
      case 4:
        return {
          x: calculateCenteredXPosition(CARD_DESKTOP_WIDTH) - CARD_DESKTOP_WIDTH - 10,
          y: 200 + CARD_DESKTOP_HEIGHT + 14,
        };
      case 5:
        return {
          x: calculateCenteredXPosition(CARD_DESKTOP_WIDTH),
          y: 200 + CARD_DESKTOP_HEIGHT + 14,
        };
      case 6:
        return {
          x: calculateCenteredXPosition(CARD_DESKTOP_WIDTH) + CARD_DESKTOP_WIDTH + 10,
          y: 200 + CARD_DESKTOP_HEIGHT + 14,
        };
    }
  },
  mobile: (index) => {
    switch (index) {
      case 0:
        return {
          x: calculateRightCenteredXPosition(categoriesScreenStyles.card.mobile.width) - 6,
          y: 255,
        };
      case 1:
        return {
          x: calculateLeftCenteredXPosition() + 6,
          y: 255,
        };
      case 2:
        return {
          x:
            calculateCenteredXPosition(categoriesScreenStyles.card.mobile.width) -
            categoriesScreenStyles.card.mobile.width -
            12,
          y: 383,
        };
      case 3:
        return {
          x: calculateCenteredXPosition(categoriesScreenStyles.card.mobile.width),
          y: 383,
        };
      case 4:
        return {
          x:
            calculateCenteredXPosition(categoriesScreenStyles.card.mobile.width) +
            categoriesScreenStyles.card.mobile.width +
            12,
          y: 383,
        };
      case 5:
        return {
          x: calculateRightCenteredXPosition(categoriesScreenStyles.card.mobile.width) - 6,
          y: 510,
        };
      case 6:
        return {
          x: calculateLeftCenteredXPosition() + 6,
          y: 510,
        };
    }
  },
};
