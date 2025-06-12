import { GameScreen } from "../../screens/game-screen/GameScreen.js";

export function createGameScreen(screenManager, gameCategory) {
  return new GameScreen(screenManager.app, gameCategory);
}

export function configureGameScreenButtons(screenManager) {
  _configureGameScreenBackButton(screenManager);
}
const _configureGameScreenBackButton = (screenManager) => {
  const gameScreen = screenManager.screens.gameScreen;
  const backButton = gameScreen.addBackButton();

  backButton.on('click', () => {
    screenManager.displayScreen('homeScreen');
    gameScreen.destroy({ children: true });
  });
}