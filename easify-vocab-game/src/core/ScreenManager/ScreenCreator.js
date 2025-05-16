import { HomeScreen } from "../../screens/HomeScreen/HomeScreen.js";
import { CategoriesScreen } from "../../screens/CategoriesScreen/CategoriesScreen.js";
import { ReviewScreen } from "../../screens/ReviewScreen/ReviewScreen.js";
import { PreGameScreen } from "../../screens/PreGameScreen/PreGameScreen.js";

export function createScreens(app, gameCategories) {
  const screens = {
    homeScreen: new HomeScreen(app),
    categoriesScreen: new CategoriesScreen(app, gameCategories),
    reviewScreen: new ReviewScreen(app, gameCategories[0]),
    preGameScreen: new PreGameScreen(app, gameCategories[0])
  };
  return screens;
}