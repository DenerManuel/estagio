export let availableIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function getRandomName(selectedCards) {
  const availableCards = _getAvailableCards(selectedCards);
  const randomIndex = _getRandomIndex(availableCards);
  const randomName = availableCards[randomIndex].item.name;
  const randomCardIndex = availableCards[randomIndex].index;
  _updateAvailableIndexes(randomCardIndex);

  return randomName;
}

export const resetAvailableIndexes = () => {
  availableIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
}

const _getAvailableCards = (selectedCards) => {
  const availableCards = selectedCards.filter((card) => availableIndexes.includes(card.index));
  return availableCards;
}
const _getRandomIndex = (availableCards) => {
  return Math.floor(Math.random() * availableCards.length);
}
const _updateAvailableIndexes = (indexSelected) => {
  const index = availableIndexes.indexOf(indexSelected);
  availableIndexes.splice(index, 1);
}