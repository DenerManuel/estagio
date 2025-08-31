import {
  calculateCenteredXPosition,
  calculateLeftCenteredXPosition,
  calculateRightCenteredXPosition,
} from '../../../../../../../utils/position/calculateCenteredPosition.js';
import { firstRoundGroupStyles } from '../../../../../../screens-components-styles/game-screen/round-groups/first-round-group/first-round-components-styles.js';
import { gameScreenPositions } from '../../../../game-screen-components-position.js';

const FIRST_GROUP_CARDS_GAP = 15;
const CARDS_STYLES_DESKTOP = firstRoundGroupStyles.cards.desktop;
const CARDS_STYLES_MOBILE = firstRoundGroupStyles.cards.mobile;

export const firstCardsGroupPositions = {
  desktop: {
    card1: {
      getPositionX: () =>
        calculateCenteredXPosition(
          firstRoundGroupStyles.cards.desktop.firstGroupCardsStyles.width
        ) -
        (firstRoundGroupStyles.cards.desktop.firstGroupCardsStyles.width + FIRST_GROUP_CARDS_GAP),
      getPositionY: () => 90,
    },
    card2: {
      getPositionX: () =>
        calculateCenteredXPosition(firstRoundGroupStyles.cards.desktop.firstGroupCardsStyles.width),
      getPositionY: () => 50,
    },
    card3: {
      getPositionX: () =>
        calculateCenteredXPosition(
          firstRoundGroupStyles.cards.desktop.firstGroupCardsStyles.width
        ) +
        (firstRoundGroupStyles.cards.desktop.firstGroupCardsStyles.width + FIRST_GROUP_CARDS_GAP),
      getPositionY: () => 90,
    },
  },
  mobile: {
    card1: {
      getPositionX: () =>
        calculateRightCenteredXPosition(CARDS_STYLES_MOBILE.firstGroupCardsStyles.width) - 8,
      getPositionY: () =>
        gameScreenPositions.roundCounterContainer.mobile.y -
        (CARDS_STYLES_MOBILE.firstGroupCardsStyles.width * 2 + 20) -
        15,
    },
    card2: {
      getPositionX: () =>
        calculateCenteredXPosition(CARDS_STYLES_MOBILE.firstGroupCardsStyles.width),
      getPositionY: () =>
        gameScreenPositions.roundCounterContainer.mobile.y -
        CARDS_STYLES_MOBILE.firstGroupCardsStyles.width -
        20,
    },
    card3: {
      getPositionX: () => calculateLeftCenteredXPosition() + 8,
      getPositionY: () =>
        gameScreenPositions.roundCounterContainer.mobile.y -
        (CARDS_STYLES_MOBILE.firstGroupCardsStyles.width * 2 + 20) -
        15,
    },
  },
};
