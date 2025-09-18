import { categoriesScreenStyles } from "../../../../screens-components-styles/categories-screen/categories-screen-components-styles.js";

export const defaultTooltipContentPosition = {
  desktop: {
    getPositionX: () => {
      return categoriesScreenStyles.tooltipContainer.desktop.width / 2
    },
    getPositionY: () => {
      return categoriesScreenStyles.tooltipContainer.desktop.height / 2
    }
  },
  mobile: {
    getPositionX: () => {
      return categoriesScreenStyles.tooltipContainer.mobile.width / 2
    },
    getPositionY: () => {
      return categoriesScreenStyles.tooltipContainer.mobile.height / 2
    }
  }
}