export function showUI(gameScreen) {
  if (gameScreen.backButton) gameScreen.backButton.visible = true;
  if (gameScreen.roundCounter) gameScreen.roundCounter.visible = true;
  if (gameScreen.textoPontuacao) gameScreen.textoPontuacao.visible = true;
  if (gameScreen.timer) gameScreen.timer.visible = true;
  if (gameScreen.heartSprites) gameScreen.heartSprites.forEach((h) => (h.visible = true));
}
