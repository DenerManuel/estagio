import { CompletedScreen } from '../../../completed-screen/CompletedScreen.js';

/**
 * Realiza a transição da tela de jogo para a tela de conclusão.
 * Remove a tela de jogo do palco e adiciona a tela de conclusão.
 * @param {import('../../../../app/App.js').App} app - A instância principal da aplicação PIXI.
 * @param {import('../../GameScreen.js').GameScreen} gameScreen - A instância da tela de jogo a ser removida.
 */
export function showCompletedScreen(gameScreen) {
  // Remove a tela de jogo atual do palco principal.
  gameScreen.app.stage.removeChild(gameScreen);

  // Cria uma nova instância da tela de conclusão com a pontuação final.
  const completedScreen = new CompletedScreen(gameScreen.totalScore);
  gameScreen.app.stage.addChild(completedScreen);
}
