import { getNCardsExcludingOne, shuffleArray } from '../first-round-helpers.js';

/**
 * Completa a lista de cartas selecionadas para a rodada atual.
 *
 * Esta função pega a carta já selecionada pelo jogador, adiciona um número
 * específico de outras cartas aleatórias (excluindo a já selecionada) e,
 * em seguida, embaralha a lista final de cartas que serão exibidas na tela.
 *
 * @param {object} firstRoundGroupInstance - A instância do primeiro grupo de rodadas, contendo o estado do jogo.
 * @param {Array<import('../../../../components/item-card/ItemCard.js').default>} firstRoundGroupInstance.itemCards - O conjunto total de cartas de itens disponíveis na rodada.
 * @param {import('../../../../components/item-card/ItemCard.js').default} firstRoundGroupInstance.itemCardSelected - A carta de item que foi corretamente selecionada pelo jogador.
 * @param {Array<import('../../../../components/item-card/ItemCard.js').default>} firstRoundGroupInstance.selectedCards - A lista de cartas selecionadas que será preenchida e embaralhada.
 * @param {number} numberOfCardsToBeCompleted - O número de cartas adicionais a serem selecionadas aleatoriamente.
 */
export function completeSelectedCards(firstRoundGroupInstance, numberOfCardsToBeCompleted) {
  const itemCards = firstRoundGroupInstance.itemCards;
  const itemCardSelected = firstRoundGroupInstance.itemCardSelected;

  const remainingCards = getNCardsExcludingOne(itemCards, numberOfCardsToBeCompleted, [
    itemCardSelected,
  ]);
  firstRoundGroupInstance.selectedCards.push(...remainingCards);
  firstRoundGroupInstance.selectedCards = shuffleArray(firstRoundGroupInstance.selectedCards);
}
