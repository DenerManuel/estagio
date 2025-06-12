import { availableIndexes } from '../item-name/itemNameCreator.js';

export function getRandomCards(cards, quantity) {
  const availableCards = _getAvailableCards(cards);
  const guaranteedCard = _getRandomCardFromList(availableCards);
  const remainingCards = _getRemainingCards(cards, guaranteedCard);
  const otherCards = _getNRandomCards(remainingCards, quantity - 1);

  return [guaranteedCard, ...otherCards];
}
const _getAvailableCards = (cards) => {
  return cards.filter((card) => availableIndexes.includes(card.index));
}
const _getRandomCardFromList = (cards) => {
  const index = Math.floor(Math.random() * cards.length);
  return cards[index];
}
const _getRemainingCards = (cards, cardToExclude) => {
  return cards.filter((card) => card.index !== cardToExclude.index);
}
const _getNRandomCards = (cards, n) => {
  const shuffled = cards.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
};
