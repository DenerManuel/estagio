import { preGameScreenStyles } from '../../../screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export function changeComponentsStyles(components) {
  components.title.style.fontSize = preGameScreenStyles.title.mobile.fontSize;
  components.previousButton.updateStyle(preGameScreenStyles.navigationButtons.mobile);
  components.nextButton.updateStyle(preGameScreenStyles.navigationButtons.mobile);
  components.playButton.updateStyle(preGameScreenStyles.playButton.mobile);
  components.chooseButton.updateStyle(preGameScreenStyles.chooseButton.mobile);
  components.configButton.updateStyle(preGameScreenStyles.configButton.mobile);
  components.itemCards.forEach((itemCard) => {
    itemCard.updateStyle(preGameScreenStyles.itemCard.mobile);
    itemCard.changeImageSize(preGameScreenStyles.itemCard.mobile)
  });
  components.itemNames.forEach((itemName) => {
    itemName.updateStyle(preGameScreenStyles.itemName.mobile);
  });
}
