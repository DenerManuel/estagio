import { App } from '../../../../../app/App.js';

export const titlePosition = {
  desktop: {
    getPositionX: () => {
      return App.getInstance().renderer.width / 2;
    },
    getPositionY: () => {
      return App.getInstance().renderer.height / 2 - 160;
    },
  },
  mobile: {
    getPositionX: () => {
      return App.getInstance().renderer.width / 2;
    },
    getPositionY: () => {
      return App.getInstance().renderer.width / 2 - 130;
    },
  },
};
