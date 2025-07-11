import { configureGameScreenButtons, createGameScreen } from './gameScreenManager.js';
import { configurePreGameScreenButtons, createPreGameScreen } from './preGameScreenManager.js';
import { configureReviewScreenBackButton, createReviewScreen } from './reviewScreenManager.js';
import { createScreens } from './screenCreator.js';

export class ScreenManager {
  constructor(app, categories) {
    this.app = app;
    this.categories = categories
    this.screens = {};
    this.currentScreen = null;
  }

  async preloadScreens(gameCategories = [], categoriesScreenCards) {
    this.screens = createScreens(this.app, gameCategories, categoriesScreenCards);
  }

  displayScreen(screenName, category = null) {
    this._removeCurrentScreen();

    if (screenName === 'reviewScreen' && category) {
      this._createReviewScreen(category);
    } else if (screenName === 'preGameScreen') {
      this._createPreGameScreen(category);
    } else if (screenName === 'gameScreen') {


      this._createGameScreen(category);
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
    this.screens.reviewScreen = createReviewScreen(this.app, gameCategory);
    configureReviewScreenBackButton(this);
  }
  _createPreGameScreen(gameCategory) {
    this.screens.preGameScreen = createPreGameScreen(this, gameCategory);
    configurePreGameScreenButtons(this);
  }
  _createGameScreen(gameCategory) {
    // Pegue o modo selecionado da preGameScreen
    const mode = this.screens.preGameScreen.selectedMode || 'score';
    this.screens.gameScreen = createGameScreen(this, gameCategory, mode);
    configureGameScreenButtons(this);
  }
  // 
}