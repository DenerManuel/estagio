export function configureImage(images, imageContainer, borderRadius = 38) {
  images.forEach(image => {
    _setImageSize(image, imageContainer);
    _centerImage(image, imageContainer);
    _applyRoundedMask(image, imageContainer, borderRadius)
  });
  return images
}

const _setImageSize = (image, imageContainer) => {
  const containerWidth = imageContainer.settings.width - 4;
  const containerHeight = imageContainer.settings.height - 4;
  image.width = containerWidth;
  image.height = containerHeight;
}
const _centerImage = (image, imageContainer) => {
  const containerWidth = imageContainer.settings.width;
  const containerHeight = imageContainer.settings.height;

  image.anchor.set(0.5);
  image.position.set(containerWidth / 2, containerHeight / 2);
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