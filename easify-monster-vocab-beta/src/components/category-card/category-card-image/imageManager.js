import { configureImage } from "../../../utils/image/ImageManager.js";

export function configureCategoryCardImage(images, imageContainer) {
  const imageOptions = _createImageOptions(imageContainer);
  configureImage(images, imageContainer, imageOptions)

  return images
}
const _createImageOptions = (imageContainer) => {
  return {
    width: imageContainer.settings.width - 40,
    height: imageContainer.settings.height - 40,
    horizontalPosition: imageContainer.settings.width / 2,
    verticalPosition: (imageContainer.settings.height - 20) / 2,
    maskWidth: imageContainer.settings.width - 4,
    maskHeight: imageContainer.settings.height - 4,
    maskHorizontalPosition: 0,
    maskVerticalPosition: 0,
    borderRadius: 50
  }
}