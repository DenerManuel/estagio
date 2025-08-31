import * as PreGameScreenComponents from '../../components/pre-game-screen-components.js';

export function createOverlay() {
  return new PreGameScreenComponents.Overlay();
}
export function createConfigModal() {
  return new PreGameScreenComponents.ConfigModal();
}
export function createCloseButton(preGameScreen) {
  return new PreGameScreenComponents.CloseButton(preGameScreen);
}

