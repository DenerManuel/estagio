import { GameScreen } from "../../screens/game-screen/GameScreen.js";

export function createGameScreen(screenManager, gameCategory, mode = 'score') {
  return new GameScreen(screenManager.app, gameCategory, mode);
}

export function configureGameScreenButtons(screenManager) {
  _configureGameScreenBackButton(screenManager);
}
const _configureGameScreenBackButton = (screenManager) => {
  const gameScreen = screenManager.screens.gameScreen;
  const backButton = gameScreen.addBackButton();

  backButton.on('pointertap', () => {
    screenManager.displayScreen('homeScreen');
    gameScreen.destroy({ children: true });
  });
}