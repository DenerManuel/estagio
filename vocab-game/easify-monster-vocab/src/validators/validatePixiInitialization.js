export const validatePIXIInitialization = (app) => {
  if (!app?.stage) {
    throw new Error('Falha ao inicializar corretamente a aplicação PIXI.');
  }
}