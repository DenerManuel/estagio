import { App } from '../../../../../app/App.js';

export const scoreTextPosition = {
  desktop: {
    getPositionX: () => {
      return App.getInstance().renderer.width / 2;
    },
    getPositionY: () => {
      return 300;
    },
  },
  mobile: {
    getPositionX: () => {
      return App.getInstance().renderer.width / 2;
    },
    getPositionY: () => {
      return 300;
    },
  },
};
