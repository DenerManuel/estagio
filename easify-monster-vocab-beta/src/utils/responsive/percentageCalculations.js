/**
 * Calcula a porcentagem horizontal que um valor representa em relação à largura total.
 * @param {number} value - O valor horizontal (ex: largura ou posição X) que será convertido em porcentagem.
 * @param {number} totalWidth - A largura total da tela ou contêiner.
 * @returns {number} - A porcentagem arredondada do valor em relação à largura total.
 */
export function getHorizontalPercentage(value, totalWidth) {
  if (!value) return 0
  const percentage = (value / totalWidth) * 100;
  return Math.round(percentage); // Porcentagem arredondada
}

/**
 * Calcula a porcentagem vertical que um valor representa em relação à altura total.
 * @param {number} value - O valor vertical (ex: altura ou posição Y) que será convertido em porcentagem.
 * @param {number} totalHeight - A altura total da tela ou contêiner.
 * @returns {number} - A porcentagem arredondada do valor em relação à altura total.
 */
export function getVerticalPercentage(value, totalHeight) {
  if (!value) return 0
  const percentage = (value / totalHeight) * 100;
  return Math.round(percentage); // Porcentagem arredondada
}
