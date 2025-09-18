import { gameScreenStyles } from '../../../screens-components-styles/game-screen/game-screen-components-styles.js';

function applyRoundCounterStyles(roundCounter) {
  roundCounter.updateStyle(gameScreenStyles.roundCounterContainer.mobile);
  roundCounter.roundCounterText.style.fontSize = gameScreenStyles.roundCounterText.mobile.fontSize;
}

function applyScoreStyles(score) {
  score.updateStyle(gameScreenStyles.score.mobile);
  score.scoreText.style.fontSize = gameScreenStyles.score.mobile.fontSize;
}

function applyTimerStyles(timer) {
  timer.style.fontSize = gameScreenStyles.timer.mobile.fontSize;
}

function applyHeartSpritesStyles(heartSprites) {
  heartSprites.forEach((heart) => {
    heart.style.fontSize = gameScreenStyles.heart.mobile.fontSize;
  });
}

export function changeComponentsStyles(components) {
  const { roundCounter, timer, score, heartSprites } = components;

  if (roundCounter && roundCounter.transform) {
    applyRoundCounterStyles(roundCounter);
  }
  if (score && score.transform) {
    applyScoreStyles(score);
  }
  if (timer && timer.transform) {
    applyTimerStyles(timer);
  }
  if (heartSprites) {
    applyHeartSpritesStyles(heartSprites);
  }
}
