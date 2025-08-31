import { getUniqueRandomNames } from "../../../third-round-group/components/item-names/randomNames.js";

export function determineQuantityCardsOnScreen(currentRound) {
  if (currentRound <= 11) return 2;
  else if (currentRound <= 13) return 3;
  else if (currentRound <= 16) return 4;
  else if (currentRound === 17) return 3;
  else if (currentRound === 18) return 2;
  else if (currentRound === 19) return 1;
  return 0;
};

export function getNames(availableNames, currentRound, currentCardNames, index) {
  let names;

  if (currentRound === 10) {
    return getUniqueRandomNames(availableNames, 2)
  } else if (currentRound === 12 || currentRound === 14) {
    names = getUniqueRandomNames(availableNames, 2)
  } else {
    names = getUniqueRandomNames(availableNames, 1)
  }

  if (names.length === 1) {
    currentCardNames[index] = names[0]
  } else {
    currentCardNames[index] = names[0]
    currentCardNames.push(names[1])
  }

  return currentCardNames
}

export const drawCards = (availableNames, cardsOnScreen) => {
  return getUniqueRandomNames(availableNames, cardsOnScreen);
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
