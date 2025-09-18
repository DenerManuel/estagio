import {
  calculateBottomCenteredYPosition,
  calculateCenteredXPosition,
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
} from '../../../../../../../utils/position/calculateCenteredPosition.js';
import { firstRoundGroupStyles } from '../../../../../../screens-components-styles/game-screen/round-groups/first-round-group/first-round-components-styles.js';

const SECOND_GROUP_CARDS_GAP = 30;
const CARD_DESKTOP_WIDTH = firstRoundGroupStyles.cards.mobile.secondGroupCardsStyles.width;
const CARD_MOBILE_WIDTH = firstRoundGroupStyles.cards.mobile.secondGroupCardsStyles.width;

export const secondCardsGroupPositions = {
  desktop: {
    card1: {
      getPositionX: () =>
        calculateCenteredXPosition(CARD_DESKTOP_WIDTH) -
        (CARD_DESKTOP_WIDTH + SECOND_GROUP_CARDS_GAP),
      getPositionY: () => 200,
    },
    card2: {
      getPositionX: () =>
        calculateRightCenteredXPosition(CARD_DESKTOP_WIDTH) - SECOND_GROUP_CARDS_GAP / 2,
      getPositionY: () => 15,
    },
    card3: {
      getPositionX: () => calculateCenteredXPosition(CARD_DESKTOP_WIDTH),
      getPositionY: () => 210,
    },
    card4: {
      getPositionX: () => calculateLeftCenteredXPosition() + SECOND_GROUP_CARDS_GAP / 2,
      getPositionY: () => 15,
    },
    card5: {
      getPositionX: () =>
        calculateCenteredXPosition(CARD_DESKTOP_WIDTH) +
        (CARD_DESKTOP_WIDTH + SECOND_GROUP_CARDS_GAP),
      getPositionY: () => 200,
    },
  },
  mobile: {
    card1: {
      getPositionX: () =>
        calculateRightCenteredXPosition(CARD_MOBILE_WIDTH) - (CARD_MOBILE_WIDTH / 2 + 10),
      getPositionY: () =>
        calculateBottomCenteredYPosition(CARD_MOBILE_WIDTH) + CARD_MOBILE_WIDTH / 2 + 20,
    },
    card2: {
      getPositionX: () => calculateCenteredXPosition(CARD_MOBILE_WIDTH),
      getPositionY: () => calculateBottomCenteredYPosition(CARD_MOBILE_WIDTH) + 15,
    },
    card3: {
      getPositionX: () =>
        calculateLeftCenteredXPosition(CARD_MOBILE_WIDTH) + (CARD_MOBILE_WIDTH / 2 + 10),
      getPositionY: () =>
        calculateBottomCenteredYPosition(CARD_MOBILE_WIDTH) + CARD_MOBILE_WIDTH / 2 + 20,
    },
    card4: {
      getPositionX: () => calculateRightCenteredXPosition(CARD_MOBILE_WIDTH) - 5,
      getPositionY: () =>
        calculateBottomCenteredYPosition(CARD_MOBILE_WIDTH) +
        (CARD_MOBILE_WIDTH / 2 + 20) +
        CARD_MOBILE_WIDTH +
        10,
    },
    card5: {
      getPositionX: () => calculateLeftCenteredXPosition() + 5,
      getPositionY: () =>
        calculateBottomCenteredYPosition(CARD_MOBILE_WIDTH) +
        (CARD_MOBILE_WIDTH / 2 + 20) +
        CARD_MOBILE_WIDTH +
        10,
    },
  },
};
