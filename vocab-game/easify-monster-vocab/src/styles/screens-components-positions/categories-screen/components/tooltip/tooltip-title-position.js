import { categoriesScreenStyles } from "../../../../screens-components-styles/categories-screen/categories-screen-components-styles.js";

export const tooltipTitlePosition = {
  desktop: {
    getPositionX: () => {
      return categoriesScreenStyles.tooltipContainer.desktop.width / 2
    },
    getPositionY: () => {
      return categoriesScreenStyles.tooltipContainer.desktop.height / 2 - 25
    }
  },
  mobile: {
    getPositionX: () => {
      return categoriesScreenStyles.tooltipContainer.mobile.width / 2
    },
    getPositionY: () => {
      return categoriesScreenStyles.tooltipContainer.mobile.height / 2 - 25
    }
  }
}