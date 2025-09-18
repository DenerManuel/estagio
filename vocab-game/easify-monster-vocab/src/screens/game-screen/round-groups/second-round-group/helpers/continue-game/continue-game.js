/**
 * Prepara e avança o jogo para a próxima fase dentro do segundo round.
 *
 * Esta função é chamada após o jogador completar um conjunto de acertos. Ela:
 * 1. Reseta o estado da rodada atual (nomes selecionados e contagem de acertos).
 * 2. Adiciona um novo conjunto de cards à tela, aumentando a dificuldade
 *    em rodadas específicas (12 e 14).
 * 3. Recria os containers (espaços para soltar os cards e nomes) para a nova configuração.
 *
 * @param {import('../../SecondRoundGroup.js').SecondRoundGroup} secondRoundGroupInstance - A instância da classe do segundo round, que contém o estado e os métodos do jogo.
 */
export function continueGame(secondRoundGroupInstance) {
  secondRoundGroupInstance.selectedNames = [];
  secondRoundGroupInstance.cardsCorrects = 0;

  switch (secondRoundGroupInstance.currentRound) {
    case 12:
      secondRoundGroupInstance._addCards(3);
      break;
    case 14:
      secondRoundGroupInstance._addCards(4);
      break;
    case 17:
      secondRoundGroupInstance._addCards(3);
      break;
    case 18:
      secondRoundGroupInstance._addCards(2);
      break;
    case 19:
      secondRoundGroupInstance._addCards(1);
      break;
  }
  secondRoundGroupInstance._addCardsContainers();
}
