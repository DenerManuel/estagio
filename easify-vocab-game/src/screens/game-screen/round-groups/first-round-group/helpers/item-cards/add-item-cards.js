import { firstRoundGroupPositions } from '../../../../../../styles/screens-components-positions/game-screen/round-groups/first-round-group/first-round-group-components-positions.js';
import { completeSelectedCards, setupCards } from '../first-round-helpers.js';

/**
 * Adiciona e configura os cartões de itens para o primeiro round do jogo,
 * com base no número de cartões especificado.
 * Esta função delega a lógica para `completeSelectedCards` e `setupCards`.
 *
 * @param {object} firstRoundGroupInstance - A instância do grupo do primeiro round, contendo o estado e as coleções de cartões.
 * @param {number} numberOfItemCards - O número de cartões a serem configurados (valores válidos: 3, 5 ou 7).
 */
export function addItemCards(firstRoundGroupInstance, numberOfItemCards) {
  switch (numberOfItemCards) {
    case 3:
      completeSelectedCards(firstRoundGroupInstance, 2);
      setupCards(firstRoundGroupInstance, 'three');
      break;
    case 5:
      completeSelectedCards(firstRoundGroupInstance, 4);
      setupCards(firstRoundGroupInstance, 'five');
      firstRoundGroupInstance.itemName.y =
        firstRoundGroupPositions.nameFieldContainer.desktop.secondPosition()[1];
      break;
    case 7:
      completeSelectedCards(firstRoundGroupInstance, 6);
      setupCards(firstRoundGroupInstance, 'seven');
      firstRoundGroupInstance.itemName.y =
        firstRoundGroupPositions.nameFieldContainer.desktop.secondPosition()[1];
      break;
  }
}
