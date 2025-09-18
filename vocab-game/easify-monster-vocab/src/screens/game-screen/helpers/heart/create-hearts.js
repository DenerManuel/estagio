import { Heart } from '../../components/game-screen-components.js';

/**
 * Cria e retorna um array de instâncias de 'Heart'.
 * @param {number} heartsQuantity - A quantidade de corações a serem criados.
 * @returns {Heart[]} Um array contendo as instâncias de 'Heart'.
 */
export function createHearts(heartsQuantity) {
  return Array.from({ length: heartsQuantity }, (_, i) => new Heart(i));
}
