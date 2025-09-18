import { firstRoundGroupStyles } from '../../../../../../../screens-components-styles/game-screen/round-groups/first-round-group/first-round-components-styles.js';

export const nameTextPosition = {
  desktop: {
    getPositionX: () => {
      return firstRoundGroupStyles.nameFieldContainer.desktop.width / 2;
    },
    getPositionY: () => {
      return firstRoundGroupStyles.nameFieldContainer.desktop.height / 2 - 3;
    },
  },
  mobile: {
    getPositionX: () => {
      return firstRoundGroupStyles.nameFieldContainer.mobile.width / 2;
    },
    getPositionY: () => {
      return firstRoundGroupStyles.nameFieldContainer.mobile.height / 2 - 3;
    },
  },
};
