import { CustomContainer } from '../../../../../../components/container/CustomContainer.js';
import { calculateRightCenteredXPosition } from '../../../../../../utils/position/calculateCenteredPosition.js';

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
    nameContainer.x = 460;
    nameContainer.y = 160 + index * 220;
  } else if (currentRound <= 19) {
    nameContainer.x = 160 + index * 275
    // nameContainer.x = 170 + index * 275
    nameContainer.y = 360;
  }
}
