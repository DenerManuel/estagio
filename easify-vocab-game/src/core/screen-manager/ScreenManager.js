import { App } from "../../app/App.js";
import { createScreens } from './screenCreator.js';
import { ReviewScreen } from '../../screens/review-screen/ReviewScreen.js';
import { createGameScreen } from './gameScreenManager.js';
import { createPreGameScreen } from './preGameScreenManager.js';


export class ScreenManager {
  static instance = null;

  static getInstance() {
    if (!ScreenManager.instance) {
      ScreenManager.instance = new ScreenManager();
    }
    return ScreenManager.instance;
  }

  app = null
  categories = null
  currentScreen = null
  screens = {}

  constructor(categories, categoriesScreenCards) {
    if (ScreenManager.instance) {
      return ScreenManager.instance;
    }

    this.app = App.getInstance()
    this.categories = categories;
    this.preloadScreens(categoriesScreenCards, categories)
    ScreenManager.instance = this;
  }

  async preloadScreens(categoriesScreenCards, categories) {
    this.screens = await createScreens(categoriesScreenCards, categories);
  }

  displayScreen(screenName, category = null, gameMode = null) {
    this._removeCurrentScreen();

    if (screenName === 'reviewScreen' && category) {
      this._createReviewScreen(category);
    } else if (screenName === 'preGameScreen') {
      this._createPreGameScreen(category);
    } else if (screenName === 'gameScreen') {
      this._createGameScreen(category, gameMode);
    }
    this._displayNewScreen(screenName);
  }

  _removeCurrentScreen() {
    if (this.currentScreen) {
      this.app.stage.removeChild(this.currentScreen);
      this.currentScreen = null;
    }
  }

  _displayNewScreen(screenName) {
    this.currentScreen = this.screens[screenName];
    this.app.stage.addChild(this.currentScreen);
  }

  _createReviewScreen(gameCategory) {
    this.screens.reviewScreen = new ReviewScreen(gameCategory);
  }

  _createPreGameScreen(gameCategory) {
    this.screens.preGameScreen = createPreGameScreen(this, gameCategory);
  }

  _createGameScreen(gameCategory, gameMode) {
    this.screens.gameScreen = createGameScreen(this, gameCategory, gameMode);
  }
}
