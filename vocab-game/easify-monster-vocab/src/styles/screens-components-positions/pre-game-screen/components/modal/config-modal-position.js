import { App } from '../../../../../app/App.js';
import { preGameScreenStyles } from '../../../../screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export const configModalPosition = {
  desktop: {
    getPositionX: () => {
      return (App.getInstance().renderer.width - preGameScreenStyles.modal.desktop.width) / 2;
    },
    getPositionY: () => {
      return (App.getInstance().renderer.height - preGameScreenStyles.modal.desktop.height) / 2;
    },
  },
  mobile: {
    getPositionX: () => {
      return (App.getInstance().renderer.width - preGameScreenStyles.modal.mobile.width) / 2;
    },
    getPositionY: () => {
      return (App.getInstance().renderer.height - preGameScreenStyles.modal.mobile.height) / 2;
    },
  },
};
