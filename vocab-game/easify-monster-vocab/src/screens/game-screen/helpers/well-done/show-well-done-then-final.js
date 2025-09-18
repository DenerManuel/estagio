import * as GameComponents from '../../components/game-screen-components.js';
import * as GameHelpers from '../game-screen-helpers.js';

export function showWellDoneThenFinal(gameScreen) {
  GameHelpers.hideUI(gameScreen);
  createWellDoneText(gameScreen);
  positionWellDoneText(gameScreen);
  setTimeToHideWellDoneText(gameScreen);
}

function createWellDoneText(gameScreen) {
  gameScreen.wellDoneText = new GameComponents.WellDoneText();
  gameScreen.addChild(gameScreen.wellDoneText);
}
function positionWellDoneText(gameScreen) {
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  if (isMobile) {
    gameScreen.wellDoneText.setPositionMobile();
  }
}
function setTimeToHideWellDoneText(gameScreen) {
  const TIME_TO_HIDE_WELL_DONE_TEXT = 2000; // 2 segundos

  setTimeout(() => {
    gameScreen.removeChild(gameScreen.wellDoneText);
    GameHelpers.showCompletedScreen(gameScreen);
  }, TIME_TO_HIDE_WELL_DONE_TEXT);
}
