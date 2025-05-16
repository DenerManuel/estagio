import { CustomButton } from './CustomButton.js';

export function createBackButton(app) {
  const BACK_BUTTON_SETTINGS = {
    width: 70,
    height: 50,
    backgroundColor: 0XFB7302,
    hoverColor: 0XFCD2AE,
    borderColor: 0xFFFFFF,
    fontSize: 18
  };
  
  const backButton = new CustomButton('Back', BACK_BUTTON_SETTINGS);
  _configureBackButtonPosition(backButton, app);

  return backButton;
}
const _configureBackButtonPosition = (backButton, app) => {
  backButton.position.set(
    20, // Margem esquerda
    app.screen.height - 552 // Margem inferior
  );
}