import { handleCriticalFailure } from "./handleCriticalFailure.js";

export const handleInitializationError = (error) => {
  console.error('Falha na inicialização da aplicação.', error);
  handleCriticalFailure(this.gameContainerID)
}