import { App } from '../../../../../app/App.js';

export const starPosition = {
  desktop: (index) => {
    const POSITION_X = App.getInstance().renderer.width / 2 - 200 + index * 100;
    const POSITION_Y = 200;

    return [POSITION_X, POSITION_Y];
  },
  mobile: (index) => {
    const POSITION_X = App.getInstance().renderer.width / 2 - 200 + index * 100;
    const POSITION_Y = 200;

    return [POSITION_X, POSITION_Y];
  },
};
