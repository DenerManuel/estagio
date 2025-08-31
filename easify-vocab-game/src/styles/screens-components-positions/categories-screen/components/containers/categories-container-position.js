import { calculateCenteredXPosition, calculateCenteredYPosition } from "../../../../../utils/position/calculateCenteredPosition.js";
import { categoriesScreenStyles } from "../../../../screens-components-styles/categories-screen/categories-screen-components-styles.js";

export const categoriesContainerPosition = {
  desktop: {
    getPositionX: () => {
      return calculateCenteredXPosition(categoriesScreenStyles.categoriesContainer.desktop.width);
    },
    getPositionY: () => {
      return calculateCenteredYPosition(categoriesScreenStyles.categoriesContainer.desktop.height) + 15
    }
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(categoriesScreenStyles.categoriesContainer.mobile.width);
    },
    getPositionY: () => {
      return calculateCenteredYPosition(categoriesScreenStyles.categoriesContainer.mobile.height);
    }
  }
}