let availableIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export function getRandomItem(itemsList) {
  const itemIndex = _getRandomIndex();
  const item = itemsList[itemIndex]
  
  return item;
}
const _getRandomIndex = () => {
  const randomIndexInTheListOfAvailable = Math.floor(Math.random() * availableIndex.length);
  const itemIndex = availableIndex[randomIndexInTheListOfAvailable]
  _updateAvailableItems(randomIndexInTheListOfAvailable)

  return itemIndex
}
const _updateAvailableItems = (index) => {
  availableIndex.splice(index, 1)
}

export function restoreAvailableItems() {
  availableIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}