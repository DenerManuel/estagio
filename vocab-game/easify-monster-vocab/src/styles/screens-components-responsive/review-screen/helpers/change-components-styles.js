import { reviewScreenStyles } from '../../../screens-components-styles/reviewScreen/review-screen-components-styles.js';

export function changeComponentsStyles(components) {
  components.imageContainer.updateStyle(reviewScreenStyles.imageContainer.mobile);
  components.previousButton.updateStyle(reviewScreenStyles.navigationButtons.mobile);
  components.nextButton.updateStyle(reviewScreenStyles.navigationButtons.mobile);
  components.wordContainer.updateStyle(reviewScreenStyles.wordContainer.mobile);
  components.wordText.style.fontSize = reviewScreenStyles.wordText.mobile.fontSize;
  components.toggleButton.updateStyle(reviewScreenStyles.toggleButton.mobile);
  components.soundButton.updateStyle(reviewScreenStyles.soundButton.mobile);
  components.footerContainer.updateStyle(reviewScreenStyles.footerContainer.mobile);
  components.footerTitle.style.fontSize = reviewScreenStyles.footerTitle.mobile.fontSize;
  components.footerQuantity.style.fontSize = reviewScreenStyles.footerQuantity.mobile.fontSize;
}
