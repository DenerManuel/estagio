import { TooltipItemTexts } from "./tooltip-item-texts.js";
import { TooltipTitle } from "./tooltip-title.js";

export class TooltipContent {
  tooltipTitle = null
  tooltipItemTexts = null

  constructor(category) {
    this.tooltipTitle = new TooltipTitle(category.title)
    this.tooltipItemTexts = new TooltipItemTexts(category.items)
  }
}