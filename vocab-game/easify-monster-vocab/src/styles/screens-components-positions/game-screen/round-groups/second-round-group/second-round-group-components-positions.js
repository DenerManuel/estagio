import * as positions from './components/second-round-group-components.js';

export const secondRoundGroupPositions = {
  cardContainer: {
    desktop: {
      firstPosition: (index) => {
        return positions.cardContainerPosition.desktop.firstPosition(index);
      },
      secondPosition: (index) => {
        return positions.cardContainerPosition.desktop.secondPosition(index);
      },
    },
    mobile: {
      firstPosition: (index) => {
        return positions.cardContainerPosition.mobile.firstPosition(index);
      },
      secondPosition: (index) => {
        return positions.cardContainerPosition.mobile.secondPosition(index);
      },
    },
  },
  nameContainer: {
    desktop: {
      firstPosition: (index) => {
        return positions.nameContainerPosition.desktop.firstPosition(index);
      },
      secondPosition: (index) => {
        return positions.nameContainerPosition.desktop.secondPosition(index);
      },
    },
    mobile: {
      firstPosition: (index) => {
        return positions.nameContainerPosition.mobile.firstPosition(index);
      },
      secondPosition: (index) => {
        return positions.nameContainerPosition.mobile.secondPosition(index);
      },
    },
  },
  card: {
    desktop: {
      firstPosition: (index) => {
        return positions.cardsPositions.desktop.firstPosition(index);
      },
      secondPosition: (index) => {
        return positions.cardsPositions.desktop.secondPosition(index);
      },
      thirdPosition: (index) => {
        return positions.cardsPositions.desktop.thirdPosition(index);
      },
      fourthPosition: (index) => {
        return positions.cardsPositions.desktop.fourthPosition(index);
      },
      fifthPosition: (index) => {
        return positions.cardsPositions.desktop.fifthPosition(index);
      },
      sixthPosition: (index) => {
        return positions.cardsPositions.desktop.sixthPosition(index);
      },
    },
    mobile: {
      firstPosition: (index) => {
        return positions.cardsPositions.mobile.firstPosition(index);
      },
      secondPosition: (index) => {
        return positions.cardsPositions.mobile.secondPosition(index);
      },
      thirdPosition: (index) => {
        return positions.cardsPositions.mobile.thirdPosition(index);
      },
      fourthPosition: (index) => {
        return positions.cardsPositions.mobile.fourthPosition(index);
      },
      fifthPosition: (index) => {
        return positions.cardsPositions.mobile.fifthPosition(index);
      },
      sixthPosition: (index) => {
        return positions.cardsPositions.mobile.sixthPosition(index);
      },
    },
  },
};
