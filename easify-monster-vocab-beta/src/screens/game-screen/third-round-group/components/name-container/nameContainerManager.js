import { CustomContainer } from '../../../../../components/container/CustomContainer.js';

export function createNameContainer(appContainer, nameText) {
  const nameContainer = new CustomContainer(appContainer, {
    width: 255,
    height: 80,
    backgroundColor: 0xFFF8DC,
    borderColor: 0xFB7302,
    textColor: 0x000001,
    borderWidth: 4,
    borderRadius: 35,
  });
  nameContainer.eventMode = 'dynamic';
  nameContainer.on("pointerover", () => {
    nameContainer.changeBorderColor(0x03BB85);
    nameContainer.addChild(nameText);
  })
  nameContainer.on("pointerout", () => {
    nameContainer.changeBorderColor(0xFB7302);
    nameContainer.addChild(nameText);
  })
  return nameContainer
}
export function positionNameContainer(nameContainer, index, verticalOffset = 0) {
  nameContainer.x = 430;
  nameContainer.y = (118 + index * 91) + verticalOffset;
}