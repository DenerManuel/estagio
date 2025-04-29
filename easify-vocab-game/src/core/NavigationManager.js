export class NavigationManager {
  constructor(screenManager) {
    this.screenManager = screenManager;
  }

  configureNavigation() {
    this._configureInitialScreenButtons();
    this._configureBackButton();
  }

  navigateTo(screenName, sourceScreen, options = {}) {
    this.screenManager.displayScreen(screenName, sourceScreen);
    if (screenName === 'categoriesScreen') {
      this.screenManager.screens.categoriesScreen.app.context = options.context;
    }
  }

  _configureInitialScreenButtons() {
    const buttons = [
      { button: this.screenManager.screens.homeScreen.chooseButton, targetScreen: 'categoriesScreen', context: 'game' },
      { button: this.screenManager.screens.homeScreen.reviewButton, targetScreen: 'categoriesScreen', context: 'review' }
    ];

    buttons.forEach(({ button, targetScreen, context }) => {
      button.on('click', () => {
        this.navigateTo(targetScreen, 'homeScreen', { context });
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
      this.navigateTo('categoriesScreen', 'reviewScreen', { context: 'review' },);
    });
  }
}