import { App } from '../../../../app/App.js';
import { reviewScreenPositions } from '../../../screens-components-positions/review-screen/review-screen-components-positions.js';

export function changeComponentsPositions(components) {
  const IMAGE_CONTAINER_POSITIONS = reviewScreenPositions.imageContainer.mobile;
  const PREVIOUS_BUTTON_POSITIONS = reviewScreenPositions.previousButton.mobile;
  const NEXT_BUTTON_POSITIONS = reviewScreenPositions.nextButton.mobile;
  const WORD_CONTAINER_POSITIONS = reviewScreenPositions.wordContainer.mobile;
  const WORD_TEXT_POSITIONS = reviewScreenPositions.wordText.mobile;
  const TOGGLE_BUTTON_POSITIONS = reviewScreenPositions.toggleButton.mobile;
  const SOUND_BUTTON_POSITIONS = reviewScreenPositions.soundButton.mobile;
  const FOOTER_CONTAINER_POSITIONS = reviewScreenPositions.footerContainer.mobile;
  const FOOTER_TITLE_POSITIONS = reviewScreenPositions.footerTitle.mobile;
  const FOOTER_QUANTITY_POSITIONS = reviewScreenPositions.footerQuantity.mobile;
  const BACK_BUTTON_POSITIONS = {x: 20, y: 20};

  components.imageContainer.position.set(IMAGE_CONTAINER_POSITIONS.x, IMAGE_CONTAINER_POSITIONS.y);
  components.previousButton.position.set(PREVIOUS_BUTTON_POSITIONS.x, PREVIOUS_BUTTON_POSITIONS.y);
  components.nextButton.position.set(NEXT_BUTTON_POSITIONS.x, NEXT_BUTTON_POSITIONS.y);
  components.wordContainer.position.set(WORD_CONTAINER_POSITIONS.x, WORD_CONTAINER_POSITIONS.y);
  components.wordText.position.set(WORD_TEXT_POSITIONS.x, WORD_TEXT_POSITIONS.y);
  components.toggleButton.position.set(TOGGLE_BUTTON_POSITIONS.x, TOGGLE_BUTTON_POSITIONS.y);
  components.soundButton.position.set(SOUND_BUTTON_POSITIONS.x, SOUND_BUTTON_POSITIONS.y);
  components.footerContainer.position.set(
    FOOTER_CONTAINER_POSITIONS.x,
    FOOTER_CONTAINER_POSITIONS.y
  );
  components.footerTitle.position.set(FOOTER_TITLE_POSITIONS.x, FOOTER_TITLE_POSITIONS.y);
  components.footerQuantity.position.set(FOOTER_QUANTITY_POSITIONS.x, FOOTER_QUANTITY_POSITIONS.y);
  components.backButton.position.set(BACK_BUTTON_POSITIONS.x, BACK_BUTTON_POSITIONS.y);
}
