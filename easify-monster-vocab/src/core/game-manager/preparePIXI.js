import { PIXIConfiguration } from "../pixi-configuration/PIXIConfiguration.js";
import { handleCriticalFailure } from "./errorHandling.js";

// Preparação do PIXI.
export async function preparePIXI(gameContainerID) {
  _validateParameter(gameContainerID)

  try {
    const app = _initializePIXI(gameContainerID);
    _validatePIXIInitialization(app);
    return app;
  } catch (error) {
    _handlePIXIError(error, gameContainerID);
    throw error;
  }
}
const _initializePIXI = (gameContainerID) => {
  const pixiConfig = new PIXIConfiguration(gameContainerID);
  return pixiConfig.initialize();
}
const _validatePIXIInitialization = (app) => {
  if (!app?.stage) {
    throw new Error('Falha ao inicializar corretamente a aplicação PIXI.');
  }
}
const _handlePIXIError = (error, gameContainerID) => {
  console.error('Erro na configuração do PIXI:', error);
  handleCriticalFailure(gameContainerID);
}

const _validateParameter = (gameContainerID) => {
  if (!gameContainerID) {
    throw new Error('ID do contêiner é obrigatório.');
  }
}