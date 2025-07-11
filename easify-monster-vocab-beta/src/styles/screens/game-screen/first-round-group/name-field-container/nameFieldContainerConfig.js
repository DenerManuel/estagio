import { Colors } from "../colors.js"
import { calculateCenteredXPosition } from "../../../../../utils/position/calculateCenteredPosition.js"

export const NameFieldContainerStyles = {
  width: 421,
  height: 80,
  backgroundColor: Colors.NameFieldContainer.backgroundColor,
  borderColor: Colors.NameFieldContainer.borderColor,
  borderWidth: 4,
  borderRadius: 35,
}
export const NameFieldContainerPosition = {
  firstPosition: {
    x: calculateCenteredXPosition(NameFieldContainerStyles.width),
    y: 360,
  },
  secondPosition: {
    x: calculateCenteredXPosition(NameFieldContainerStyles.width),
    y: 400,
  }
}