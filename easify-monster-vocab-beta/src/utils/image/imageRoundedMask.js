export function applyRoundedMask(image, imageContainer, imageOptions) {
  const mask = _createMask(imageOptions)
  image.mask = mask;
  imageContainer.addChild(mask)
}
const _createMask = (imageOptions) => {
  const mask = new PIXI.Graphics();
  mask.beginFill(0xFFFFFF);
  mask.drawRoundedRect(0, 0, imageOptions.maskWidth, imageOptions.maskHeight, imageOptions.borderRadius);
  mask.endFill();
  mask.position.set(imageOptions.maskHorizontalPosition, imageOptions.maskVerticalPosition);

  return mask
}

const _applyRoundedMask = (image, imageContainer, borderRadius) => {
  const containerWidth = imageContainer.settings.width - 4;
  const containerHeight = imageContainer.settings.height - 4;

  const mask = new PIXI.Graphics();
  mask.beginFill(0xFFFFFF);
  mask.drawRoundedRect(0, 0, containerWidth, containerHeight, borderRadius);
  mask.endFill();

  mask.position.set(2, 2);
  image.mask = mask;
  imageContainer.addChild(mask)
}