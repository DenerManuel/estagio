import { App } from '../../../../app/App.js';
import { gameScreenPositions } from '../../../screens-components-positions/game-screen/game-screen-components-position.js';
import { gameScreenStyles } from '../../../screens-components-styles/game-screen/game-screen-components-styles.js';

export function resetComponentsStyles(components) {
  components.roundCounter.updateStyle(gameScreenStyles.roundCounterContainer.desktop);
  components.roundCounter.roundCounterText.style.fontSize =
    gameScreenStyles.roundCounterText.desktop.fontSize;
  components.score.updateStyle(gameScreenStyles.score.desktop);
  components.score.scoreText.style.fontSize = gameScreenStyles.score.desktop.fontSize;
  if (components.heartSprites) {
    components.heartSprites.forEach((heart) => {
      heart.style.fontSize = gameScreenStyles.heart.desktop.fontSize;
    });
  }

  resetComponentsPositions(components);
}

function resetComponentsPositions(components) {
  const ROUND_COUNTER_CONTAINER_POSITIONS = gameScreenPositions.roundCounterContainer.desktop;
  const ROUND_COUNTER_TEXT_POSITIONS = gameScreenPositions.roundCounterText.desktop;
  const TIMER_POSITIONS = gameScreenPositions.timer.desktop;
  const SCORE_POSITIONS = gameScreenPositions.score.desktop;
  const SCORE_TEXT_POSITIONS = {
    x: gameScreenStyles.score.desktop.width / 2,
    y: gameScreenStyles.score.desktop.height / 2,
  };
  const BACK_BUTTON_POSITIONS = { x: 20, y: App.getInstance().renderer.height - 70 };

  components.roundCounter.position.set(
    ROUND_COUNTER_CONTAINER_POSITIONS.x,
    ROUND_COUNTER_CONTAINER_POSITIONS.y
  );
  components.roundCounter.roundCounterText.position.set(
    ROUND_COUNTER_TEXT_POSITIONS.x,
    ROUND_COUNTER_TEXT_POSITIONS.y
  );
  components.timer.position.set(TIMER_POSITIONS.x, TIMER_POSITIONS.y);
  components.score.position.set(SCORE_POSITIONS.x, SCORE_POSITIONS.y);
  components.score.scoreText.position.set(SCORE_TEXT_POSITIONS.x, SCORE_TEXT_POSITIONS.y);
  if (components.heartSprites) {
    components.heartSprites.forEach((heart, index) => {
      const HEART_POSITIONS = gameScreenPositions.heart.mobile(index);
      heart.position.set(HEART_POSITIONS.x, HEART_POSITIONS.y);
    });
  }
  components.backButton.position.set(BACK_BUTTON_POSITIONS.x, BACK_BUTTON_POSITIONS.y);
}
