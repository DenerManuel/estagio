import { showUI } from '../ui/show-ui.js';

export function restartGame(gameScreen) {
  resetGameState(gameScreen);
  destroyRoundGroups(gameScreen);
  gameScreen._addComponents();
  showUI(gameScreen);
}

function resetGameState(gameScreen) {
  gameScreen.totalScore = 0;
  gameScreen.hearts = 5;
  gameScreen.currentRound = 1;
}

function destroyRoundGroups(gameScreen) {
  if (gameScreen.firstRoundGroup) gameScreen.firstRoundGroup.destroy();
  if (gameScreen.secondRoundGroup) gameScreen.secondRoundGroup.destroy();
  if (gameScreen.thirdRoundGroup) gameScreen.thirdRoundGroup.destroy();
}
