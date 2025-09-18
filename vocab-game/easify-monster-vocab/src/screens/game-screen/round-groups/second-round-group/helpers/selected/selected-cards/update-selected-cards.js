import { selectNRandomCards } from './select-n-random-cards.js';

export function updateSelectedCards(numberOfCards, secondRoundGroupInstance) {
  const cardsToAddCount = numberOfCards - secondRoundGroupInstance.selectedCards.length;

  if (cardsToAddCount <= 0) return;

  const newCards = selectNRandomCards(
    secondRoundGroupInstance.cards,
    cardsToAddCount,
    secondRoundGroupInstance.usedCards
  );

  // Adiciona os novos cards tanto à lista de cards na tela (selectedCards)
  // quanto à lista de cards já "em uso" (usedCards) para não serem selecionados novamente.
  secondRoundGroupInstance.selectedCards.push(...newCards);
  secondRoundGroupInstance.usedCards.push(...newCards);
}
