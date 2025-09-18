import { Rectangle } from 'pixi.js';

/**
 * Verifica se o centro de um objeto (obj1) está sobrepondo outro objeto (obj2).
 * Esta abordagem é mais precisa para interações de "soltar" (drop), pois considera
 * o ponto central do objeto arrastado em vez de toda a sua caixa delimitadora.
 *
 * @param {import('pixi.js').DisplayObject} obj1 - O objeto que está sendo arrastado (ex: o card).
 * @param {import('pixi.js').DisplayObject} obj2 - O objeto alvo da colisão (ex: o container).
 * @returns {boolean} Retorna `true` se o centro de `obj1` estiver dentro dos limites de `obj2`, caso contrário, `false`.
 */
export function isCenterOverlapping(obj1, obj2) {
  // Garante que o obj2 tenha uma área de colisão definida.
  // Se não tiver, usa seu retângulo delimitador como padrão.
  if (!obj2.hitArea) {
    obj2.hitArea = new Rectangle(0, 0, obj2.width, obj2.height);
  }

  // Obtém a posição central de obj1 em coordenadas globais.
  const globalCenterPoint = obj1.getGlobalPosition();
  return obj2.containsPoint(globalCenterPoint);
}
