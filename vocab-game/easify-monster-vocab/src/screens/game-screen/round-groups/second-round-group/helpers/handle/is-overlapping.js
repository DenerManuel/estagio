/**
 * Verifica se um objeto (obj1) se sobrepõe a uma área interna de outro objeto (obj2).
 *
 * Esta função é ideal para cenários de "arrastar e soltar", pois permite definir um
 * preenchimento (padding) no objeto de destino. Isso exige que o objeto arrastado
 * esteja mais centralizado sobre o alvo para que a colisão seja detectada,
 * evitando acionamentos acidentais apenas por tocar nas bordas.
 *
 * @param {import('pixi.js').DisplayObject} obj1 - O objeto que está sendo movido (ex: o card).
 * @param {import('pixi.js').DisplayObject} obj2 - O objeto alvo da colisão (ex: o container).
 * @param {number} [padding=80] - O valor do preenchimento a ser aplicado nas bordas de `obj2`.
 *                                Um valor maior resulta em uma área de colisão menor e mais central.
 * @returns {boolean} Retorna `true` se `obj1` estiver sobrepondo a área interna de `obj2`, caso contrário, `false`.
 */
export function isOverlapping(obj1, obj2, padding = 80) {
  // 1. Obtém os retângulos delimitadores (bounding boxes) de ambos os objetos.
  //    Esses retângulos representam a área total que cada objeto ocupa na tela.
  const bounds1 = obj1.getBounds();
  const bounds2 = obj2.getBounds();

  // 2. Calcula as dimensões da área de colisão interna do segundo objeto (obj2).
  //    O padding é aplicado em ambos os lados (horizontal e vertical),
  //    reduzindo a área de detecção.
  const innerBounds2 = {
    x: bounds2.x + padding,
    y: bounds2.y + padding,
    width: bounds2.width - padding * 2,
    height: bounds2.height - padding * 2,
  };

  // 3. Realiza a verificação de colisão (Axis-Aligned Bounding Box - AABB).
  //    Compara os limites do primeiro objeto (bounds1) com a área interna
  //    calculada para o segundo objeto (innerBounds2).
  return (
    bounds1.x < innerBounds2.x + innerBounds2.width &&
    bounds1.x + bounds1.width > innerBounds2.x &&
    bounds1.y < innerBounds2.y + innerBounds2.height &&
    bounds1.y + bounds1.height > innerBounds2.y
  );
}
