export function configureCardEvents(firstRoundGroupInstance) {
  const cards = firstRoundGroupInstance.cards;
  const itemName = firstRoundGroupInstance.itemName;

  cards.forEach((card) => {
    card.off('click');
    card.on('click', () => {
      if (card.item.name === itemName) {
        firstRoundGroupInstance.emit('correct');
        if (firstRoundGroupInstance.currentRound != 10) {
          firstRoundGroupInstance._continueGame();
        }
      }
    });
  })
}