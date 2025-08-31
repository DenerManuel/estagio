import { GameScreen } from "../../screens/game-screen/GameScreen.js";

export function createGameScreen(screenManager, gameCategory, mode = 'score') {
  return new GameScreen(screenManager.app, gameCategory, mode);
}