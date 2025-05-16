import { formatTooltipText } from "./FormatTooltipText.js";

export function createTooltipItemTexts(categoryItems) {
  let itemTexts = _createItemsText(categoryItems)
  const TOOLTIP_TITLE_OPTIONS = createTooltipItemTextsOptions();

  const tooltipItemTexts = new PIXI.Text(itemTexts, TOOLTIP_TITLE_OPTIONS);
  _positionTooltipTexts(tooltipItemTexts)
  tooltipItemTexts.name = 'tooltipTitle'

  return tooltipItemTexts;
}
const _createItemsText = (categoryItems) => {
  return formatTooltipText(categoryItems);
}
const createTooltipItemTextsOptions = () => {
  return {
    fontFamily: 'Arial',
    fontSize: 16,
    fill: 0xD3D3D3,
    align: 'center'
  }
}
const _positionTooltipTexts = (tooltipItemTexts) => {
  const TOOLTIP_CONTAINER_WIDTH = 352
  const TOOLTIP_CONTAINER_HEIGHT = 112

  tooltipItemTexts.anchor.set(0.5)
  tooltipItemTexts.x = TOOLTIP_CONTAINER_WIDTH / 2
  tooltipItemTexts.y = TOOLTIP_CONTAINER_HEIGHT / 2 + 15;
}