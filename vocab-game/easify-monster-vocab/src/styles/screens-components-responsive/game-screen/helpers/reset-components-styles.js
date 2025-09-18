import { App } from '../../../../app/App.js';
import { gameScreenPositions } from '../../../screens-components-positions/game-screen/game-screen-components-position.js';
import { gameScreenStyles } from '../../../screens-components-styles/game-screen/game-screen-components-styles.js';

export function resetComponentsStyles(components) {
  setRoundCounterStyles(components.roundCounter);
  setScoreStyles(components.score);
  setHeartSpritesStyles(components.heartSprites);

  resetComponentsPositions(components);
}

function setRoundCounterStyles(roundCounter) {
  if (!roundCounter.transform) return;
  roundCounter.updateStyle(gameScreenStyles.roundCounterContainer.desktop);
  roundCounter.roundCounterText.style.fontSize = gameScreenStyles.roundCounterText.desktop.fontSize;
}

function setScoreStyles(score) {
  if (!score.transform) return;
  score.updateStyle(gameScreenStyles.score.desktop);
  score.scoreText.style.fontSize = gameScreenStyles.score.desktop.fontSize;
}

function setHeartSpritesStyles(heartSprites) {
  if (!heartSprites) return;
  heartSprites.forEach((heart) => {
    heart.style.fontSize = gameScreenStyles.heart.desktop.fontSize;
  });
}

function resetComponentsPositions(components) {
  const {
    roundCounterContainer: { desktop: ROUND_COUNTER_CONTAINER_POSITIONS },
    roundCounterText: { desktop: ROUND_COUNTER_TEXT_POSITIONS },
    timer: { desktop: TIMER_POSITIONS },
    score: { desktop: SCORE_POSITIONS },
    heart,
  } = gameScreenPositions;

  const SCORE_TEXT_POSITIONS = {
    x: gameScreenStyles.score.desktop.width / 2,
    y: gameScreenStyles.score.desktop.height / 2,
  };
  const BACK_BUTTON_POSITIONS = { x: 20, y: App.getInstance().renderer.height - 70 };

  if (components.roundCounter.transform) {
    components.roundCounter.position.set(
      ROUND_COUNTER_CONTAINER_POSITIONS.x,
      ROUND_COUNTER_CONTAINER_POSITIONS.y
    );
    components.roundCounter.roundCounterText.position.set(
      ROUND_COUNTER_TEXT_POSITIONS.x,
      ROUND_COUNTER_TEXT_POSITIONS.y
    );
  }
  if (components.timer.transform) {
    components.timer.position.set(TIMER_POSITIONS.x, TIMER_POSITIONS.y);
  }
  if (components.score.transform) {
    components.score.position.set(SCORE_POSITIONS.x, SCORE_POSITIONS.y);
    components.score.scoreText.position.set(SCORE_TEXT_POSITIONS.x, SCORE_TEXT_POSITIONS.y);
  }
  if (components.heartSprites) {
    components.heartSprites.forEach((heart, index) => {
      if (!heart.transform) return;
      const [POSITION_X, POSITION_Y] = gameScreenPositions.heart.desktop(index);
      heart.position.set(POSITION_X, POSITION_Y);
    });
  }
  if (components.backButton.transform) {
    components.backButton.position.set(BACK_BUTTON_POSITIONS.x, BACK_BUTTON_POSITIONS.y);
  }
}
