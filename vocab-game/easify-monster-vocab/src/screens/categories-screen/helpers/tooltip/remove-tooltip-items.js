/**
 * Remove os elementos de texto (título e lista de itens) de um contêiner de tooltip.
 *
 * Esta função é útil para limpar o conteúdo dinâmico do tooltip antes de
 * exibir novas informações, preservando elementos estáticos como a borda ou o fundo.
 * Ela procura por filhos com os nomes 'tooltipTitle' e 'tooltipItemTexts' e os remove.
 *
 * @param {PIXI.Container} tooltipContainer - O contêiner do tooltip do qual os itens serão removidos.
 */
export function removeTooltipItems(tooltipContainer) {
  // Remove apenas o título e o texto dos itens, mantendo a borda
  const childrenToRemove = tooltipContainer.children.filter(
    (child) => child.name === 'tooltipTitle' || child.name === 'tooltipItemTexts'
  );
  childrenToRemove.forEach((child) => tooltipContainer.removeChild(child));
}
