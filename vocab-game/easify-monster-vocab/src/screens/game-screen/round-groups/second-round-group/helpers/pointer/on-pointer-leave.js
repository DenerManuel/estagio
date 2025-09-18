import { onDragEnd } from '../card/card-movement/onDragEnd.js';

/**
 * Chamado quando o ponteiro do mouse sai da área da aplicação.
 * Verifica se algum card está sendo arrastado e finaliza a operação de arrastar,
 * o que faz com que o card retorne à sua posição original se não for solto em um alvo válido.
 * @param {object} params - Os parâmetros da função.
 * @param {Array<import('pixi.js').Sprite>} params.cards - A lista de cards na tela.
 * @param {import('pixi.js').Application} params.app - A instância da aplicação PIXI.
 * @param {Function} params.onDrop - A função de callback para quando o card é solto.
 */
export function onPointerLeave({ cards, app, onDrop }) {
  const draggingCard = cards.find((card) => card.dragging);

  if (draggingCard) {
    // Chama onDragEnd para garantir que todos os eventos e estados sejam limpos corretamente.
    // onDragEnd, por sua vez, chamará onDrop, que lidará com o retorno do card à posição inicial
    // se ele não estiver sobre um container válido.
    onDragEnd({ app, card: draggingCard, onDrop });
  }
}
