import { NavigationManager } from "../NavigationManager.js";
import { handleCriticalFailure } from "./errorHandling.js";

export async function prepareNavigation(screenManager) {
  try {
    new NavigationManager(screenManager).configureNavigation();
  } catch (error) {
    console.error("Erro ao preparar a navegação das telas:", error);
    handleCriticalFailure(); // Chama o método de falha crítica
  }
}