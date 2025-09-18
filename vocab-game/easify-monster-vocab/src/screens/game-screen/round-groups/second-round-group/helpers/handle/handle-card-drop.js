import * as SecondGroupHelpers from '../second-group-helpers.js';
import { isOverlapping } from './is-overlapping.js';

/**
 * Lida com a lógica de quando um card é solto (drop) na tela.
 * Verifica se o card foi solto em um container de destino válido.
 *
 * @param {import('pixi.js').Sprite} card - O card que foi solto.
 * @param {import('../../SecondRoundGroup.js').SecondRoundGroup} secondRoundGroupInstance - A instância do grupo do segundo round.
 */
export function handleCardDrop(card, secondRoundGroupInstance) {
  // Ignora se o card já foi acertado para evitar múltiplas interações.
  if (card.hasHit) return;

  // 1. Verifica se o card está sobrepondo ALGUM container.
  const overlappedRef = secondRoundGroupInstance.containerRefs.find((ref) =>
    isOverlapping(card, ref.cardContainer)
  );

  // 2. Se sobrepôs um container, verifica se é o correto.
  if (overlappedRef) {
    const isCorrect = overlappedRef.cardContainer.name === card.name;
    if (isCorrect) {
      handleCorrectDrop(card, overlappedRef, secondRoundGroupInstance);
    } else {
      // Soltou no container ERRADO: conta o erro e retorna o card.
      handleIncorrectDrop(card, secondRoundGroupInstance);
      returnCardToStartPosition(card);
    }
  } else {
    // 3. Se não sobrepôs nenhum container, apenas retorna o card à sua posição.
    // Não emite evento de erro.
    returnCardToStartPosition(card);
  }
}

/**
 * Executa a lógica para um acerto (quando o card é solto no container correto).
 * @private
 * @param {import('pixi.js').Sprite} card - O card que foi solto.
 * @param {object} targetContainer - A referência ao container de destino que foi acertado.
 * @param {import('../../SecondRoundGroup.js').SecondRoundGroup} secondRoundGroupInstance - A instância do grupo do segundo round.
 */
function handleCorrectDrop(card, targetContainer, secondRoundGroupInstance) {
  updateCardOnCorrectDrop(card, targetContainer);
  updateSceneOnCorrectDrop(targetContainer, secondRoundGroupInstance);
  updateGameStateOnCorrectDrop(card, secondRoundGroupInstance);
}

/**
 * Atualiza as propriedades do card após um acerto.
 * @private
 * @param {import('pixi.js').Sprite} card
 * @param {object} targetContainer
 */
function updateCardOnCorrectDrop(card, targetContainer) {
  card.hasHit = true;
  card.position.copyFrom(targetContainer.cardContainer.position);
  card.eventMode = 'static';
  card.cursor = 'default';

  // Remove todos os listeners de eventos (como 'pointerdown') para
  // garantir que o card não possa mais ser arrastado.
  card.removeAllListeners();
}

/**
 * Atualiza a cena (objetos PIXI) após um acerto.
 * @private
 * @param {object} targetContainer
 * @param {import('../../SecondRoundGroup.js').SecondRoundGroup} secondRoundGroupInstance
 */
function updateSceneOnCorrectDrop(targetContainer, secondRoundGroupInstance) {
  // Remove a referência do container do array para evitar erros futuros.
  const refIndex = secondRoundGroupInstance.containerRefs.indexOf(targetContainer);
  if (refIndex > -1) {
    secondRoundGroupInstance.containerRefs.splice(refIndex, 1);
  }

  targetContainer.cardContainer.destroy();
  secondRoundGroupInstance.removeChild(targetContainer.nameContainer);
  secondRoundGroupInstance.addChild(targetContainer.nameContainer);
}

/**
 * Atualiza o estado do jogo após um acerto.
 * @private
 * @param {import('pixi.js').Sprite} card
 * @param {import('../../SecondRoundGroup.js').SecondRoundGroup} secondRoundGroupInstance
 */
function updateGameStateOnCorrectDrop(correctCard, secondRoundGroupInstance) {
  // Captura a posição original do card ANTES de ele ser movido para o container.
  // A propriedade `dragStart` é definida quando o arrasto começa.
  // Se `dragStart` não existir, usa a posição atual como fallback.
  const originalPosition = correctCard.dragStart
    ? { x: correctCard.dragStart.x, y: correctCard.dragStart.y }
    : { x: correctCard.x, y: correctCard.y };

  secondRoundGroupInstance.emit('correct');
  secondRoundGroupInstance.currentRound++;
  secondRoundGroupInstance.usedNames.push(correctCard.name);
  secondRoundGroupInstance.cardsCorrects++;

  // Remove o card acertado da lista de cards selecionados (arrastáveis)
  const cardIndex = secondRoundGroupInstance.selectedCards.indexOf(correctCard);
  if (cardIndex > -1) {
    secondRoundGroupInstance.selectedCards.splice(cardIndex, 1);
  }

  // Verifica se o jogo terminou
  if (secondRoundGroupInstance.currentRound > 19) {
    secondRoundGroupInstance.emit('end');
    return;
  }

  // Se ainda houver containers na tela, substitui o card acertado por um novo.
  // Caso contrário, avança para a próxima fase do round.
  if (secondRoundGroupInstance.cardsCorrects < 2) {
    if (secondRoundGroupInstance.currentRound < 17) {
      replaceCard(originalPosition, cardIndex, secondRoundGroupInstance);
    } else {
      SecondGroupHelpers.positionCards(secondRoundGroupInstance);
    }
  } else {
    if (secondRoundGroupInstance.currentRound === 16) {
      replaceCard(originalPosition, cardIndex, secondRoundGroupInstance);
      secondRoundGroupInstance.selectedNames = [];
      secondRoundGroupInstance.cardsCorrects = 0;
      secondRoundGroupInstance._addCardsContainers();
    } else {
      secondRoundGroupInstance.removeChildren();
      secondRoundGroupInstance._continueGame();
    }
  }
}

/**
 * Substitui o card acertado por um novo card do baralho.
 * @private
 * @param {{x: number, y: number}} position - A posição onde o novo card deve aparecer.
 * @param {number} index - O índice no array `selectedCards` onde o novo card deve ser inserido.
 * @param {import('../../SecondRoundGroup.js').SecondRoundGroup} gameInstance - A instância do jogo.
 */
function replaceCard(position, index, gameInstance) {
  // Seleciona 1 novo card que ainda não foi usado
  const [newCard] = SecondGroupHelpers.selectNRandomCards(
    gameInstance.cards,
    1,
    gameInstance.usedCards
  );

  if (!newCard) return; // Não há mais cards para adicionar

  // Posiciona e configura o novo card
  newCard.position.copyFrom(position);
  newCard.name = newCard.item.name;

  SecondGroupHelpers.configureCardMovement({
    app: gameInstance.app,
    card: newCard,
    onDrop: (droppedCard) => handleCardDrop(droppedCard, gameInstance),
  });

  gameInstance.selectedCards.push(newCard);
  gameInstance.usedCards.push(newCard);
  gameInstance.addChild(newCard);
}

/**
 * Executa a lógica para um erro (quando o card é solto em um local incorreto).
 * @private
 * @param {import('pixi.js').Sprite} card - O card que foi solto.
 * @param {import('../../SecondRoundGroup.js').SecondRoundGroup} secondRoundGroupInstance - A instância do grupo do segundo round.
 */
function handleIncorrectDrop(card, secondRoundGroupInstance) {
  secondRoundGroupInstance.emit('error');
}

/**
 * Retorna o card para sua posição original de antes de ser arrastado.
 * @private
 * @param {import('pixi.js').Sprite} card
 */
function returnCardToStartPosition(card) {
  if (card.dragStart) {
    card.x = card.dragStart.x;
    card.y = card.dragStart.y;
  }
}
