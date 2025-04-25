export function updateImage(imageContainer, images, currentIndex) {
  const image = images[currentIndex]
  
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