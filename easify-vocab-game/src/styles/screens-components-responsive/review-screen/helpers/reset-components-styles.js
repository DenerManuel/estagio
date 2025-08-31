import { App } from '../../../../app/App.js';
import { reviewScreenPositions } from '../../../screens-components-positions/review-screen/review-screen-components-positions.js';
import { reviewScreenStyles } from '../../../screens-components-styles/reviewScreen/review-screen-components-styles.js';

export function resetComponentsStyles(components) {
  components.imageContainer.updateStyle(reviewScreenStyles.imageContainer.desktop);
  components.previousButton.updateStyle(reviewScreenStyles.navigationButtons.desktop);
  components.nextButton.updateStyle(reviewScreenStyles.navigationButtons.desktop);
  components.wordContainer.updateStyle(reviewScreenStyles.wordContainer.desktop);
  components.wordText.style.fontSize = reviewScreenStyles.wordText.desktop.fontSize;
  components.toggleButton.updateStyle(reviewScreenStyles.toggleButton.desktop);
  components.soundButton.updateStyle(reviewScreenStyles.soundButton.desktop);
  components.footerContainer.updateStyle(reviewScreenStyles.footerContainer.desktop);
  components.footerTitle.style.fontSize = reviewScreenStyles.footerTitle.desktop.fontSize;
  components.footerQuantity.style.fontSize = reviewScreenStyles.footerQuantity.desktop.fontSize;

  resetComponentsPositions(components);
}

function resetComponentsPositions(components) {
  const IMAGE_CONTAINER_POSITIONS = reviewScreenPositions.imageContainer.desktop;
  const PREVIOUS_BUTTON_POSITIONS = reviewScreenPositions.previousButton.desktop;
  const NEXT_BUTTON_POSITIONS = reviewScreenPositions.nextButton.desktop;
  const WORD_CONTAINER_POSITIONS = reviewScreenPositions.wordContainer.desktop;
  const WORD_TEXT_POSITIONS = reviewScreenPositions.wordText.desktop;
  const TOGGLE_BUTTON_POSITIONS = reviewScreenPositions.toggleButton.desktop;
  const SOUND_BUTTON_POSITIONS = reviewScreenPositions.soundButton.desktop;
  const FOOTER_CONTAINER_POSITIONS = reviewScreenPositions.footerContainer.desktop;
  const FOOTER_TITLE_POSITIONS = reviewScreenPositions.footerTitle.desktop;
  const FOOTER_QUANTITY_POSITIONS = reviewScreenPositions.footerQuantity.desktop;
  const BACK_BUTTON_POSITIONS = {x: 20, y: App.getInstance().renderer.height - 70};

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
