import { calculateCenteredXPosition, calculateCenteredYPosition } from "../../../../../utils/position/calculateCenteredPosition.js";
import { homeScreenStyles } from "../../../../screens-components-styles/home-screen/home-screen-components-styles.js";


export const startButtonPosition = {
  desktop: {
    getPositionX: () => {
      return calculateCenteredXPosition(
        homeScreenStyles.startButton.desktop.width
      );
    },
    getPositionY: () => {
      return calculateCenteredYPosition(
        homeScreenStyles.startButton.desktop.height - 40
      )
    }
  },
  mobile: {
    getPositionX: () => {
      return calculateCenteredXPosition(
        homeScreenStyles.startButton.mobile.width
      );
    },
    getPositionY: () => {
      return calculateCenteredYPosition(
        homeScreenStyles.startButton.mobile.height + 15
      )
    }
  }
}