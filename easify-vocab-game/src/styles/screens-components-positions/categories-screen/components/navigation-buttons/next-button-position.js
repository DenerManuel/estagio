import { App } from '../../../../../app/App.js';
import { calculateLeftCenteredXPosition } from '../../../../../utils/position/calculateCenteredPosition.js';
import { categoriesScreenStyles } from '../../../../screens-components-styles/categories-screen/categories-screen-components-styles.js';

export const nextButtonPosition = {
  desktop: {
    getPositionX: () => {
      return (
        App.getInstance().renderer.width -
        (categoriesScreenStyles.navigationButtons.desktop.width + 20)
      );
    },
    getPositionY: () => {
      return 270;
    },
  },
  mobile: {
    getPositionX: () => {
      return calculateLeftCenteredXPosition() + 15;
      // App.getInstance().renderer.width - (
      //   categoriesScreenStyles.navigationButtons.desktop.width + 20
      // );
    },
    getPositionY: () => {
      return (
        App.getInstance().renderer.height -
        categoriesScreenStyles.navigationButtons.mobile.width -
        25
      );
    },
  },
};
