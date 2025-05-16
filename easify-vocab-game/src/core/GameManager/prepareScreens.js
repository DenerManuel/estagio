import { ScreenManager } from "../ScreenManager/ScreenManager.js";
import { handleCriticalFailure } from "./errorHandling.js";

export async function prepareScreens(app, gameCategories) {
  try {
    const screenManager = new ScreenManager(app, gameCategories);
    app.screenManager = screenManager;
    screenManager.preloadScreens(gameCategories);
    return screenManager;
  } catch (error) {
    console.error("Erro ao preparar as telas:", error);
    handleCriticalFailure();
  }
}