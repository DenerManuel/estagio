import { pickRandomFromArray } from '../../../../../../utils/random/pick-random-from-array.js';

/**
 * Filtra uma lista de cartões, retornando apenas aqueles cujo nome não foi selecionado.
 * @private
 * @param {Array<object>} itemCards - Lista com todos os cartões de itens.
 * @param {Array<string>} selectedNames - Lista com os nomes já selecionados.
 * @returns {Array<object>} Uma lista com os cartões de itens disponíveis.
 */
function getAvailableCards(itemCards, selectedNames) {
  return itemCards.filter(card => !selectedNames.includes(card.item.name));
}

/**
 * Escolhe um cartão aleatório de uma lista de cartões disponíveis.
 * Retorna `null` se a lista estiver vazia.
 * @private
 * @param {Array<object>} availableCards - Lista de cartões disponíveis.
 * @returns {object|null} Um itemCard aleatório ou `null`.
 */
function pickRandomAvailableCard(availableCards) {
  if (availableCards.length === 0) {
    console.warn(
      'Não foi possível obter um itemCard aleatório, pois todos os nomes já foram selecionados.'
    );
    return null;
  }
  return pickRandomFromArray(availableCards, 1)[0];
}

/**
 * Obtém um itemCard aleatório da lista de `itemCards` cujo nome ainda não foi selecionado.
 *
 * @param {Array<object>} itemCards - Uma lista de cartões de itens, onde cada cartão tem uma propriedade `item` com um `name`.
 * @param {Array<string>} selectedNames - Uma lista de nomes que já foram selecionados.
 * @returns {object|null} Um itemCard aleatório cujo nome não está em `selectedNames`, ou `null` se não houver mais opções.
 */
export function getRandomItemCard(itemCards, selectedNames) {
  const availableCards = getAvailableCards(itemCards, selectedNames);
  const randomCard = pickRandomAvailableCard(availableCards);
  selectedNames.push(randomCard.item.name);

  return randomCard;
}
