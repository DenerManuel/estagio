import { addCurrentGroupCards } from '../categories-screen-helpers.js';

/**
 * Configura os eventos de clique para os botões de navegação (anterior e próximo).
 * Ao serem clicados, esses botões alteram o grupo de cartas atualmente exibido.
 * @param {object} categoriesScreen - A instância da tela de categorias.
 * @param {import('@pixi/display').DisplayObject} categoriesScreen.previousButton - O botão para navegar para o grupo anterior.
 * @param {import('@pixi/display').DisplayObject} categoriesScreen.nextButton - O botão para navegar para o próximo grupo.
 */
export function configureNavigationButtonEvents(categoriesScreen) {
  categoriesScreen.previousButton.on('pointertap', () => changeCurrentIndex(-1, categoriesScreen));
  categoriesScreen.nextButton.on('pointertap', () => changeCurrentIndex(1, categoriesScreen));
}

/**
 * Altera o índice do grupo de cartas atual com base no passo de navegação.
 * A função lida com a navegação circular, ou seja, ao chegar ao final, volta para o início, e vice-versa.
 * @param {number} navigationStep - O valor a ser somado ao índice atual (-1 para anterior, 1 para próximo).
 * @param {object} categoriesScreen - A instância da tela de categorias.
 * @param {number} categoriesScreen.currentGroupIndex - O índice do grupo de cartas atual.
 * @param {object} categoriesScreen.cardGroups - O objeto que gerencia todos os grupos de cartas.
 */
function changeCurrentIndex(navigationStep, categoriesScreen) {
  categoriesScreen.currentGroupIndex += navigationStep;
  const REACH_END =
    categoriesScreen.currentGroupIndex >= categoriesScreen.cardGroups.getGroups().length;
  const REACH_START = categoriesScreen.currentGroupIndex < 0;

  if (REACH_END) categoriesScreen.currentGroupIndex = 0;
  if (REACH_START)
    categoriesScreen.currentGroupIndex = categoriesScreen.cardGroups.getGroups().length - 1;
  updateDisplayedContent(categoriesScreen);
}

/**
 * Limpa o contêiner de cartas e exibe as cartas do grupo atual.
 * Esta função reseta a posição do contêiner e o preenche novamente com as cartas correspondentes
 * ao `currentGroupIndex` atualizado.
 * @param {object} categoriesScreen - A instância da tela de categorias.
 * @param {import('@pixi/display').Container} categoriesScreen.cardsContainer - O contêiner PIXI que armazena as cartas.
 */
export function updateDisplayedContent(categoriesScreen) {
  categoriesScreen.cardsContainer.positionData = { positionX: 0, positionY: 0 };
  categoriesScreen.cardsContainer.removeChildren();

  addCurrentGroupCards(categoriesScreen);
}
