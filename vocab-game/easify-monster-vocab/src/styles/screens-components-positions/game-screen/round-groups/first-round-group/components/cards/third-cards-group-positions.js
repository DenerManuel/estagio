import {
  calculateCenteredXPosition,
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
  calculateTopCenteredYPosition,
} from '../../../../../../../utils/position/calculateCenteredPosition.js';
import { firstRoundGroupStyles } from '../../../../../../screens-components-styles/game-screen/round-groups/first-round-group/first-round-components-styles.js';

const THIRD_GROUP_CARDS_GAP = 10;
const CARD_DESKTO_WIDTH = firstRoundGroupStyles.cards.desktop.thirdGroupCardsStyles.width;
const CARD_MOBILE_WIDTH = firstRoundGroupStyles.cards.mobile.thirdGroupCardsStyles.width;

export const thirdCardsGroupPositions = {
  desktop: {
    card1: {
      getPositionX: () =>
        calculateRightCenteredXPosition(CARD_DESKTO_WIDTH * 2) -
        THIRD_GROUP_CARDS_GAP / 2 -
        THIRD_GROUP_CARDS_GAP,
      getPositionY: () => 35,
    },
    card2: {
      getPositionX: () =>
        calculateCenteredXPosition(CARD_DESKTO_WIDTH) - (CARD_DESKTO_WIDTH + THIRD_GROUP_CARDS_GAP),
      getPositionY: () => 210,
    },
    card3: {
      getPositionX: () =>
        calculateRightCenteredXPosition(CARD_DESKTO_WIDTH) - THIRD_GROUP_CARDS_GAP / 2,
      getPositionY: () => 20,
    },
    card4: {
      getPositionX: () => calculateCenteredXPosition(CARD_DESKTO_WIDTH),
      getPositionY: () => 200,
    },
    card5: {
      getPositionX: () => calculateLeftCenteredXPosition() + THIRD_GROUP_CARDS_GAP / 2,
      getPositionY: () => 20,
    },
    card6: {
      getPositionX: () =>
        calculateCenteredXPosition(CARD_DESKTO_WIDTH) + (CARD_DESKTO_WIDTH + THIRD_GROUP_CARDS_GAP),
      getPositionY: () => 210,
    },
    card7: {
      getPositionX: () =>
        calculateLeftCenteredXPosition() +
        THIRD_GROUP_CARDS_GAP / 2 +
        CARD_DESKTO_WIDTH +
        THIRD_GROUP_CARDS_GAP,
      getPositionY: () => 35,
    },
  },
  mobile: {
    card1: {
      getPositionX: () => calculateRightCenteredXPosition(CARD_MOBILE_WIDTH) - 5,
      getPositionY: () =>
        calculateTopCenteredYPosition(CARD_MOBILE_WIDTH) - 25 - CARD_MOBILE_WIDTH - 12,
    },
    card2: {
      getPositionX: () => calculateLeftCenteredXPosition() + 5,
      getPositionY: () =>
        calculateTopCenteredYPosition(CARD_MOBILE_WIDTH) - 25 - CARD_MOBILE_WIDTH - 12,
    },
    card3: {
      getPositionX: () => calculateCenteredXPosition(CARD_MOBILE_WIDTH) - CARD_MOBILE_WIDTH - 12,
      getPositionY: () => calculateTopCenteredYPosition(CARD_MOBILE_WIDTH) - 25,
    },
    card4: {
      getPositionX: () => calculateCenteredXPosition(CARD_MOBILE_WIDTH),
      getPositionY: () => calculateTopCenteredYPosition(CARD_MOBILE_WIDTH) - 25,
    },
    card5: {
      getPositionX: () => calculateCenteredXPosition(CARD_MOBILE_WIDTH) + CARD_MOBILE_WIDTH + 12,
      getPositionY: () => calculateTopCenteredYPosition(CARD_MOBILE_WIDTH) - 25,
    },
    card6: {
      getPositionX: () => calculateRightCenteredXPosition(CARD_MOBILE_WIDTH) - 5,
      getPositionY: () =>
        calculateTopCenteredYPosition(CARD_MOBILE_WIDTH) - 25 + CARD_MOBILE_WIDTH + 12,
    },
    card7: {
      getPositionX: () => calculateLeftCenteredXPosition() + 5,
      getPositionY: () =>
        calculateTopCenteredYPosition(CARD_MOBILE_WIDTH) - 25 + CARD_MOBILE_WIDTH + 12,
    },
  },
};
