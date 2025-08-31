import { createPositionProxy } from '../../../../../utils/position/create-position-proxy.js';
import * as positions from './components/first-round-group-components.js';

export const firstRoundGroupPositions = {
  nameFieldContainer: {
    desktop: {
      firstPosition: () => {
        return positions.nameFieldContainerPosition.desktop.firstPosition();
      },
      secondPosition: () => {
        return positions.nameFieldContainerPosition.desktop.secondPosition();
      },
    },
    mobile: {
      firstPosition: () => {
        return positions.nameFieldContainerPosition.mobile.firstPosition();
      },
      secondPosition: () => {
        return positions.nameFieldContainerPosition.mobile.secondPosition();
      },
    },
  },
  nameText: createPositionProxy(positions.nameTextPosition),
  cards: {
    desktop: {
      firstGroupCardsPositions: {
        card1: positions.firstCardsGroupPositions.desktop.card1,
        card2: positions.firstCardsGroupPositions.desktop.card2,
        card3: positions.firstCardsGroupPositions.desktop.card3,
      },
      secondGroupCardsPositions: {
        card1: positions.secondCardsGroupPositions.desktop.card1,
        card2: positions.secondCardsGroupPositions.desktop.card2,
        card3: positions.secondCardsGroupPositions.desktop.card3,
        card4: positions.secondCardsGroupPositions.desktop.card4,
        card5: positions.secondCardsGroupPositions.desktop.card5,
      },
      thirdGroupCardsPositions: {
        card1: positions.thirdCardsGroupPositions.desktop.card1,
        card2: positions.thirdCardsGroupPositions.desktop.card2,
        card3: positions.thirdCardsGroupPositions.desktop.card3,
        card4: positions.thirdCardsGroupPositions.desktop.card4,
        card5: positions.thirdCardsGroupPositions.desktop.card5,
        card6: positions.thirdCardsGroupPositions.desktop.card6,
        card7: positions.thirdCardsGroupPositions.desktop.card7,
      },
    },
    mobile: {
      firstGroupCardsPositions: {
        card1: positions.firstCardsGroupPositions.mobile.card1,
        card2: positions.firstCardsGroupPositions.mobile.card2,
        card3: positions.firstCardsGroupPositions.mobile.card3,
      },
      secondGroupCardsPositions: {
        card1: positions.secondCardsGroupPositions.mobile.card1,
        card2: positions.secondCardsGroupPositions.mobile.card2,
        card3: positions.secondCardsGroupPositions.mobile.card3,
        card4: positions.secondCardsGroupPositions.mobile.card4,
        card5: positions.secondCardsGroupPositions.mobile.card5,
      },
      thirdGroupCardsPositions: {
        card1: positions.thirdCardsGroupPositions.mobile.card1,
        card2: positions.thirdCardsGroupPositions.mobile.card2,
        card3: positions.thirdCardsGroupPositions.mobile.card3,
        card4: positions.thirdCardsGroupPositions.mobile.card4,
        card5: positions.thirdCardsGroupPositions.mobile.card5,
        card6: positions.thirdCardsGroupPositions.mobile.card6,
        card7: positions.thirdCardsGroupPositions.mobile.card7,
      },
    },
  },
};
