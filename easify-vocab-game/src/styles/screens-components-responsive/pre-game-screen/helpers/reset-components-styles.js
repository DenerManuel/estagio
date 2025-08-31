import { App } from '../../../../app/App.js';
import { preGameScreenPositions } from '../../../screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';
import { preGameScreenStyles } from '../../../screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export function resetComponentsStyles(components) {
  components.title.style.fontSize = preGameScreenStyles.title.desktop.fontSize;
  components.previousButton.updateStyle(preGameScreenStyles.navigationButtons.desktop);
  components.nextButton.updateStyle(preGameScreenStyles.navigationButtons.desktop);
  components.playButton.updateStyle(preGameScreenStyles.playButton.desktop);
  components.chooseButton.updateStyle(preGameScreenStyles.chooseButton.desktop);
  components.configButton.updateStyle(preGameScreenStyles.configButton.desktop);
  components.itemCards.forEach((itemCard) => {
    itemCard.updateStyle(preGameScreenStyles.itemCard.desktop);
    itemCard.changeImageSize(preGameScreenStyles.itemCard.desktop);
  });
  components.itemNames.forEach((itemName) => {
    itemName.updateStyle(preGameScreenStyles.itemName.desktop);
  });

  resetComponentsPositions(components);
}

function resetComponentsPositions(components) {
  const TITLE_POSITIONS = preGameScreenPositions.title.desktop;
  const PREVIOUS_BUTTON_POSITIONS = preGameScreenPositions.previousButton.desktop;
  const NEXT_BUTTON_POSITIONS = preGameScreenPositions.nextButton.desktop;
  const PLAY_BUTTON_POSITIONS = preGameScreenPositions.playButton.desktop;
  const CHOOSE_BUTTON_POSITIONS = preGameScreenPositions.chooseButton.desktop;
  const CONFIG_BUTTON_POSITIONS = preGameScreenPositions.configButton.desktop;
  const BACK_BUTTON_POSITIONS = { x: 20, y: App.getInstance().renderer.height - 70 };

  components.title.position.set(TITLE_POSITIONS.x, TITLE_POSITIONS.y);
  components.previousButton.position.set(PREVIOUS_BUTTON_POSITIONS.x, PREVIOUS_BUTTON_POSITIONS.y);
  components.nextButton.position.set(NEXT_BUTTON_POSITIONS.x, NEXT_BUTTON_POSITIONS.y);
  components.playButton.position.set(PLAY_BUTTON_POSITIONS.x, PLAY_BUTTON_POSITIONS.y);
  components.chooseButton.position.set(CHOOSE_BUTTON_POSITIONS.x, CHOOSE_BUTTON_POSITIONS.y);
  components.configButton.position.set(CONFIG_BUTTON_POSITIONS.x, CONFIG_BUTTON_POSITIONS.y);
  components.backButton.position.set(BACK_BUTTON_POSITIONS.x, BACK_BUTTON_POSITIONS.y);
  components.itemCards.forEach((itemCard, index) => {
    const ITEM_CARD_POSITION = preGameScreenPositions.itemCard.desktop(index);

    itemCard.position.set(ITEM_CARD_POSITION.x, ITEM_CARD_POSITION.y);
  });
  components.itemNames.forEach((itemName, index) => {
    const ITEM_NAME_POSITION = preGameScreenPositions.itemNameContainer.desktop(index);
    const ITEM_NAME_TEXT_POSITION = preGameScreenPositions.itemNameText.desktop;

    itemName.position.set(ITEM_NAME_POSITION.x, ITEM_NAME_POSITION.y);
    itemName.text.position.set(ITEM_NAME_TEXT_POSITION.x, ITEM_NAME_TEXT_POSITION.y);
  });
}
