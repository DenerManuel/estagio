import { handleCriticalFailure } from "./handleCriticalFailure.js";

const GAME_CONTAINER_ID = 'game-container';

export const handleInitializationError = (error) => {
  console.error('Falha na inicialização da aplicação.', error);
  handleCriticalFailure(GAME_CONTAINER_ID)
}