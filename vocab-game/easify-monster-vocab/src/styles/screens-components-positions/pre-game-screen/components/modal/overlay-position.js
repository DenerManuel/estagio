import { App } from '../../../../../app/App.js';

export const overlayPosition = {
  desktop: {
    getPositionX: () => {
      return App.getInstance().renderer.width;
    },
    getPositionY: () => {
      return App.getInstance().renderer.height;
    },
  },
  mobile: {
    getPositionX: () => {
      return App.getInstance().renderer.width;
    },
    getPositionY: () => {
      return App.getInstance().renderer.height;
    },
  },
};
