import { rotationLeftArray, rotationRightArray } from '../../../../utils/array/rotation-array.js';

/**
 * @private
 * Cria um manipulador de eventos ('handler') para rotacionar os itens da tela e atualizar a UI.
 * Esta é uma função fábrica que retorna uma nova função para ser usada como listener.
 *
 * @param {object} screen - A instância da tela de pré-jogo que contém o estado (itens, cards, etc).
 * @param {(arr: Array<object>) => Array<object>} rotationFn - A função de rotação a ser aplicada (ex: rotationLeftArray).
 * @returns {() => void} A função do manipulador de eventos.
 */
function createRotationHandler(screen, rotationFn) {
  return () => {
    // Modifica o estado diretamente na instância da tela para garantir consistência.
    screen.items = rotationFn(screen.items);

    // Atualiza os componentes da UI com base no novo estado.
    screen.itemCards.forEach((itemCard, index) => {
      const currentItem = screen.items[index];
      itemCard.updateImage(currentItem);
      itemCard.item = currentItem;
    });

    screen.itemNames.forEach((itemName, index) => {
      itemName.updateText(screen.items[index].name);
    });
  };
}

/**
 * Configura os eventos de 'pointertap' para os botões de navegação (anterior/próximo)
 * na tela de pré-jogo.
 *
 * @param {object} preGameScreen - A instância da tela de pré-jogo.
 * @param {PIXI.DisplayObject} preGameScreen.previousButton - O botão para navegar para o item anterior.
 * @param {PIXI.DisplayObject} preGameScreen.nextButton - O botão para navegar para o próximo item.
 * @param {Array<object>} preGameScreen.items - A lista de itens a ser exibida e rotacionada.
 * @param {Array<import('../../../../components/item-card/ItemCard.js').default>} preGameScreen.itemCards - Os cartões que exibem as imagens dos itens.
 * @param {Array<import('../../../../components/text/CustomText.js').default>} preGameScreen.itemNames - Os textos que exibem os nomes dos itens.
 */
export function configureNavigationButtonEvents(preGameScreen) {
  // Remove listeners antigos para evitar duplicação de eventos.
  preGameScreen.previousButton.off('pointertap');
  preGameScreen.nextButton.off('pointertap');

  // Atribui os novos listeners criados pela função fábrica.
  preGameScreen.previousButton.on(
    'pointertap',
    createRotationHandler(preGameScreen, rotationRightArray)
  );
  preGameScreen.nextButton.on(
    'pointertap',
    createRotationHandler(preGameScreen, rotationLeftArray)
  );
}
