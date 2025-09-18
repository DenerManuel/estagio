import { NameContainer } from '../../components/name-container/NameContainer.js';
import {
  addHoverEffects,
  handleNameSelection,
} from '../selected/selected-names/configure-selected-names.js';
import { selectNRandomNames } from '../selected/selected-names/select-n-random-names.js';
import { positionNameContainers } from '../third-group-helpers.js';

const mediaQuery = window.matchMedia('(max-width: 767px)');
const IS_MOBILE = mediaQuery.matches;

/**
 * Prepara e avança o jogo para a próxima fase dentro do terceiro round.
 *
 * Esta função é chamada após o jogador acertar. Ela:
 * 1. Reseta o estado da rodada atual (card selecionado e contagem de acertos).
 * 2. Adiciona um novo conjunto de nameContainers à tela, aumentando a dificuldade
 *    em rodadas específicas (21 e 23).
 *
 * @param {import('../../ThirdRoundGroup2.js').ThirdRoundGroup} thirdRoundGroupInstance - A instância da classe do terceiro round.
 * @param {import('../../components/name-container/NameContainer.js').NameContainer} correctNameContainer - O contêiner de nome que foi acertado.
 */
export function continueGame(thirdRoundGroupInstance, correctNameContainer) {
  // Guarda uma referência ao card atual antes que ele seja substituído.
  const previousCard = thirdRoundGroupInstance.selectedCard;

  thirdRoundGroupInstance.currentRound++;
  const currentRound = thirdRoundGroupInstance.currentRound;

  if (currentRound < 27 && !IS_MOBILE) {
    // Substitui o contêiner correto por um novo para manter o jogo fluindo.
    _replaceNameContainer(correctNameContainer, thirdRoundGroupInstance);
  } else if (currentRound < 28 && IS_MOBILE) {
    // Substitui o contêiner correto por um novo para manter o jogo fluindo.
    _replaceNameContainer(correctNameContainer, thirdRoundGroupInstance);
  } else {
    _removeOldContainer(correctNameContainer, thirdRoundGroupInstance);
  }

  // Lógica para adicionar mais opções e aumentar a dificuldade em rounds específicos.
  if (currentRound === 23 && !IS_MOBILE) {
    thirdRoundGroupInstance._addNameContainers(4);
  } else if (currentRound === 24 && IS_MOBILE) {
    thirdRoundGroupInstance._addNameContainers(4);
  } else if (currentRound === 25 && !IS_MOBILE) {
    thirdRoundGroupInstance._addNameContainers(5);
  } else if (!IS_MOBILE) {
    switch (currentRound) {
      case 27:
      case 28:
      case 29:
      case 30:
        positionNameContainers(thirdRoundGroupInstance);
        break;
    }
  } else if (IS_MOBILE) {
    switch (currentRound) {
      case 28:
      case 29:
      case 30:
        positionNameContainers(thirdRoundGroupInstance);
        break;
    }
  }

  // switch (currentRound) {
  //   case 23:
  //     thirdRoundGroupInstance._addNameContainers(4);
  //     break;
  //   case 25:
  //     thirdRoundGroupInstance._addNameContainers(5);
  //     break;
  //   case 27:
  //   case 28:
  //   case 29:
  //   case 30:
  //     positionNameContainers(thirdRoundGroupInstance);
  //     break;
  // }

  // Seleciona e exibe um novo card para o jogador adivinhar.
  // Passamos o card anterior para garantir que o novo card seja diferente.
  thirdRoundGroupInstance._addCard(previousCard);
}

/**
 * Substitui um contêiner de nome por um novo.
 * @private
 * @param {import('../../components/name-container/NameContainer.js').NameContainer} containerToRemove - O contêiner a ser removido.
 * @param {import('../../ThirdRoundGroup2.js').ThirdRoundGroup} gameInstance - A instância do jogo.
 */
function _replaceNameContainer(containerToRemove, gameInstance) {
  const originalPosition = { x: containerToRemove.x, y: containerToRemove.y };

  _removeOldContainer(containerToRemove, gameInstance);

  const newContainer = _createNewContainer(gameInstance);
  if (!newContainer) return; // Não há mais nomes para adicionar

  newContainer.position.copyFrom(originalPosition);
  gameInstance.addChild(newContainer);
}

/**
 * Remove o contêiner antigo da cena e das listas de estado.
 * @private
 */
function _removeOldContainer(container, gameInstance) {
  // Remove o nome do contêiner antigo da lista de nomes selecionados.
  const nameToRemove = container.name;
  const nameIndex = gameInstance.selectedNames.indexOf(nameToRemove);
  if (nameIndex > -1) {
    gameInstance.selectedNames.splice(nameIndex, 1);
  }

  // Remove o objeto do contêiner da lista de contêineres e da cena.
  gameInstance.removeChild(container);
  const containerIndex = gameInstance.selectedNameContainers.indexOf(container);
  if (containerIndex > -1) {
    gameInstance.selectedNameContainers.splice(containerIndex, 1);
  }
  container.destroy();
}

/**
 * Cria e configura um novo contêiner de nome.
 * @private
 * @returns {import('../../components/name-container/NameContainer.js').NameContainer | null}
 */
function _createNewContainer(gameInstance) {
  const [newName] = selectNRandomNames(gameInstance.allNames, 1, gameInstance.usedNames);
  if (!newName) {
    console.warn('Não há mais nomes únicos para selecionar.');
    return null;
  }

  // Atualiza o estado do jogo com o novo nome
  gameInstance.selectedNames.push(newName);
  gameInstance.usedNames.push(newName);

  // Cria e configura o novo componente
  const nameContainer = new NameContainer(newName);
  nameContainer.name = newName;
  nameContainer.eventMode = 'dynamic';
  nameContainer.cursor = 'pointer';

  // Adiciona os eventos de interação apenas ao novo contêiner
  nameContainer.on('pointertap', () => handleNameSelection(nameContainer, gameInstance));
  addHoverEffects(nameContainer);

  gameInstance.selectedNameContainers.push(nameContainer);

  return nameContainer;
}
