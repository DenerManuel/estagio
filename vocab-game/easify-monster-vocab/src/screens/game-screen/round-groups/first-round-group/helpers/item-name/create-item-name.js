import { ItemName } from '../../components/first-round-group-components.js';
import { getRandomItemCard } from '../first-round-helpers.js';

/**
 * Cria e retorna uma instância de ItemName com base em um itemCard aleatório.
 * A função seleciona um itemCard que ainda não foi escolhido, atualiza o estado do grupo
 * e cria o componente de nome do item.
 *
 * @param {object} firstRoundGroupInstance - A instância do grupo do primeiro round.
 * @param {Array<import('../../../../../../components/item-card/ItemCard.js').default>} firstRoundGroupInstance.itemCards - Lista de todos os cartões de itens disponíveis.
 * @param {Array<string>} firstRoundGroupInstance.selectedNames - Nomes dos itens já selecionados.
 * @returns {ItemName} Uma nova instância de ItemName com o nome do item selecionado.
 */
export function createItemName(firstRoundGroupInstance) {
  const itemCard = getItemCard(firstRoundGroupInstance);

  return new ItemName(itemCard.item.name);
}

/**
 * @private
 * Seleciona um itemCard aleatório que ainda não foi escolhido e atualiza o estado do grupo.
 * Esta função modifica `firstRoundGroupInstance` adicionando o card selecionado à lista
 * de `selectedCards` e definindo-o como `itemCardSelected`.
 *
 * @param {object} firstRoundGroupInstance - A instância do grupo do primeiro round, que será modificada.
 * @returns {import('../../../../../../components/item-card/ItemCard.js').default} O itemCard selecionado aleatoriamente.
 */
function getItemCard(firstRoundGroupInstance) {
  const itemCard = getRandomItemCard(
    firstRoundGroupInstance.itemCards,
    firstRoundGroupInstance.selectedNames
  );

  firstRoundGroupInstance.itemCardSelected = itemCard;
  firstRoundGroupInstance.selectedCards.push(itemCard);
  return itemCard;
}
