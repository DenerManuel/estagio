import { App } from "../../../../../app/App.js"
import { calculateRightCenteredXPosition } from "../../../../../utils/position/calculateCenteredPosition.js"
import { categoriesScreenStyles } from "../../../../screens-components-styles/categories-screen/categories-screen-components-styles.js"

export const previousButtonPosition = {
  desktop: {
    getPositionX: () => {
      return 20
    },
    getPositionY: () => {
      return 270
    }
  },
  mobile: {
    getPositionX: () => {
      return calculateRightCenteredXPosition(categoriesScreenStyles.navigationButtons.mobile.width) - 15
    },
    getPositionY: () => {
      return App.getInstance().renderer.height - categoriesScreenStyles.navigationButtons.mobile.width - 25
    }
  }
}
