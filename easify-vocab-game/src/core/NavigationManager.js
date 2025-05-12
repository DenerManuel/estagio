export class NavigationManager {
  constructor(screenManager) {
    this.screenManager = screenManager;
  }

  configureNavigation() {
    this._configureInitialScreenButtons();
    this._configureBackButton();
  }

  navigateTo(screenName, options = {}) {
    this.screenManager.displayScreen(screenName);
    if (screenName === 'categoriesScreen') {
      this.screenManager.screens.categoriesScreen.app.context = options.context;
    }
  }

  _configureInitialScreenButtons() {
    const buttons = [
      { button: this.screenManager.screens.homeScreen.startButton, targetScreen: 'preGameScreen'},
      { button: this.screenManager.screens.homeScreen.chooseButton, targetScreen: 'categoriesScreen', context: 'game' },
      { button: this.screenManager.screens.homeScreen.reviewButton, targetScreen: 'categoriesScreen', context: 'review' }
    ];

    buttons.forEach(({ button, targetScreen, context }) => {
      button.on('click', () => {
        this.navigateTo(targetScreen, { context });
      });
    });
  }
  
  _configureBackButton() {
    // const preGameScreen = this.screenManager.screens.preGameScreen
    const categoriesScreen = this.screenManager.screens.categoriesScreen;
    const reviewScreen = this.screenManager.screens.reviewScreen;

    // const preGameBackButton = preGameScreen.addBackButton();
    const categoriesBackButton = categoriesScreen.addBackButton();
    const reviewBackButton = reviewScreen.addBackButton();


    // preGameBackButton.on('click', () => {
    //   this.navigateTo('homeScreen');
    // });
    categoriesBackButton.on('click', () => {
      this.navigateTo('homeScreen');
    });
    reviewBackButton.on('click', () => {
      this.navigateTo('categoriesScreen', { context: 'review' },);
    });
  }
}