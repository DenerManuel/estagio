export class NavigationManager {
  constructor(screenManager) {
    this.screenManager = screenManager;
  }

  configureNavigation() {
    this._configureInitialScreenButtons();
    this._configureBackButton();
  }

  navigateTo(screenName, sourceScreen, gameCategories = {}) {
    this.screenManager.loadScreen(screenName, sourceScreen, gameCategories);
  }

  _configureInitialScreenButtons() {
    const buttons = [
      { button: this.screenManager.screens.homeScreen.chooseButton, targetScreen: 'categoriesScreen' },
      { button: this.screenManager.screens.homeScreen.reviewButton, targetScreen: 'reviewScreen' }
    ];

    buttons.forEach(({ button, targetScreen }) => {
      button.on('click', () => {
        this.navigateTo(targetScreen, 'homeScreen');
      });
    });
  }
  
  _configureBackButton() {
    const categoriesScreen = this.screenManager.screens.categoriesScreen;
    const reviewScreen = this.screenManager.screens.reviewScreen;
    const categoriesBackButton = categoriesScreen.addBackButton();
    const reviewBackButton = reviewScreen.addBackButton();

    categoriesBackButton.on('click', () => {
      this.navigateTo('homeScreen', 'categoriesScreen');
    });
    reviewBackButton.on('click', () => {
      this.navigateTo('homeScreen', 'reviewScreen');
    });
  }
}