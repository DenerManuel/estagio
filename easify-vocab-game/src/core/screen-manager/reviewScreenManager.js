import { ReviewScreen } from "../../screens/review-screen/ReviewScreen.js";

export function createReviewScreen(category) {
  return new ReviewScreen(category);
}