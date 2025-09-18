import {
  calculateCenteredXPosition,
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
} from '../../../../../../../utils/position/calculateCenteredPosition.js';
import { firstRoundGroupStyles } from '../../../../../../screens-components-styles/game-screen/round-groups/first-round-group/first-round-components-styles.js';
import { gameScreenPositions } from '../../../../game-screen-components-position.js';

const FIRST_GROUP_CARDS_GAP = 15;
const CARD_DESKTOP_WIDTH = firstRoundGroupStyles.cards.desktop.firstGroupCardsStyles.width;
const CARD_MOBILE_WIDTH = firstRoundGroupStyles.cards.mobile.firstGroupCardsStyles.width;

export const firstCardsGroupPositions = {
  desktop: {
    card1: {
      getPositionX: () =>
        calculateCenteredXPosition(CARD_DESKTOP_WIDTH) -
        (CARD_DESKTOP_WIDTH + FIRST_GROUP_CARDS_GAP),
      getPositionY: () => 90,
    },
    card2: {
      getPositionX: () => calculateCenteredXPosition(CARD_DESKTOP_WIDTH),
      getPositionY: () => 50,
    },
    card3: {
      getPositionX: () =>
        calculateCenteredXPosition(CARD_DESKTOP_WIDTH) +
        (CARD_DESKTOP_WIDTH + FIRST_GROUP_CARDS_GAP),
      getPositionY: () => 90,
    },
  },
  mobile: {
    card1: {
      getPositionX: () => calculateRightCenteredXPosition(CARD_MOBILE_WIDTH) - 8,
      getPositionY: () =>
        gameScreenPositions.roundCounterContainer.mobile.y - (CARD_MOBILE_WIDTH * 2 + 20) - 10,
    },
    card2: {
      getPositionX: () => calculateCenteredXPosition(CARD_MOBILE_WIDTH),
      getPositionY: () =>
        gameScreenPositions.roundCounterContainer.mobile.y - CARD_MOBILE_WIDTH - 15,
    },
    card3: {
      getPositionX: () => calculateLeftCenteredXPosition() + 8,
      getPositionY: () =>
        gameScreenPositions.roundCounterContainer.mobile.y - (CARD_MOBILE_WIDTH * 2 + 20) - 10,
    },
  },
};
