/**
 * Rotaciona os elementos de um array para a esquerda em uma posição.
 * O primeiro elemento se torna o último. A função não modifica o array original.
 *
 * @template T
 * @param {Array<T>} array - O array a ser rotacionado.
 * @returns {Array<T>} Um novo array com os elementos rotacionados para a esquerda.
 * @example
 * // retorna [2, 3, 4, 1]
 * rotationLeftArray([1, 2, 3, 4]);
 */
export function rotationLeftArray(array) {
  const rotatedArray = [];
  for (let i = 0; i < array.length; i++) {
    rotatedArray.push(array[(i + 1) % array.length]);
  }
  return rotatedArray;
}

/**
 * Rotaciona os elementos de um array para a direita em uma posição.
 * O último elemento se torna o primeiro. A função não modifica o array original.
 *
 * @template T
 * @param {Array<T>} array - O array a ser rotacionado.
 * @returns {Array<T>} Um novo array com os elementos rotacionados para a direita.
 * @example
 * // retorna [4, 1, 2, 3]
 * rotationRightArray([1, 2, 3, 4]);
 */
export function rotationRightArray(array) {
  const rotatedArray = [];
  for (let i = 0; i < array.length; i++) {
    rotatedArray.push(array[(i - 1 + array.length) % array.length]);
  }
  return rotatedArray;
}
