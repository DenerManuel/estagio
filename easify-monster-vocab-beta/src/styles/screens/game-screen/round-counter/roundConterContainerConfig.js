import { Colors } from "../colors.js";
import { calculateCenteredXPosition } from "../../../../utils/position/calculateCenteredPosition.js";
import { appSize } from "../../../appSize.js";

const RoundCounterContainerStyle = {
  width: 175,
  height: 75,
  backgroundColor: Colors.RoundCounterContainer.background,
  borderColor: Colors.RoundCounterContainer.border,
  backgroundColor: 0x241D7A,
  borderWidth: 4,
  borderRadius: 30,
}

const RoundCounterContainerPosition = {
  x: calculateCenteredXPosition(RoundCounterContainerStyle.width),
  y: appSize.height - (RoundCounterContainerStyle.height + 15)
}

export const RoundCounterContainerConfig = {
  styles: RoundCounterContainerStyle,
  position: RoundCounterContainerPosition
}
