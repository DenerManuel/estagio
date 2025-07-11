import { NavigationManager } from "../NavigationManager.js";
import { handleCriticalFailure } from "../../errors/handleCriticalFailure.js";

export async function prepareNavigation(screenManager) {
  _validateParameter(screenManager)

  try {
    const navManager = new NavigationManager(screenManager);
    await navManager.configureNavigation();
    return navManager;
  } catch (error) {
    console.error("Erro ao preparar a navegação das telas:", error);
    handleCriticalFailure();
    throw error
  }
}

const _validateParameter = (screenManager) => {
  if (!screenManager) {
    throw new Error('Instância do ScreenManager é obrigatória.');
  }
}