import { App } from '../../../../app/App.js';
import { GameOverScreen } from '../../../game-over-screen/GameOverScreen.js';
import { hideUI } from '../game-screen-helpers.js';

export function showGameOverScreen(gameScreen) {
  hideUI(gameScreen);

  const gameOverScreen = new GameOverScreen(gameScreen);
  App.getInstance().stage.addChild(gameOverScreen);
}
