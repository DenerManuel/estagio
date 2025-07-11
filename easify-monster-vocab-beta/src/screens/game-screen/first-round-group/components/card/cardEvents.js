export function configureCardEvents(firstRoundGroupInstance) {
  const cards = firstRoundGroupInstance.cards;
  const itemName = firstRoundGroupInstance.itemName;

  cards.forEach((card) => {
    card.off('pointertap');
    card.on('pointertap', () => {
      if (card.item.name === itemName) {
        firstRoundGroupInstance.emit('correct');
        if (firstRoundGroupInstance.currentRound != 10) {
          firstRoundGroupInstance._continueGame();
        }
      } else {
        firstRoundGroupInstance.emit('error'); // <-- Adicione isso!
      }
    });
  })
}