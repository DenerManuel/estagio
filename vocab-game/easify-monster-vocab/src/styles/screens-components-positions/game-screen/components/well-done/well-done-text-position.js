import { App } from '../../../../../app/App.js';

export const wellDoneTextPosition = {
  desktop: {
    getPositionX: () => {
      return App.getInstance().renderer.width / 2;
    },
    getPositionY: () => {
      return App.getInstance().renderer.height / 2;
    },
  },
  mobile: {
    getPositionX: () => {
      return App.getInstance().renderer.width / 2;
    },
    getPositionY: () => {
      return App.getInstance().renderer.height / 2;
    },
  },
};
