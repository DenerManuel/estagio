export function positionRoundCounterText(roundCounterText, roundCounterContainer) {
  roundCounterText.anchor.set(0.5);
  roundCounterText.position.set(
    roundCounterContainer.settings.width / 2,
    roundCounterContainer.settings.height / 2
  );
}