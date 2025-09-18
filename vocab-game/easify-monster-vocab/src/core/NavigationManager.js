import { ScreenManager } from "./screen-manager/ScreenManager.js";

export class NavigationManager {
  static instance = null;

  static getInstance() {
    if (!NavigationManager.instance) {
      NavigationManager.instance = new NavigationManager();
    }
    return NavigationManager.instance;
  }

  screenManager = null

  constructor() {
    if (NavigationManager.instance) {
      return NavigationManager.instance;
    }

    this.screenManager = new ScreenManager()
    NavigationManager.instance = this;
  }

  navigateTo(screenName, category = null, gameMode = null) {
    ScreenManager.getInstance().displayScreen(screenName, category, gameMode);
  }
}
