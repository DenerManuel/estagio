export function removeTooltipItems(tooltipContainer) {
  // Remove apenas o título e o texto dos itens, mantendo a borda
  const childrenToRemove = tooltipContainer.children.filter(child =>
    child.name === 'tooltipTitle' || child.name === 'tooltipItemTexts'
  );
  childrenToRemove.forEach(child => tooltipContainer.removeChild(child));
}