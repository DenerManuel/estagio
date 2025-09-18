import * as ReviewHelpers from "../../helpers/review-screen-helpers.js";

/**
 * Configura os eventos dos botões de navegação (anterior e próximo) na tela de revisão.
 * Permite alternar entre os itens exibidos.
 * @param {ReviewScreen} reviewScreen - Instância da tela de revisão.
 */
export function configureNavigationButtonEvents(reviewScreen) {
  reviewScreen.previousButton.on('pointertap', () => changeCurrentIndex(-1, reviewScreen));
  reviewScreen.nextButton.on('pointertap', () => changeCurrentIndex(1, reviewScreen));
}

/**
 * Altera o índice do item exibido, navegando para o próximo ou anterior.
 * Se chegar ao fim ou início, faz o loop para o outro extremo.
 * @param {number} step - Passo de navegação (-1 para anterior, 1 para próximo).
 * @param {ReviewScreen} reviewScreen - Instância da tela de revisão.
 * @private
 */
function changeCurrentIndex(step, reviewScreen) {
  reviewScreen.currentIndex += step;
  const REACH_END = reviewScreen.currentIndex >= reviewScreen.category.items.length;
  const REACH_START = reviewScreen.currentIndex < 0;

  if (REACH_END) reviewScreen.currentIndex = 0;
  if (REACH_START) reviewScreen.currentIndex = reviewScreen.category.items.length - 1;
  updateDisplayedContent(reviewScreen);
}

/**
 * Atualiza o conteúdo exibido na tela de revisão, incluindo imagem, texto e rodapé.
 * @param {ReviewScreen} reviewScreen - Instância da tela de revisão.
 */
export function updateDisplayedContent(reviewScreen) {
  const itemName = reviewScreen.category.items[reviewScreen.currentIndex].name;
  const currentItem = reviewScreen.category.items[reviewScreen.currentIndex];

  reviewScreen.imageContainer.updateImage(currentItem)
  reviewScreen.currentName = ReviewHelpers.updateWord(itemName, reviewScreen.visibleText, reviewScreen.wordText)
  ReviewHelpers.updateFooter(reviewScreen.footerTitle, reviewScreen.footerQuantity, reviewScreen.category, reviewScreen.currentIndex)
}
