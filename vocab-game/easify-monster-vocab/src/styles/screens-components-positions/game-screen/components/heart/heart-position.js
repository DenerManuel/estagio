import { App } from "../../../../../app/App.js";

export const heartPosition = {
  desktop: (index) => {
    const POSITION_X = 100 + index * 35;
    const POSITION_Y = 515;

    return [POSITION_X, POSITION_Y];
  },
  mobile: (index) => {
    const POSITION_X = 390 + index * 35;
    const POSITION_Y = App.getInstance().renderer.height - 70;

    return { x: POSITION_X, y: POSITION_Y };
  },
};
