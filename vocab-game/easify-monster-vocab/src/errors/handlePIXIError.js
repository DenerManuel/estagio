import { handleCriticalFailure } from "./handleCriticalFailure.js";

export const handlePIXIError = (error, gameContainerID) => {
  console.error('Erro na configuração do PIXI:', error);
  handleCriticalFailure(gameContainerID);
}