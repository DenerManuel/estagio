export function getAvailableNames(allNames, fixedCards) {
  return allNames.filter(n => !fixedCards.includes(n));
};

export const determineContainers = (currentRound, cards, allNames) => {
  return (currentRound === 19 && cards.length > 0)
    ? getLastRoundContainers(cards, allNames)
    : getUniqueRandomNames(cards, 2);
};

const getLastRoundContainers = (cards, allNames) => {
  const containerName1 = cards[0];
  const availableForContainer2 = allNames.filter(n => n !== containerName1);
  const containerName2 = getUniqueRandomNames(availableForContainer2, 1)[0] || containerName1;
  return [containerName1, containerName2];
};