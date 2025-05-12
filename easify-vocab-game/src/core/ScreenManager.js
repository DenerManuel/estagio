import { HomeScreen } from '../screens/HomeScreen/HomeScreen.js';
import { CategoriesScreen } from '../screens/CategoriesScreen/CategoriesScreen.js';
import { ReviewScreen } from '../screens/ReviewScreen/ReviewScreen.js';
import { PreGameScreen } from '../screens/GameScreen/PreGameScreen/PreGameScreen.js';

export class ScreenManager {
  constructor(app, categories) {
    this.app = app;
    this.categories = categories
    this.screens = {};
    this.currentScreen = null;
  }

  preloadScreens(gameCategories = []) {
    this.screens = {
      homeScreen: new HomeScreen(this.app),
      categoriesScreen: new CategoriesScreen(this.app, gameCategories),
      reviewScreen: new ReviewScreen(this.app, gameCategories[0]),
      // preGameScreen: new PreGameScreen(this.app, gameCategories[0])
    }
  }

  displayScreen(screenName, category = null) {
    this._removeCurrentScreen();

    if (screenName === 'reviewScreen' && category) {
      this._createReviewScreen(category);
    }
    if (screenName === 'preGameScreen') {
      // category = getRandomCategory()
      this._createPreGameScreen();
    }

    this._displayNewScreen(screenName);
  }

  _removeCurrentScreen() {
    if (this.currentScreen) {
      this.app.stage.removeChild(this.currentScreen);
      this.currentScreen = null; // Limpa a referência à tela atual
    }
  }
  _displayNewScreen(screenName) {
    this.currentScreen = this.screens[screenName];
    this.app.stage.addChild(this.currentScreen);
  }

  _createReviewScreen(category) {
    this.screens.reviewScreen = new ReviewScreen(this.app, category);
    const backButton = this.screens.reviewScreen.addBackButton();

    backButton.on('click', () => {
      this.displayScreen('categoriesScreen', { context: 'review' });
    });
  }
  _createPreGameScreen() {
    const category = this._getRandomCategory(this.categories)
    this.screens.preGameScreen = new PreGameScreen(this.app, category);
    const backButton = this.screens.preGameScreen.addBackButton();
    
    backButton.on('click', () => {
      this.displayScreen('homeScreen');
    });
  }
  _getRandomCategory(categories) {
    const randomIndex = Math.floor(Math.random() * categories.length);
    const category = categories[randomIndex]

    return category
  }
}