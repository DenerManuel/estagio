import { removeTooltipItems } from "./tooltipContent.js";

export function addDefaultTooltipContent(tooltipContainer) {
  removeTooltipItems(tooltipContainer);

  const defaultTooltipContent = _createDefaultTooltipContent();
  defaultTooltipContent.name = 'defaultTooltipContent';
  tooltipContainer.addChild(defaultTooltipContent);
}
const _createDefaultTooltipContent = () => {
  const defaultContent = new PIXI.Text('Select Content', {
    fontFamily: 'Lato',
    fontSize: 26,
    fill: 0xFFFFFF,
    align: 'center'
  });
  _positionDefaultTooltipContent(defaultContent);

  return defaultContent
}
const _positionDefaultTooltipContent = (defaultContent) => {
  const TOOLTIP_CONTAINER_WIDTH = 352
  const TOOLTIP_CONTAINER_HEIGHT = 112

  defaultContent.anchor.set(0.5)
  defaultContent.x = TOOLTIP_CONTAINER_WIDTH / 2
  defaultContent.y = TOOLTIP_CONTAINER_HEIGHT / 2;
}

