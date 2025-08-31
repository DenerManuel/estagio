import { HomeScreen } from "../../screens/home-screen/HomeScreen.js";
import { CategoriesScreen } from "../../screens/categories-screen/CategoriesScreen.js";

export async function createScreens(categoriesScreenCards, categories) {
  const screens = {
    homeScreen: new HomeScreen(categories[0]),
    categoriesScreen: new CategoriesScreen(categoriesScreenCards),
  };
  return screens;
}
