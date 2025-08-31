import { isGameOver, updateHearts } from '../game-screen-helpers.js';

/**
 * Adiciona um grupo de rodada ao contexto do jogo, com lógica de eventos e pontuação.
 * @param {Object} options
 * @param {Object} options.context - O objeto GameScreen (this).
 * @param {Function} options.GroupClass - Classe do grupo (FirstRoundGroup, etc.).
 * @param {string} options.groupKey - Nome da propriedade onde o grupo será armazenado.
 * @param {Array} options.initArgs - Argumentos para instanciar o grupo.
 * @param {number} options.penalty - Penalidade em caso de erro.
 * @param {string} options.currentScreenName - Nome da tela atual.
 * @param {Function} options.updateRoundFn - Função para atualizar o contador da rodada.
 */
export function addRoundGroup({
  context,
  GroupClass,
  groupKey,
  initArgs,
  penalty,
  currentScreenName,
  updateRoundFn,
}) {
  const groupInstance = createGroupInstance(GroupClass, initArgs);
  registerCorrectHandler(groupInstance, context, updateRoundFn);
  registerErrorHandler(groupInstance, context, penalty);

  attachGroupToContext(context, groupInstance, groupKey, currentScreenName);
}

function createGroupInstance(GroupClass, initArgs) {
  return new GroupClass(...initArgs);
}

function registerCorrectHandler(group, context, updateRoundFn) {
  if (group.name === 'SecondRoundGroup') {
    context.timer.visible = false;
    group.on('correct', () => {
      context.score.addScore(100);
      context.totalScore += 100;
      updateRoundFn();
    });
  } else {
    context.timer.visible = true;
    group.on('correct', () => {
      context.timer.stopTimer();
      context.totalScore += context.score.getScore(context.timer);
      context.score.updateScore(context.totalScore);
      updateRoundFn();
      // context.timer.startTimer(context);
      context.timer.startTimer(() => handleTimerEnd(context));
    });
  }
}

function registerErrorHandler(group, context, penalty) {
  group.on('error', () => {
    if (context.mode === 'score') {
      context.totalScore = Math.max(context.totalScore - penalty, 0);
      context.score.updateScore(context.totalScore);
    } else if (context.mode === 'heart') {
      context.heartsCount--;
      updateHearts(context);
      if (context.heartsCount <= 0) {
        isGameOver(context);
      }
    }
  });
}

function attachGroupToContext(context, groupInstance, groupKey, screenName) {
  context[groupKey] = groupInstance;
  context.addChild(groupInstance);
  context.currentScreen = screenName;
  context.timer.startTimer(() => handleTimerEnd(context));
}

function handleTimerEnd(context) {
  if (context.mode === 'heart') {
    context.heartsCount--;
    updateHearts(context);
    if (context.heartsCount <= 0) {
      isGameOver(context);
    }
  }
}
