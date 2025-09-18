/**
 * Embaralha um array de forma aleatória usando o algoritmo Fisher-Yates.
 * Esta função cria uma cópia do array original para não modificá-lo diretamente (imutabilidade).
 *
 * @template T
 * @param {Array<T>} array O array a ser embaralhado.
 * @returns {Array<T>} Um novo array com os elementos do array original em ordem aleatória.
 */
export function shuffleArray(array) {
  // 1. Cria uma cópia do array para não modificar o original.
  const shuffledArray = [...array];

  // 2. Itera do final para o começo do array.
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // 3. Escolhe um índice aleatório entre 0 e i (inclusive).
    const j = Math.floor(Math.random() * (i + 1));

    // 4. Troca os elementos nas posições i e j.
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
