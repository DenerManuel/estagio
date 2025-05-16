import { PIXIConfiguration } from "../PIXIConfiguration/PIXIConfiguration.js";
import { handleCriticalFailure } from "./errorHandling.js";

// Preparação do PIXI.
export async function preparePIXI(gameContainerID) {
  try {
    const app = _initializePIXI(gameContainerID);
    _validatePIXIInitialization(app);
    return app;
  } catch (error) {
    _handlePIXIError(error);
  }
}
const _initializePIXI = (gameContainerID) => {
  const pixiConfig = new PIXIConfiguration(gameContainerID);
  return pixiConfig.initialize();
}
const _validatePIXIInitialization = (app) => {
  if (!app) {
    throw new Error('Falha na inicialização do PIXI');
  }
}
const _handlePIXIError = (error) => {
  console.error('Erro na configuração do PIXI:', error);
  handleCriticalFailure(); // Chama o método de falha crítica
}