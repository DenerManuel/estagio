import { CustomContainer } from "../../../../components/Container/CustomContainer.js";

export function createTooltipContainer(appContainer) {
  const TOOLTIP_CONTAINER_SETTINGS = _getTooltipContainerSettings(appContainer);
  const tooltipContainer = new CustomContainer(appContainer, TOOLTIP_CONTAINER_SETTINGS);

  return tooltipContainer;
}
const _getTooltipContainerSettings = (appContainer) => {
  return {
    width: appContainer.clientWidth,
    height: appContainer.clientHeight - 390,
    backgroundColor: 0x241D7A,
    borderColor: 0xFB7302,
    borderWidth: 4,
    borderRadius: 50,
    horizontalAlign: 'center',
    verticalAlign: 'top',
    padding: {
      top: 70,
      left: 240,
      bottom: 0,
      right: 240
    }
  };
}

