/**
 * Configura o evento do botão de alternância de visibilidade do texto da palavra.
 * Ao clicar, alterna entre mostrar e ocultar o texto da palavra na tela de revisão.
 * @param {ReviewScreen} reviewScreen - Instância da tela de revisão.
 */
export function configureToogleButtonEvents(reviewScreen) {
  reviewScreen.toggleButton.on('pointertap', () => toggleWordVisibility(reviewScreen));
}

/**
 * Alterna a visibilidade do texto da palavra.
 * Atualiza o texto do botão e o texto exibido conforme o estado.
 * @param {ReviewScreen} reviewScreen - Instância da tela de revisão.
 * @private
 */
function toggleWordVisibility(reviewScreen) {
  const TOGGLE_HIDDEN_TEXT = 'Ⱦ';
  const TOGGLE_VISIBLE_TEXT = 'T';

  reviewScreen.visibleText = !reviewScreen.visibleText;
  if (!reviewScreen.visibleText) {
    reviewScreen.toggleButton.editText(TOGGLE_HIDDEN_TEXT)
    reviewScreen.currentName = reviewScreen.wordText.text
    reviewScreen.wordText.text = '?'
  } else {
    reviewScreen.toggleButton.editText(TOGGLE_VISIBLE_TEXT)
    reviewScreen.wordText.text = reviewScreen.currentName
  }
}