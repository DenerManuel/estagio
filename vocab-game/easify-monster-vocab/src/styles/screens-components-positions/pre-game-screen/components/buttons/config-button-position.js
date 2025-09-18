import { App } from '../../../../../app/App.js';

export const configButtonPosition = {
  desktop: {
    getPositionX: () => {
      return 100;
    },
    getPositionY: () => {
      return App.getInstance().renderer.height - 70;
    },
  },
  mobile: {
    getPositionX: () => {
      return 100;
    },
    getPositionY: () => {
      return 20
    },
  },
};
