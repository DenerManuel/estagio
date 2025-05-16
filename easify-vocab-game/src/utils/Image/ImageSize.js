export function setImageSize (image, imageOptions) {
  const imageWidth = imageOptions.width; // imageContainer.settings.width - 50
  const imageHeight = imageOptions.height; // imageContainer.settings.height - 50
  
  image.width = imageWidth;
  image.height = imageHeight;
}