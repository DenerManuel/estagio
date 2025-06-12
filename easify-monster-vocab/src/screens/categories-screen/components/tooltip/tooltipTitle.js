export function createTooltipTitle(title) {
  const TOOLTIP_TITLE_OPTIONS = _createTooltipTitleOptions();

  const tooltipTitle = new PIXI.Text(title, TOOLTIP_TITLE_OPTIONS);
  _positionTooltipTitle(tooltipTitle);
  tooltipTitle.name = 'tooltipTitle'
  
  return tooltipTitle;
}
const _createTooltipTitleOptions = () => {
  return {
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: '700',
    fill: 0xFFFFFF,
    align: 'center'
  }
}
const _positionTooltipTitle = (tooltipTitle) => {
  const TOOLTIP_CONTAINER_WIDTH = 352
  const TOOLTIP_CONTAINER_HEIGHT = 112

  tooltipTitle.anchor.set(0.5)
  tooltipTitle.x = TOOLTIP_CONTAINER_WIDTH / 2
  tooltipTitle.y = TOOLTIP_CONTAINER_HEIGHT / 2 - 25;
}