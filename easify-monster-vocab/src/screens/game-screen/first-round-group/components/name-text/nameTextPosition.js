export function positionNameText(nameText, nameFieldContainer) {
  nameText.anchor.set(0.5);
  nameText.x = nameFieldContainer.width / 2;
  nameText.y = (nameFieldContainer.height / 2) - 3;
}