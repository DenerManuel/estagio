/**
 * Atualiza a visibilidade de um array de sprites de coração com base na contagem atual.
 * Corações com índice menor que a contagem atual são tornados visíveis, os outros são ocultados.
 * @param {import('../../components/heart/Heart.js').Heart[]} heartSprites - O array de sprites de coração a ser atualizado.
 * @param {number} currentHeartsCount - A quantidade atual de corações que devem estar visíveis.
 */
export function updateHearts(heartSprites, currentHeartsCount) {
  heartSprites.forEach((heart, i) => {
    heart.visible = i < currentHeartsCount;
  });
}
