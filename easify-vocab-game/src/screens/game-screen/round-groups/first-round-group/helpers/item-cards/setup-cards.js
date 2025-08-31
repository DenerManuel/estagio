import { App } from '../../../../../../app/App.js';
import { addCardsInScreen, configureCardEvents, positionCards } from '../first-round-helpers.js';

/**
 * Configura os cartões selecionados para o round.
 *
 * Esta função orquestra a configuração completa dos cartões:
 * 1. Adiciona os listeners de eventos (como 'pointertap') aos cartões.
 * 2. Determina o layout de posicionamento correto com base no número de cartões e no tipo de dispositivo (mobile/desktop).
 * 3. Aplica as posições calculadas aos cartões.
 * 4. Adiciona os cartões já posicionados na tela do jogo.
 *
 * @param {object} firstRoundGroupInstance - A instância do grupo do primeiro round, que contém a coleção de `selectedCards`.
 * @param {import('../../../../components/item-card/ItemCard.js').default[]} firstRoundGroupInstance.selectedCards - A lista de cartões de itens que foram selecionados para o round.
 * @param {number} numberOfCards - O número de cartões a serem configurados (geralmente 3, 5 ou 7).
 */
export function setupCards(firstRoundGroupInstance, numberOfCards) {
  configureCardEvents(firstRoundGroupInstance);

  const groupKeyMap = {
    three: 'firstGroupCardsPositions',
    five: 'secondGroupCardsPositions',
    seven: 'thirdGroupCardsPositions',
  };

  const groupKey = groupKeyMap[numberOfCards];
  const deviceType = window.innerWidth <= 767 ? 'mobile' : 'desktop';
  positionCards(firstRoundGroupInstance.selectedCards, groupKey, deviceType);
  addCardsInScreen(firstRoundGroupInstance);
}
