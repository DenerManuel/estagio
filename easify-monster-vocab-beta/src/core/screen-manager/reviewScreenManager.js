import { ReviewScreen } from "../../screens/review-screen/review-screen.js";

export function createReviewScreen(app, category) {
  return new ReviewScreen(app, category);
}
export function configureReviewScreenBackButton(screenManager) {
  const backButton = screenManager.screens.reviewScreen.addBackButton();
  backButton.on('pointertap', () => {
    screenManager.displayScreen('categoriesScreen', { context: 'review' });
  });
}