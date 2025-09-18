import { ScreenManager } from "../screen-manager/ScreenManager.js";
import { handleCriticalFailure } from "../../errors/handleCriticalFailure.js";
import { App } from "../../app/App.js"

export async function prepareScreens(gameCategories, categoriesScreenCards) {
  const app = new App()
  // _validateParameters(app, gameCategories, categoriesScreenCards)
  try {
    const screenManager = new ScreenManager(gameCategories, categoriesScreenCards);
    app.screenManager = screenManager;
    // await screenManager.preloadScreens(categoriesScreenCards);
    return screenManager;
  } catch (error) {
    console.error("Erro ao preparar as telas:", error);
    handleCriticalFailure();
    throw error;
  }
}
const _validateParameters = (app, gameCategories, categoriesScreenCards) => {
  if (!app || !gameCategories || !categoriesScreenCards) {
    throw new Error('Parâmetros obrigatórios ausentes.');
  }
}