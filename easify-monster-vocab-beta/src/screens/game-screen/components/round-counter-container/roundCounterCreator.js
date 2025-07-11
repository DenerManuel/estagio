import { CustomContainer } from "../../../../components/container/CustomContainer.js";
import { RoundCounterContainerConfig } from "../../../../styles/screens/game-screen/round-counter/roundConterContainerConfig.js";

export function createRoundCounter(appContainer) {
  // const ROUND_COUNTER_CONTAINER_OPTIONS = _getRoundCounterContainerOptions(appContainer);
  // console.log(ROUND_COUNTER_CONTAINER_OPTIONS.height)
  const roundCounterContainer = new CustomContainer(appContainer, RoundCounterContainerConfig.styles)
  _positionRoundCounterContainer(roundCounterContainer)
  return roundCounterContainer;
}
const _getRoundCounterContainerOptions = (appContainer) => {
  return {
    width: appContainer.clientWidth,
    height: appContainer.clientHeight,
    backgroundColor: 0x241D7A,
    borderColor: 0xFB7302,
    borderWidth: 4,
    borderRadius: 30,
    horizontalAlign: 'center',
    verticalAlign: 'bottom',
    padding: {
      top: 480,
      left: 330,
      bottom: 20,
      right: 330
    }
  }
}
const _positionRoundCounterContainer = (roundCounterContainer) => {
  const positionX = RoundCounterContainerConfig.position.x;
  const positionY = RoundCounterContainerConfig.position.y;

  roundCounterContainer.position.set(positionX, positionY);
}