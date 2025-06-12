import { ScreenManager } from "../screen-manager/ScreenManager.js";
import { handleCriticalFailure } from "./errorHandling.js";

export async function prepareScreens(app, gameCategories, categoriesScreenCards) {
  _validateParameters(app, gameCategories, categoriesScreenCards)

  try {
    const screenManager = new ScreenManager(app, gameCategories);
    app.screenManager = screenManager;
    await screenManager.preloadScreens(gameCategories, categoriesScreenCards);
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