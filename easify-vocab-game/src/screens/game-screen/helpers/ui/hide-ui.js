export function hideUI(gameScreen) {
  if (gameScreen.firstRoundGroup) gameScreen.firstRoundGroup.visible = false;
  if (gameScreen.secondRoundGroup) gameScreen.secondRoundGroup.visible = false;
  if (gameScreen.thirdRoundGroup) gameScreen.thirdRoundGroup.visible = false;
  if (gameScreen.roundCounter) gameScreen.roundCounter.visible = false;
  if (gameScreen.score) gameScreen.score.visible = false;
  if (gameScreen.timer) gameScreen.timer.visible = false;
  if (gameScreen.heartSprites) gameScreen.heartSprites.forEach((h) => (h.visible = false));
  if (gameScreen.backButton) gameScreen.backButton.visible = false;
}
