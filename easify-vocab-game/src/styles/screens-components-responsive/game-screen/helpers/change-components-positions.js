import { gameScreenPositions } from '../../../screens-components-positions/game-screen/game-screen-components-position.js';
import { gameScreenStyles } from '../../../screens-components-styles/game-screen/game-screen-components-styles.js';

export function changeComponentsPositions(components) {
  const ROUND_COUNTER_CONTAINER_POSITIONS = gameScreenPositions.roundCounterContainer.mobile;
  const ROUND_COUNTER_TEXT_POSITIONS = gameScreenPositions.roundCounterText.mobile;
  const TIMER_POSITIONS = gameScreenPositions.timer.mobile;
  const SCORE_POSITIONS = gameScreenPositions.score.mobile;
  const SCORE_TEXT_POSITIONS = {
    x: gameScreenStyles.score.mobile.width / 2,
    y: gameScreenStyles.score.mobile.height / 2,
  };
  const BACK_BUTTON_POSITIONS = { x: 20, y: 20 };

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
