import { formatTooltipText } from "./FormatTooltipText.js";

export function createTooltipContent(category) {
  const tooltipTitle = _createTooltipTitle(category.title)
  tooltipTitle.name = 'tooltipTitle'
  
  const tooltipItemTexts = _createTooltipItemTexts(category.items)
  tooltipItemTexts.name = 'tooltipItemTexts';

  return [tooltipTitle, tooltipItemTexts]
}
const _createTooltipTitle = (categoryTitle) => {
  const tooltipTitle = new PIXI.Text(categoryTitle, {
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: '700',
    fill: 0xFFFFFF,
    align: 'center'
  });
  _positionTooltipTitle(tooltipTitle);

  return tooltipTitle;
}
const _createTooltipItemTexts = (categoryItems) => {
  let itemTexts = _createItemsText(categoryItems)

  const tooltipItemText = new PIXI.Text(itemTexts, {
    fontFamily: 'Arial',
    fontSize: 16,
    fill: 0xD3D3D3,
    align: 'center'
  });
  _positionTooltipText(tooltipItemText);

  return tooltipItemText;
}

const _positionTooltipTitle = (tooltipTitle) => {
  const TOOLTIP_CONTAINER_WIDTH = 352
  const TOOLTIP_CONTAINER_HEIGHT = 112

  tooltipTitle.anchor.set(0.5)
  tooltipTitle.x = TOOLTIP_CONTAINER_WIDTH / 2
  tooltipTitle.y = TOOLTIP_CONTAINER_HEIGHT / 2 - 25;
}
const _positionTooltipText = (tooltipItemText) => {
  const TOOLTIP_CONTAINER_WIDTH = 352
  const TOOLTIP_CONTAINER_HEIGHT = 112

  tooltipItemText.anchor.set(0.5)
  tooltipItemText.x = TOOLTIP_CONTAINER_WIDTH / 2
  tooltipItemText.y = TOOLTIP_CONTAINER_HEIGHT / 2 + 15;
}

const _createItemsText = (categoryItems) => {
  return formatTooltipText(categoryItems);
}
