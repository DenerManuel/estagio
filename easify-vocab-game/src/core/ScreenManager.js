import { HomeScreen } from '../screens/HomeScreen.js';
import { CategoriesScreen } from '../screens/CategoriesScreen/CategoriesScreen.js';
import { ReviewScreen } from '../screens/ReviewScreen/ReviewScreen.js';

export class ScreenManager {
  constructor(app) {
    this.app = app;
    this.screens = {};
    this.currentScreen = null;
  }

  preloadScreens(gameCategories = []) {
    this.screens = {
      homeScreen: new HomeScreen(this.app),
      categoriesScreen: new CategoriesScreen(this.app, gameCategories),
      reviewScreen: new ReviewScreen(this.app, gameCategories[0]),
    }
  }

  loadScreen(screenName, sourceScreen) {
    this._removeCurrentScreen(sourceScreen);
    this._addNewScreen(screenName);
  }

  _removeCurrentScreen(sourceScreen) {
    if (sourceScreen) {
      this.currentScreen = this.screens[sourceScreen];
      this.app.stage.removeChild(this.currentScreen);
    }
  }
  _addNewScreen(screenName) {
    this.app.stage.addChild(this.screens[screenName]);
  }
}