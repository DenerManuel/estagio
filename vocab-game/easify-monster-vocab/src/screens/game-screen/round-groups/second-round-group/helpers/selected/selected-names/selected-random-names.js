import { pickRandomExcluding } from '../../../../../../../utils/random/pick-random-from-array.js';

/**
 * Seleciona 2 nomes aleatórios de uma lista de cartas, excluindo nomes já utilizados.
 *
 * Esta função extrai os nomes das cartas fornecidas (`selectedCards`),
 * e então utiliza a função `pickRandomExcluding` para escolher 2 nomes aleatoriamente,
 * garantindo que nenhum dos nomes em `usedNames` seja selecionado.
 *
 * @export
 * @param {import('../../../../../../../components/item-card/ItemCard.js').default[]} selectedCards - O array de cartas das quais os nomes serão extraídos.
 * @param {string[]} usedNames - Um array de nomes que já foram usados e devem ser excluídos da seleção.
 * @returns {string[]} Um novo array contendo 2 nomes aleatórios.
 */
export function selectedRandomNames(selectedCards, usedNames) {
  const namesList = selectedCards.map((card) => card.item.name);
  const selectedNames = pickRandomExcluding(namesList, 2, usedNames);

  return selectedNames;
}
