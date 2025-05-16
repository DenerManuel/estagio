import { setImageSize } from "./ImageSize.js";
import { positionImage } from "./ImagePosition.js";
import { applyRoundedMask } from "./ImageRoundedMask.js";

export function _configureImage(images, imageContainer, imageOptions) {
  images.forEach(image => {
    setImageSize(image, imageOptions);
    positionImage(image, imageOptions);
    applyRoundedMask(image, imageContainer, imageOptions)
  });
  return images
}