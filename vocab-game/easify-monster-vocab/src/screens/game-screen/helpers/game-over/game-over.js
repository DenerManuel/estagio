import { showGameOverScreen } from './show-game-over-screen.js';

export function isGameOver(gameScreen) {
  gameScreen.timer.stopTimer();
  showGameOverScreen(gameScreen);
}
