import { createScreens } from './ScreenCreator.js';
import { configureReviewScreenBackButton, createReviewScreen } from './ReviewScreenManager.js';
import { configurePreGameScreenButtons, createPreGameScreen } from './PreGameScreenManager.js';

export class ScreenManager {
  constructor(app, categories) {
    this.app = app;
    this.categories = categories
    this.screens = {};
    this.currentScreen = null;
  }

  preloadScreens(gameCategories = []) {
    this.screens = createScreens(this.app, gameCategories);
  }

  displayScreen(screenName, category = null) {
    this._removeCurrentScreen();

    if (screenName === 'reviewScreen' && category) {
      this._createReviewScreen(category);
    } else if (screenName === 'preGameScreen') {
      this._createPreGameScreen(category);
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

  _createReviewScreen(category) {
    this.screens.reviewScreen = createReviewScreen(this.app, category);
    configureReviewScreenBackButton(this);
  }
  _createPreGameScreen(gameCategory) {
    this.screens.preGameScreen = createPreGameScreen(this, gameCategory);
    configurePreGameScreenButtons(this);
  }
}