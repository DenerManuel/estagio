/**
 * Embaralha um array usando o algoritmo Fisher-Yates.
 * Cria uma cópia do array para não modificar o original.
 * @param {Array<any>} array - O array a ser embaralhado.
 * @returns {Array<any>} Um novo array com os elementos embaralhados.
 * @private
 */
function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Troca os elementos de posição
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

/**
 * Seleciona um número específico de itens aleatórios de um array.
 *
 * A função cria uma cópia embaralhada do array de entrada
 * e retorna um subconjunto com o número de itens especificado.
 * O array original não é modificado.
 *
 * @export
 * @param {Array<any>} array - O array do qual os itens serão selecionados.
 * @param {number} numberOfItems - O número de itens a serem selecionados.
 * @returns {Array<any>} Um novo array contendo a quantidade especificada de itens aleatórios,
 * ou um array vazio se a entrada for inválida.
 */
export function pickRandomFromArray(array, numberOfItems) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  const shuffledItems = shuffle(array);
  return shuffledItems.slice(0, numberOfItems);
}

/**
 * Seleciona itens aleatórios de um array, garantindo que um ou mais itens específicos sejam excluídos.
 *
 * Ela primeiro remove os `excludedItems` da lista de possibilidades e depois seleciona
 * aleatoriamente a quantidade necessária do restante. A comparação entre itens é feita
 * pela propriedade `item.name` para garantir a exclusão correta.
 *
 * @export
 * @param {Array<object>} allItems - O array completo de itens para escolher (ex: itemCards).
 * @param {number} totalToSelect - O número total de opções que o quiz terá (N).
 * @param {object|Array<object>} excludedItems - O item ou a lista de itens que devem ser excluídos da seleção aleatória (ex: a "resposta correta").
 * @returns {Array<object>} Um array com `totalToSelect - excludedItems.length` itens aleatórios que não incluem os `excludedItems`.
 */
export function pickRandomItemsExcluding(allItems, totalToSelect, excludedItems = []) {
  // Garante que `excludedItems` seja um array para um tratamento uniforme.
  const excludedItemsArray = Array.isArray(excludedItems) ? excludedItems : [excludedItems];

  // Cria um Set com os nomes dos itens a serem excluídos para uma busca mais eficiente.
  const excludedNames = new Set(excludedItemsArray.map((item) => item.item.name));

  // Filtra o array para criar uma lista de opções que não inclui os itens excluídos,
  // usando a nova função genérica.
  const availableItems = allItems.filter((item) => !excludedNames.has(item.item.name));

  return pickRandomFromArray(availableItems, totalToSelect);
}

/**
 * Seleciona um número específico de itens aleatórios de um array, excluindo um conjunto de itens fornecido.
 * Funciona com arrays de qualquer tipo (strings, números, objetos).
 *
 * @export
 * @template T
 * @param {Array<T>} array - O array do qual os itens serão selecionados.
 * @param {number} numberOfItems - O número de itens a serem selecionados.
 * @param {Array<T>} itemsToExclude - Um array de itens a serem excluídos da seleção.
 * @returns {Array<T>} Um novo array contendo a quantidade especificada de itens aleatórios.
 */
export function pickRandomExcluding(array, numberOfItems, itemsToExclude = []) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  // Garante que `itemsToExclude` seja um array para um tratamento uniforme.
  const excluded = Array.isArray(itemsToExclude) ? itemsToExclude : [itemsToExclude];

  // Cria um Set com os itens a serem excluídos para uma busca eficiente (O(1) em média).
  const excludedSet = new Set(excluded);

  // Filtra o array original para obter apenas os itens disponíveis.
  const availableItems = array.filter((item) => !excludedSet.has(item));

  // Usa a função pickRandomFromArray para selecionar aleatoriamente dos itens disponíveis.
  return pickRandomFromArray(availableItems, numberOfItems);
}
