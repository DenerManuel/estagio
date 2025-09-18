import { gameScreenPositions } from '../../../screens-components-positions/game-screen/game-screen-components-position.js';
import { gameScreenStyles } from '../../../screens-components-styles/game-screen/game-screen-components-styles.js';

function positionRoundCounter(roundCounter) {
  const { roundCounterContainer, roundCounterText } = gameScreenPositions;
  roundCounter.position.set(roundCounterContainer.mobile.x, roundCounterContainer.mobile.y);
  roundCounter.roundCounterText.position.set(roundCounterText.mobile.x, roundCounterText.mobile.y);
}

function positionTimer(timer) {
  const { timer: timerPosition } = gameScreenPositions;
  timer.position.set(timerPosition.mobile.x, timerPosition.mobile.y);
}

function positionScore(score) {
  const { score: scorePosition } = gameScreenPositions;
  score.position.set(scorePosition.mobile.x, scorePosition.mobile.y);

  const SCORE_TEXT_POSITIONS = {
    x: gameScreenStyles.score.mobile.width / 2,
    y: gameScreenStyles.score.mobile.height / 2,
  };
  score.scoreText.position.set(SCORE_TEXT_POSITIONS.x, SCORE_TEXT_POSITIONS.y);
}

function positionHeartSprites(heartSprites) {
  heartSprites.forEach((heart, index) => {
    if (!heart.transform) return;
    const HEART_POSITIONS = gameScreenPositions.heart.mobile(index);
    heart.position.set(HEART_POSITIONS.x, HEART_POSITIONS.y);
  });
}

function positionBackButton(backButton) {
  const BACK_BUTTON_POSITIONS = { x: 20, y: 20 };
  backButton.position.set(BACK_BUTTON_POSITIONS.x, BACK_BUTTON_POSITIONS.y);
}

export function changeComponentsPositions(components) {
  const { roundCounter, timer, score, heartSprites, backButton } = components;

  if (roundCounter && roundCounter.transform) {
    positionRoundCounter(roundCounter);
  }
  if (timer && timer.transform) {
    positionTimer(timer);
  }
  if (score && score.transform) {
    positionScore(score);
  }
  if (heartSprites) {
    positionHeartSprites(heartSprites);
  }
  if (backButton && backButton.transform) {
    positionBackButton(backButton);
  }
}
