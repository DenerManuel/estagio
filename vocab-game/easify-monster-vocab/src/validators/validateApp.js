export const validateApp = (app) => {
  if (!app) {
    throw new Error('Falha crítica: PIXI.Application não foi inicializado.');
  }
}