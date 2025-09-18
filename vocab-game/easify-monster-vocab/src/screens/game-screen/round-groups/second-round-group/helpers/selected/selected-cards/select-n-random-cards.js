import { pickRandomItemsExcluding } from '../../../../../../../utils/random/pick-random-from-array.js';

/**
 * Seleciona um número `n` de cartas aleatórias de um array, excluindo as que já foram usadas.
 *
 * Esta função utiliza `pickRandomItemsExcluding` para garantir que as cartas selecionadas
 * sejam únicas e não façam parte do conjunto de `usedCards`.
 *
 * @export
 * @param {import('../../../../../../../components/item-card/ItemCard.js').default[]} cards - O array de todas as cartas disponíveis para seleção.
 * @param {number} n - O número de cartas a serem selecionadas aleatoriamente.
 * @param {import('../../../../../../../components/item-card/ItemCard.js').default[]} [usedCards=[]] - Um array opcional de cartas que já foram usadas e devem ser excluídas da seleção.
 * @returns {import('../../../../../../../components/item-card/ItemCard.js').default[]} Um novo array contendo `n` cartas aleatórias.
 */
export function selectNRandomCards(cards, n, usedCards = []) {
  const selectedCards = pickRandomItemsExcluding(cards, n, usedCards);
  return selectedCards;
}
