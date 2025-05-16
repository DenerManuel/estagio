import { ReviewScreen } from "../../screens/ReviewScreen/ReviewScreen.js";

export function createReviewScreen(app, category) {
  return new ReviewScreen(app, category);
}
export function configureReviewScreenBackButton(screenManager) {
  const backButton = screenManager.screens.reviewScreen.addBackButton();
  backButton.on('click', () => {
    screenManager.displayScreen('categoriesScreen', { context: 'review' });
  });
}