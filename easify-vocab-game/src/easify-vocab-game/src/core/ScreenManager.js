import { HomeScreen } from '../screens/HomeScreen/HomeScreen.js';
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

  displayScreen(screenName, category = null) {
    this._removeCurrentScreen();

    if (screenName === 'reviewScreen' && category) {
      // Recria a ReviewScreen com a categoria selecionada
      this.screens.reviewScreen = new ReviewScreen(this.app, category);
      const backButton = this.screens.reviewScreen.addBackButton();

      // Configura o evento de clique do botão de voltar
      backButton.on('click', () => {
        this.app.screenManager.displayScreen('categoriesScreen', { context: 'review' });
      });
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
}