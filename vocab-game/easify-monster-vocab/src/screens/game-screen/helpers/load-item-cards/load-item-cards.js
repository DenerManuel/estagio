import { ItemCard } from '../../components/item-card/ItemCard.js';

/**
 * Cria uma lista de instâncias de `ItemCard` a partir dos itens de uma categoria de jogo.
 * @param {object} gameCategory - O objeto da categoria do jogo, contendo uma propriedade `items`.
 * @param {Array<object>} gameCategory.items - A lista de itens para transformar em cartões.
 * @returns {Promise<ItemCard[]>} Uma promessa que resolve para um array de instâncias de `ItemCard`.
 */
export async function loadItemCards(gameCategory) {
  const itemCards = gameCategory.items.map((item) => new ItemCard(gameCategory, item));
  return Promise.resolve(itemCards); // Mantém o retorno como Promise para consistência, caso futuras operações assíncronas sejam adicionadas.
}
