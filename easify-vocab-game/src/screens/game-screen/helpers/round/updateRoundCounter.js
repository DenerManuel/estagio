import * as GameHelpers from '../game-screen-helpers.js';
import { addFirstRoundGroup, addSecondRoundGroup, addThirdRoundGroup } from '../game-screen-helpers.js';

export function updateRoundCounter(gameScreen) {
  incrementRound(gameScreen);
  updateRoundCounterText(gameScreen);

  if (shouldTransitionToSecondRound(gameScreen)) {
    // gameScreen.itemCards.forEach((itemCard) => itemCard.deactivateEvents())
    transitionToSecondRound(gameScreen);
  } else if (shouldTransitionToThirdRound(gameScreen)) {
    // gameScreen.itemCards.forEach((itemCard) => itemCard.deactivateEvents())
    transitionToThirdRound(gameScreen);
  } else if (shouldFinishGame(gameScreen)) {
    finishGame(gameScreen);
  }
}

function incrementRound(gameScreen) {
  gameScreen.currentRound++;
}

function updateRoundCounterText(gameScreen) {
  if (gameScreen.roundCounter.roundCounterText) {
    gameScreen.roundCounter.roundCounterText.text = `${gameScreen.currentRound} / 30`;
  }
}

function shouldTransitionToSecondRound(gameScreen) {
  return gameScreen.currentRound === 11 && gameScreen.currentScreen === 'firstRoundGroup';
}

function transitionToSecondRound(gameScreen) {
  gameScreen.firstRoundGroup.destroy();
  addSecondRoundGroup(gameScreen);
  gameScreen.currentRound = 10;
  updateRoundCounterText(gameScreen);
}

function shouldTransitionToThirdRound(gameScreen) {
  return gameScreen.currentRound === 20 && gameScreen.currentScreen === 'secondRoundScreen';
}

function transitionToThirdRound(gameScreen) {
  gameScreen.secondRoundGroup.destroy();
  addThirdRoundGroup(gameScreen);
  gameScreen.currentScreen = 'thirdRoundScreen';
  gameScreen.currentRound = 21;
  updateRoundCounterText(gameScreen);
}

function shouldFinishGame(gameScreen) {
  return gameScreen.currentRound === 31 && gameScreen.currentScreen === 'thirdRoundScreen';
}

function finishGame(gameScreen) {
  gameScreen.timer.stopTimer();
  gameScreen.thirdRoundGroup.destroy();
  gameScreen.currentRound = 1;
  GameHelpers.showWellDoneThenFinal(gameScreen);
}
