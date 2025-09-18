import { configureCardMovement, handleCardDrop } from '../../second-group-helpers.js';

export function configureSelectedCards(secondRoundGroupInstance) {
  secondRoundGroupInstance.selectedCards.forEach((card) => {
    card.name = card.item.name;
    card.removeAllListeners();

    configureCardMovement({
      app: secondRoundGroupInstance.app,
      card,
      dragTickerHandler: secondRoundGroupInstance._dragTickerHandler,
      onDrop: (card) => handleCardDrop(card, secondRoundGroupInstance),
    });
  });
}
