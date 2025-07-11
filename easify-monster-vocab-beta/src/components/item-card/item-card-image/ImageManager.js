import { configureImage } from "../../../utils/image/imageManager.js";

export function configureItemCardImage(images, imageContainer) {
  const imageOptions = _createImageOptions(imageContainer);
  configureImage(images, imageContainer, imageOptions)

  return images
}
const _createImageOptions = (imageContainer) => {
  return {
    width: imageContainer.settings.width - 4,
    height: imageContainer.settings.height - 4,
    horizontalPosition: imageContainer.settings.width / 2,
    verticalPosition: imageContainer.settings.height / 2,
    maskWidth: imageContainer.settings.width - 4,
    maskHeight: imageContainer.settings.height - 4,
    maskHorizontalPosition: 2,
    maskVerticalPosition: 2,
    borderRadius: 38
  }
}