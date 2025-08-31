import {
  calculateCenteredXPosition,
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
} from '../../../../../../../utils/position/calculateCenteredPosition.js';
import { firstRoundGroupStyles } from '../../../../../../screens-components-styles/game-screen/round-groups/first-round-group/first-round-components-styles.js';

const SECOND_GROUP_CARDS_GAP = 30;

export const secondCardsGroupPositions = {
  desktop: {
    card1: {
      getPositionX: () =>
        calculateCenteredXPosition(
          firstRoundGroupStyles.cards.desktop.secondGroupCardsStyles.width
        ) -
        (firstRoundGroupStyles.cards.desktop.secondGroupCardsStyles.width + SECOND_GROUP_CARDS_GAP),
      getPositionY: () => 200,
    },
    card2: {
      getPositionX: () =>
        calculateRightCenteredXPosition(
          firstRoundGroupStyles.cards.desktop.secondGroupCardsStyles.width
        ) -
        SECOND_GROUP_CARDS_GAP / 2,
      getPositionY: () => 15,
    },
    card3: {
      getPositionX: () =>
        calculateCenteredXPosition(
          firstRoundGroupStyles.cards.desktop.secondGroupCardsStyles.width
        ),
      getPositionY: () => 210,
    },
    card4: {
      getPositionX: () => calculateLeftCenteredXPosition() + SECOND_GROUP_CARDS_GAP / 2,
      getPositionY: () => 15,
    },
    card5: {
      getPositionX: () =>
        calculateCenteredXPosition(
          firstRoundGroupStyles.cards.desktop.secondGroupCardsStyles.width
        ) +
        (firstRoundGroupStyles.cards.desktop.secondGroupCardsStyles.width + SECOND_GROUP_CARDS_GAP),
      getPositionY: () => 200,
    },
  },
  mobile: {
    card1: {
      getPositionX: () =>
        calculateCenteredXPosition(
          firstRoundGroupStyles.cards.mobile.secondGroupCardsStyles.width
        ) -
        (firstRoundGroupStyles.cards.mobile.secondGroupCardsStyles.width + SECOND_GROUP_CARDS_GAP),
      getPositionY: () => 200,
    },
    card2: {
      getPositionX: () =>
        calculateRightCenteredXPosition(
          firstRoundGroupStyles.cards.mobile.secondGroupCardsStyles.width
        ) -
        SECOND_GROUP_CARDS_GAP / 2,
      getPositionY: () => 15,
    },
    card3: {
      getPositionX: () =>
        calculateCenteredXPosition(firstRoundGroupStyles.cards.mobile.secondGroupCardsStyles.width),
      getPositionY: () => 210,
    },
    card4: {
      getPositionX: () => calculateLeftCenteredXPosition() + SECOND_GROUP_CARDS_GAP / 2,
      getPositionY: () => 15,
    },
    card5: {
      getPositionX: () =>
        calculateCenteredXPosition(
          firstRoundGroupStyles.cards.mobile.secondGroupCardsStyles.width
        ) +
        (firstRoundGroupStyles.cards.mobile.secondGroupCardsStyles.width + SECOND_GROUP_CARDS_GAP),
      getPositionY: () => 200,
    },
  },
};
