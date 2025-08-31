import {
  calculateCenteredXPosition,
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
} from '../../../../../../../utils/position/calculateCenteredPosition.js';
import { firstRoundGroupStyles } from '../../../../../../screens-components-styles/game-screen/round-groups/first-round-group/first-round-components-styles.js';

const THIRD_GROUP_CARDS_GAP = 10;

export const thirdCardsGroupPositions = {
  desktop: {
    card1: {
      getPositionX: () =>
        calculateRightCenteredXPosition(
          firstRoundGroupStyles.cards.desktop.thirdGroupCardsStyles.width * 2
        ) -
        THIRD_GROUP_CARDS_GAP / 2 -
        THIRD_GROUP_CARDS_GAP,
      getPositionY: () => 35,
    },
    card2: {
      getPositionX: () =>
        calculateCenteredXPosition(
          firstRoundGroupStyles.cards.desktop.thirdGroupCardsStyles.width
        ) -
        (firstRoundGroupStyles.cards.desktop.thirdGroupCardsStyles.width + THIRD_GROUP_CARDS_GAP),
      getPositionY: () => 210,
    },
    card3: {
      getPositionX: () =>
        calculateRightCenteredXPosition(
          firstRoundGroupStyles.cards.desktop.thirdGroupCardsStyles.width
        ) -
        THIRD_GROUP_CARDS_GAP / 2,
      getPositionY: () => 20,
    },
    card4: {
      getPositionX: () =>
        calculateCenteredXPosition(firstRoundGroupStyles.cards.desktop.thirdGroupCardsStyles.width),
      getPositionY: () => 200,
    },
    card5: {
      getPositionX: () => calculateLeftCenteredXPosition() + THIRD_GROUP_CARDS_GAP / 2,
      getPositionY: () => 20,
    },
    card6: {
      getPositionX: () =>
        calculateCenteredXPosition(
          firstRoundGroupStyles.cards.desktop.thirdGroupCardsStyles.width
        ) +
        (firstRoundGroupStyles.cards.desktop.thirdGroupCardsStyles.width + THIRD_GROUP_CARDS_GAP),
      getPositionY: () => 210,
    },
    card7: {
      getPositionX: () =>
        calculateLeftCenteredXPosition() +
        THIRD_GROUP_CARDS_GAP / 2 +
        firstRoundGroupStyles.cards.desktop.thirdGroupCardsStyles.width +
        THIRD_GROUP_CARDS_GAP,
      getPositionY: () => 35,
    },
  },
  mobile: {
    card1: {
      getPositionX: () =>
        calculateRightCenteredXPosition(
          firstRoundGroupStyles.cards.mobile.thirdGroupCardsStyles.width * 2
        ) -
        THIRD_GROUP_CARDS_GAP / 2 -
        THIRD_GROUP_CARDS_GAP,
      getPositionY: () => 35,
    },
    card2: {
      getPositionX: () =>
        calculateCenteredXPosition(firstRoundGroupStyles.cards.mobile.thirdGroupCardsStyles.width) -
        (firstRoundGroupStyles.cards.mobile.thirdGroupCardsStyles.width + THIRD_GROUP_CARDS_GAP),
      getPositionY: () => 210,
    },
    card3: {
      getPositionX: () =>
        calculateRightCenteredXPosition(
          firstRoundGroupStyles.cards.mobile.thirdGroupCardsStyles.width
        ) -
        THIRD_GROUP_CARDS_GAP / 2,
      getPositionY: () => 20,
    },
    card4: {
      getPositionX: () =>
        calculateCenteredXPosition(firstRoundGroupStyles.cards.mobile.thirdGroupCardsStyles.width),
      getPositionY: () => 200,
    },
    card5: {
      getPositionX: () => calculateLeftCenteredXPosition() + THIRD_GROUP_CARDS_GAP / 2,
      getPositionY: () => 20,
    },
    card6: {
      getPositionX: () =>
        calculateCenteredXPosition(firstRoundGroupStyles.cards.mobile.thirdGroupCardsStyles.width) +
        (firstRoundGroupStyles.cards.mobile.thirdGroupCardsStyles.width + THIRD_GROUP_CARDS_GAP),
      getPositionY: () => 210,
    },
    card7: {
      getPositionX: () =>
        calculateLeftCenteredXPosition() +
        THIRD_GROUP_CARDS_GAP / 2 +
        firstRoundGroupStyles.cards.mobile.thirdGroupCardsStyles.width +
        THIRD_GROUP_CARDS_GAP,
      getPositionY: () => 35,
    },
  },
};
