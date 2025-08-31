export function updateHearts(gameScreen) {
  if (gameScreen.mode !== 'heart') return;
  gameScreen.heartSprites.forEach((heart, i) => {
    heart.visible = i < gameScreen.heartsCount;
  });
}
