export function positionImage(image, imageOptions) {
  const horizontalPosition = imageOptions.horizontalPosition;
  const verticalPosition = imageOptions.verticalPosition;

  image.anchor.set(0.5);
  image.position.set(horizontalPosition, verticalPosition);
}

const _positionImage = (image, imageContainer) => {
  const containerWidth = imageContainer.settings.width;
  const containerHeight = imageContainer.settings.height - 20;

  image.anchor.set(0.5);
  image.position.set(containerWidth / 2, containerHeight / 2);
}