import { CustomContainer } from '../../../../../components/container/CustomContainer.js';

export function createNameContainer(appContainer) {
  return new CustomContainer(appContainer, {
    width: 245,
    height: 70,
    backgroundColor: 0xFFF8DC,
    borderColor: 0xFB7302,
    textColor: 0x000001,
    borderWidth: 5,
    borderRadius: 35,
  });
}

export function positionNameContainer(nameContainer, index, currentRound) {
  if (currentRound <= 13) {
    nameContainer.x = 570;
    nameContainer.y = 190 + index * 220;
  } else if (currentRound <= 19) {
    nameContainer.x = 270 + index * 275
    nameContainer.y = 405;
  }
}