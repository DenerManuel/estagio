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

export function updateWord(itemName, visibleText, wordText) {
  if (visibleText) {
    wordText.text = itemName;
    return wordText.text;
  } else {
    const currentName = itemName;
    return currentName;
  }
}

export function updateFooter(footerTitle, footerQuantity, category, currentIndex) {
  const ITEM_NUMBER = currentIndex + 1;
  const TOTAL_ITEMS = category.items.length;

  footerTitle.text = `${category.title}`;
  footerQuantity.text = `${ITEM_NUMBER} / ${TOTAL_ITEMS}`
}