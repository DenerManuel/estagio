import { createTooltipItemTexts } from "./TooltipItemTexts.js";
import { createTooltipTitle } from "./TooltipTitle.js";

export function createTooltipContent(category) {
  const tooltipTitle = createTooltipTitle(category.title)

  const tooltipItemTexts = createTooltipItemTexts(category.items)
  tooltipItemTexts.name = 'tooltipItemTexts';

  return [tooltipTitle, tooltipItemTexts]
}

export function removeTooltipItems(tooltipContainer) {
  // Remove apenas o título e o texto dos itens, mantendo a borda
  const childrenToRemove = tooltipContainer.children.filter(child =>
    child.name === 'tooltipTitle' || child.name === 'tooltipItemTexts'
  );
  childrenToRemove.forEach(child => tooltipContainer.removeChild(child));
}