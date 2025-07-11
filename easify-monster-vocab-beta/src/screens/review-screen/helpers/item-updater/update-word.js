export function updateWord(itemName, visibleText, wordText) {
  if (visibleText) {
    wordText.text = itemName;
    return wordText.text;
  } else {
    const currentName = itemName;
    return currentName;
  }
}