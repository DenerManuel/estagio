import { thirdRoundGroupPositions } from '../../../../../../styles/screens-components-positions/game-screen/round-groups/third-round-group/third-round-group-components-positions.js';

const mediaQuery = window.matchMedia('(max-width: 767px)');
const IS_MOBILE = mediaQuery.matches;
/**
 * Determina qual função de posicionamento usar com base no round atual.
 * @param {number} round - O número do round atual.
 * @param {object} positions - O objeto contendo as funções de posicionamento para o dispositivo atual.
 * @returns {Function|null} A função de posicionamento correspondente ou null se nenhuma for encontrada.
 */
function getPositioner(round, positions) {
  // DESKTOP
  if (round <= 21 && !IS_MOBILE) return positions.firstPosition;
  if (round <= 23 && !IS_MOBILE) return positions.secondPosition;
  if (round <= 26 && !IS_MOBILE) return positions.thirdPosition;
  if (round === 27 && !IS_MOBILE) return positions.secondPosition;
  if (round === 28 && !IS_MOBILE) return positions.firstPosition;
  if (round === 29 && !IS_MOBILE) return positions.fourthPosition;
  if (round === 30 && !IS_MOBILE) return positions.fifthPosition;

  // MOBILE
  if (round <= 23 && IS_MOBILE) return positions.firstPosition;
  if (round <= 27 && IS_MOBILE) return positions.secondPosition;
  if (round === 28 && IS_MOBILE) return positions.firstPosition;
  if (round === 29 && IS_MOBILE) return positions.thirdPosition;
  if (round === 30 && IS_MOBILE) return positions.fourthPosition;

  return null;
}

/**
 * Posiciona os nameContainers na tela com base no round atual do jogo.
 * @param {object} thirdRoundGroupInstance - A instância do grupo do segundo round.
 */
export function positionNameContainers(thirdRoundGroupInstance) {
  const selectedNamesContainers = thirdRoundGroupInstance.selectedNameContainers;
  const currentRound = thirdRoundGroupInstance.currentRound;

  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const devicePositions = isMobile
    ? thirdRoundGroupPositions.nameContainer.mobile
    : thirdRoundGroupPositions.nameContainer.desktop;

  const positioner = getPositioner(currentRound, devicePositions);
  if (positioner) {
    selectedNamesContainers.forEach((nameContainer, index) => {
      const position = positioner(index);
      nameContainer.position.set(position.x, position.y);
      thirdRoundGroupInstance.addChild(nameContainer);
    });
  }
}
