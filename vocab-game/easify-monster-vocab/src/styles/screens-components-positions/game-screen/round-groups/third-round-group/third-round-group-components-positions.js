import { createPositionProxy } from '../../../../../utils/position/create-position-proxy.js';
import * as positions from './components/third-round-group-components.js';

export const thirdRoundGroupPositions = {
  card: createPositionProxy(positions.cardPosition),
  nameContainer: {
    desktop: {
      firstPosition: (index) => {
        return positions.nameContainerPositions.desktop.firstPosition(index);
      },
      secondPosition: (index) => {
        return positions.nameContainerPositions.desktop.secondPosition(index);
      },
      thirdPosition: (index) => {
        return positions.nameContainerPositions.desktop.thirdPosition(index);
      },
      fourthPosition: (index) => {
        return positions.nameContainerPositions.desktop.fourthPosition(index);
      },
      fifthPosition: (index) => {
        return positions.nameContainerPositions.desktop.fifthPosition(index);
      },
    },
    mobile: {
      firstPosition: (index) => {
        return positions.nameContainerPositions.mobile.firstPosition(index);
      },
      secondPosition: (index) => {
        return positions.nameContainerPositions.mobile.secondPosition(index);
      },
      thirdPosition: (index) => {
        return positions.nameContainerPositions.mobile.thirdPosition(index);
      },
      fourthPosition: (index) => {
        return positions.nameContainerPositions.mobile.fourthPosition(index);
      },
    },
  },
};
