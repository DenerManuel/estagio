import { calculateCenteredXPosition } from "../../../../../utils/position/calculateCenteredPosition.js";
import { categoriesScreenStyles } from "../../../../screens-components-styles/categories-screen/categories-screen-components-styles.js";

export const tooltipContainerPosition = {
  desktop: {
    getPositionX: () => {
      return calculateCenteredXPosition(categoriesScreenStyles.tooltipContainer.desktop.width);
    },
    getPositionY: () => {
      return 70
    }
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(categoriesScreenStyles.tooltipContainer.mobile.width);
    },
    getPositionY: () => {
      return 70
    }
  }
}