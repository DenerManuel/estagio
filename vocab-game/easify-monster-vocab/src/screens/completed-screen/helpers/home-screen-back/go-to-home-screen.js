import { App } from '../../../../app/App.js';

export function goToHomeScreen() {
  if (App && App.screenManager) {
    App.screenManager.displayScreen('homeScreen');
  }
}
