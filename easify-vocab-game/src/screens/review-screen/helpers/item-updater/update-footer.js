/**
 * Atualiza o rodapé da tela de revisão com o título da categoria e a quantidade de itens.
 * @param {PIXI.Text} footerTitle - Instância do título do rodapé.
 * @param {PIXI.Text} footerQuantity - Instância da quantidade exibida no rodapé.
 * @param {Object} category - Categoria atual.
 * @param {number} currentIndex - Índice do item atual.
 */
export function updateFooter(footerTitle, footerQuantity, category, currentIndex) {
  const ITEM_NUMBER = currentIndex + 1;
  const TOTAL_ITEMS = category.items.length;

  footerTitle.text = `${category.title}`;
  footerQuantity.text = `${ITEM_NUMBER} / ${TOTAL_ITEMS}`
}