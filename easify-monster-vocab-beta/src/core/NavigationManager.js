export class NavigationManager {
  constructor(screenManager) {
    this.screenManager = screenManager;
  }

  async configureNavigation() {
    this._configureInitialScreenButtons();
    this.configurePreGameScreenButtons();
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
      { button: this.screenManager.screens.homeScreen.startButton, targetScreen: 'preGameScreen' },
      { button: this.screenManager.screens.homeScreen.chooseButton, targetScreen: 'categoriesScreen', context: 'game' },
      { button: this.screenManager.screens.homeScreen.reviewButton, targetScreen: 'categoriesScreen', context: 'review' }
    ];

    buttons.forEach(({ button, targetScreen, context }) => {
      button.on('pointertap', () => {
        this.navigateTo(targetScreen, { context });
      });
    });
  }
  configurePreGameScreenButtons() {
    const buttons = [
      { button: this.screenManager.screens.preGameScreen.playButton, targetScreen: 'gameScreen'},
      { button: this.screenManager.screens.preGameScreen.chooseButton, targetScreen: 'categoriesScreen', context: 'game' },
    ];

    buttons.forEach(({ button, targetScreen, context }) => {
      button.on('pointertap', () => {
        this.navigateTo(targetScreen, { context });
      });
    });
  }

  _configureBackButton() {
    const categoriesScreen = this.screenManager.screens.categoriesScreen;
    // const gameScreen = this.screenManager.screens.gameScreen;

    const categoriesBackButton = categoriesScreen.addBackButton();
    // const gameBackButton = gameScreen.addBackButton();

    categoriesBackButton.on('pointertap', () => {
      this.navigateTo('homeScreen');
    });
    // gameBackButton.on('click', () => {
    //   this.navigateTo('homeScreen');
    // });
  }
}