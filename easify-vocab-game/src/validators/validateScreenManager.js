export const validateScreenManager = (screenManager) => {
  if (!screenManager) {
    throw new Error('Falha crítica: Gerenciador de telas não foi inicializado.');
  }
}