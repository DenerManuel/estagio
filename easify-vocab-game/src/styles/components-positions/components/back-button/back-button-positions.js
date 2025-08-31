import { App } from '../../../../app/App.js';

export const backButtonPosition = {
  desktop: {
    getPositionX: () => {
      return 20;
    },
    getPositionY: () => {
      return App.getInstance().renderer.height - 70;
    },
  },
  mobile: {
    getPositionX: () => {
      return 20;
    },
    getPositionY: () => {
      return App.getInstance().renderer.height - 70;
    },
  },
};
