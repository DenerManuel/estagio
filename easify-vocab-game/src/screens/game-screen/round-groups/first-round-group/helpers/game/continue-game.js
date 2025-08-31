import { addItemCards } from '../first-round-helpers.js';

/**
 * Avança para a próxima rodada do jogo dentro do primeiro grupo de rodadas.
 *
 * Esta função prepara o cenário para a rodada seguinte, limpando o estado anterior
 * e ajustando a dificuldade ao aumentar o número de cartas exibidas.
 *
 * @param {object} firstRoundGroupInstance - A instância do contêiner do primeiro grupo de rodadas.
 * @param {number} firstRoundGroupInstance.currentRound - O contador da rodada atual, que será incrementado.
 * @param {Array} firstRoundGroupInstance.selectedCards - A lista de cartas selecionadas, que será resetada.
 * @param {() => void} firstRoundGroupInstance.removeChildren - Método para limpar os elementos visuais da tela.
 * @param {() => void} firstRoundGroupInstance._createItemName - Método para criar o nome do novo item a ser encontrado.
 */
export function continueGame(firstRoundGroupInstance) {
  firstRoundGroupInstance.currentRound++;
  firstRoundGroupInstance.selectedCards = [];
  firstRoundGroupInstance.removeChildren();
  firstRoundGroupInstance._createItemName();

  if (firstRoundGroupInstance.currentRound >= 4 && firstRoundGroupInstance.currentRound < 7) {
    addItemCards(firstRoundGroupInstance, 5);
  } else if (firstRoundGroupInstance.currentRound >= 7) {
    addItemCards(firstRoundGroupInstance, 7);
  } else {
    addItemCards(firstRoundGroupInstance, 3);
  }
}
