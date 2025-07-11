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
    cardContainer.x = 495;
    cardContainer.y = 35 + index * 220;
  } else if (currentRound <= 19) {
    cardContainer.x = 195 + index * 275
    // cardContainer.x = 200 + index * 275
    cardContainer.y = 260;
  }
}