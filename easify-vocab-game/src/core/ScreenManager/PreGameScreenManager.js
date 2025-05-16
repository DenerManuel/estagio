import { PreGameScreen } from "../../screens/PreGameScreen/PreGameScreen.js";

export function createPreGameScreen(screenManager, gameCategory) {
  const category = _getCategory(gameCategory, screenManager)
  return new PreGameScreen(screenManager.app, category);
}
const _getCategory = (category, screenManager) => {
  const categories = screenManager.categories;
  
  // Se houver uma categoria específica, retorna ela
  if (category) {
    return category;
  }
  // Se não houver categoria específica, retorna uma aleatória
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

export function configurePreGameScreenButtons(screenManager) {
  _configurePreGameScreenBackButton(screenManager);
  _configurePreGameScreenChooseButton(screenManager);
}
const _configurePreGameScreenBackButton = (screenManager) => {
  const preGameScreen = screenManager.screens.preGameScreen;
  const backButton = preGameScreen.addBackButton();

  backButton.on('click', () => {
    screenManager.displayScreen('homeScreen');
  });
}
const _configurePreGameScreenChooseButton = (screenManager) => {
  const preGameScreen = screenManager.screens.preGameScreen;
  const chooseButton = preGameScreen.chooseButton;
  _updateCategoryScreenContext(screenManager);

  chooseButton.on('click', () => {
    screenManager.displayScreen('categoriesScreen', { context: 'game' });
  });
}
const _updateCategoryScreenContext = (screenManager) => {
  const categoriesScreen = screenManager.screens.categoriesScreen;
  categoriesScreen.app.context = 'game';
}