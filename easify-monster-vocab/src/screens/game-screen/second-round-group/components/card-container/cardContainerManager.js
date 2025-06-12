import { CustomContainer } from "../../../../../components/container/CustomContainer.js";

export function createCardContainer(appContainer) {
  return new CustomContainer(appContainer, {
    width: 170,
    height: 170,
    backgroundColor: 0xFFF8DC,
    borderColor: 0xFB7302,
    borderWidth: 5,
    borderRadius: 40,
    hover: false
  });
}

export function positionCardContainer(cardContainer, index, currentRound) {
  if (currentRound <= 13) {
    cardContainer.x = 570;
    cardContainer.y = 120 + index * 220;
  } else if (currentRound <= 19) {
    cardContainer.x = 270 + index * 275
    cardContainer.y = 335;
  }
}