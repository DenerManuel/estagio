import { gameScreenStyles } from '../../../screens-components-styles/game-screen/game-screen-components-styles.js';

export function changeComponentsStyles(components) {
  const { roundCounter, timer, score, heartSprites } = components;
  const {
    roundCounterContainer: roundCounterContainerStyle,
    roundCounterText: roundCounterTextStyle,
    timer: timerStyle,
    score: scoreStyle,
    heart: heartStyle,
  } = gameScreenStyles;

  // Aplica estilos para o contador de rodadas
  roundCounter.updateStyle(roundCounterContainerStyle.mobile);
  roundCounter.roundCounterText.style.fontSize = roundCounterTextStyle.mobile.fontSize;

  // Aplica estilos para o timer
  timer.style.fontSize = timerStyle.mobile.fontSize;

  // Aplica estilos para a pontuação
  score.updateStyle(scoreStyle.mobile);
  score.scoreText.style.fontSize = scoreStyle.mobile.fontSize;

  // Aplica estilos para os corações (vidas)
  if (heartSprites) {
    heartSprites.forEach((heart) => {
      heart.style.fontSize = heartStyle.mobile.fontSize;
    });
  }
}
