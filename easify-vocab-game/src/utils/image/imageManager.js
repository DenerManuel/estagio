import { setImageSize } from "./imageSize.js";
import { positionImage } from "./imagePosition.js";
import { applyRoundedMask } from "./imageRoundedMask.js";

export function configureImage(images, imageContainer, imageOptions) {
  images.forEach(image => {
    setImageSize(image, imageOptions);
    positionImage(image, imageOptions);
    applyRoundedMask(image, imageContainer, imageOptions)
  });
  return images
}