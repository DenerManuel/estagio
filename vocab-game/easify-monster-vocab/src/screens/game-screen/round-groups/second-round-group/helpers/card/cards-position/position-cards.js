import { secondRoundGroupPositions } from '../../../../../../../styles/screens-components-positions/game-screen/round-groups/second-round-group/second-round-group-components-positions.js';

/**
 * Determina qual função de posicionamento usar com base no round atual.
 * @param {number} round - O número do round atual.
 * @param {object} positions - O objeto contendo as funções de posicionamento para o dispositivo atual.
 * @returns {Function|null} A função de posicionamento correspondente ou null se nenhuma for encontrada.
 */
function getPositioner(round, positions) {
  if (round <= 11) return positions.firstPosition;
  if (round <= 13) return positions.secondPosition;
  if (round <= 16) return positions.thirdPosition;
  if (round === 17) return positions.fourthPosition;
  if (round === 18) return positions.fifthPosition;
  if (round === 19) return positions.sixthPosition;
  return null;
}

/**
 * Posiciona os cards na tela com base no round atual do jogo.
 * @param {object} secondRoundGroupInstance - A instância do grupo do segundo round.
 */
export function positionCards(secondRoundGroupInstance) {
  const selectedCards = secondRoundGroupInstance.selectedCards;
  const currentRound = secondRoundGroupInstance.currentRound;

  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const devicePositions = isMobile
    ? secondRoundGroupPositions.card.mobile
    : secondRoundGroupPositions.card.desktop;

  const positioner = getPositioner(currentRound, devicePositions);

  if (positioner) {
    selectedCards.forEach((card, index) => {
      const position = positioner(index);
      card.position.set(position.x, position.y);
      secondRoundGroupInstance.addChild(card);
    });
  }
}
