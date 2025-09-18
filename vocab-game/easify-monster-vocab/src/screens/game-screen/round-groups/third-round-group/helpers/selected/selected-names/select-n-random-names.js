import { pickRandomExcluding } from '../../../../../../../utils/random/pick-random-from-array.js';

/**
 * Seleciona um número `n` de nomes aleatórias de um array, excluindo os que já foram usadas.
 *
 * Esta função utiliza `pickRandomItemsExcluding` para garantir que os nomes selecionadas
 * sejam únicos e não façam parte do conjunto de `usedNames`.
 *
 * @export
 * @param {import('../../../components/name-container/NameContainer.js').default[]} allNames - O array de todas as cartas disponíveis para seleção.
 * @param {number} n - O número de cartas a serem selecionadas aleatoriamente.
 * @param {import('../../../components/name-container/NameContainer.js').default[]} [usedNames=[]] - Um array opcional de cartas que já foram usadas e devem ser excluídas da seleção.
 * @returns {import('../../../components/name-container/NameContainer.js').default[]} Um novo array contendo `n` cartas aleatórias.
 */
export function selectNRandomNames(allNames, n, usedNames = []) {
  const selectedNames = pickRandomExcluding(allNames, n, usedNames);
  return selectedNames;
}
