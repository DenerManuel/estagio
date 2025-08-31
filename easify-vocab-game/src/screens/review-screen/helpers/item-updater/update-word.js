/**
 * Atualiza o texto exibido para a palavra na tela de revisão.
 * Exibe o nome do item se o texto estiver visível, ou retorna apenas o nome atual.
 * @param {string} itemName - Nome da palavra/item.
 * @param {boolean} visibleText - Indica se o texto deve ser exibido.
 * @param {PIXI.Text} wordText - Instância do texto da palavra.
 * @returns {string} Texto atualizado.
 */
export function updateWord(itemName, visibleText, wordText) {
  if (visibleText) {
    wordText.text = itemName;
    return wordText.text;
  } else {
    const currentName = itemName;
    return currentName;
  }
}