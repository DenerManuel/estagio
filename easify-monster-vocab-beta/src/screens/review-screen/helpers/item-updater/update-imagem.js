export function updateImage(imageContainer, images, currentIndex) {
  const image = images[currentIndex]

  _removeCurrentImage(imageContainer)
  _addNewImage(imageContainer, image)
}
const _removeCurrentImage = (imageContainer) => {
  const existingImage = imageContainer.getChildByName('currentImage');
  if (existingImage) {
    imageContainer.removeChild(existingImage);
  }
}
const _addNewImage = (imageContainer, image) => {
  image.name = 'currentImage';
  imageContainer.addChild(image)
}