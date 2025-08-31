import { pickRandomFromArray } from './pick-random-from-array.js';

/**
 * Seleciona um número específico de itens aleatórios de uma categoria.
 *
 * A função cria uma cópia embaralhada da lista de itens da categoria
 * e retorna um novo objeto de categoria com um subconjunto desses itens.
 * Isso garante que a categoria original não seja modificada.
 *
 * @param {object} category - O objeto da categoria da qual os itens serão selecionados.
 * @param {Array<object>} category.items - A lista de itens a ser embaralhada.
 * @param {number} numberOfItems - O número de itens a serem selecionados da lista embaralhada.
 * @returns {object} Um novo objeto de categoria contendo a quantidade especificada de itens aleatórios,
 * ou o objeto de categoria original se a propriedade `items` for inválida.
 */
export function pickRandomItems(category, numberOfItems) {
  if (!category.items || !Array.isArray(category.items)) {
    return category;
  }
  return {
    ...category,
    items: pickRandomFromArray(category.items, numberOfItems),
  };
}
