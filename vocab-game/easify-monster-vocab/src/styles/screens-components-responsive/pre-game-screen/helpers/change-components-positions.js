import { preGameScreenPositions } from '../../../screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';

export function changeComponentsPositions(components) {
  const TITLE_POSITIONS = preGameScreenPositions.title.mobile;
  const PREVIOUS_BUTTON_POSITIONS = preGameScreenPositions.previousButton.mobile;
  const NEXT_BUTTON_POSITIONS = preGameScreenPositions.nextButton.mobile;
  const PLAY_BUTTON_POSITIONS = preGameScreenPositions.playButton.mobile;
  const CHOOSE_BUTTON_POSITIONS = preGameScreenPositions.chooseButton.mobile;
  const CONFIG_BUTTON_POSITIONS = preGameScreenPositions.configButton.mobile;
  const BACK_BUTTON_POSITIONS = { x: 20, y: 20 };

  components.title.position.set(TITLE_POSITIONS.x, TITLE_POSITIONS.y);
  components.previousButton.position.set(PREVIOUS_BUTTON_POSITIONS.x, PREVIOUS_BUTTON_POSITIONS.y);
  components.nextButton.position.set(NEXT_BUTTON_POSITIONS.x, NEXT_BUTTON_POSITIONS.y);
  components.playButton.position.set(PLAY_BUTTON_POSITIONS.x, PLAY_BUTTON_POSITIONS.y);
  components.chooseButton.position.set(CHOOSE_BUTTON_POSITIONS.x, CHOOSE_BUTTON_POSITIONS.y);
  components.configButton.position.set(CONFIG_BUTTON_POSITIONS.x, CONFIG_BUTTON_POSITIONS.y);
  components.backButton.position.set(BACK_BUTTON_POSITIONS.x, BACK_BUTTON_POSITIONS.y);
  components.itemCards.forEach((itemCard, index) => {
    const ITEM_CARD_POSITION = preGameScreenPositions.itemCard.mobile(index);

    itemCard.position.set(ITEM_CARD_POSITION.x, ITEM_CARD_POSITION.y);
  });
  components.itemNames.forEach((itemName, index) => {
    const ITEM_NAME_POSITION = preGameScreenPositions.itemNameContainer.mobile(index);
    const ITEM_NAME_TEXT_POSITION = preGameScreenPositions.itemNameText.mobile;

    itemName.position.set(ITEM_NAME_POSITION.x, ITEM_NAME_POSITION.y);
    itemName.text.position.set(ITEM_NAME_TEXT_POSITION.x, ITEM_NAME_TEXT_POSITION.y);
  });
}
