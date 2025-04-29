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

  displayScreen(screenName, sourceScreen, category = null) {
    this._removeCurrentScreen(sourceScreen);

    if (screenName === 'reviewScreen' && category) {
      // Recria a ReviewScreen com a categoria selecionada
      this.screens.reviewScreen = new ReviewScreen(this.app, category);
      const backButton = this.screens.reviewScreen.addBackButton();
  
      // Configura o evento de clique do botão de voltar
      backButton.on('click', () => {
        this.app.screenManager.displayScreen('categoriesScreen', 'reviewScreen', { context: 'review' });
      });
    }

    this._displayNewScreen(screenName);
  }

  _removeCurrentScreen(sourceScreen) {
    if (sourceScreen) {
      this.currentScreen = this.screens[sourceScreen];
      this.app.stage.removeChild(this.currentScreen);
    }
  }
  _displayNewScreen(screenName) {
    this.app.stage.addChild(this.screens[screenName]);
  }
}