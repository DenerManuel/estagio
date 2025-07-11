import { HomeScreen } from "../../screens/home-screen/home-screen.js";
import { CategoriesScreen } from "../../screens/categories-screen/categories-screen.js";
import { ReviewScreen } from "../../screens/review-screen/review-screen.js";
import { PreGameScreen } from "../../screens/pre-game-screen/PreGameScreen.js";

export function createScreens(app, gameCategories, categoriesScreenCards) {
  const screens = {
    homeScreen: new HomeScreen(app),
    categoriesScreen: new CategoriesScreen(app, categoriesScreenCards),
    reviewScreen: new ReviewScreen(app, gameCategories[0]),
    preGameScreen: new PreGameScreen(app, gameCategories[0]), 
  };
  return screens;
}