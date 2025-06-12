import { CustomContainer } from "../../../../components/container/CustomContainer.js";

export function createRoundCounter(appContainer) {
  const ROUND_COUNTER_CONTAINER_OPTIONS = _getRoundCounterContainerOptions(appContainer);
  return new CustomContainer(appContainer, ROUND_COUNTER_CONTAINER_OPTIONS);
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