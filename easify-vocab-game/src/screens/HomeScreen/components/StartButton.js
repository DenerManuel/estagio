import { Theme } from '../../../styles/theme.js';
import { CustomButton } from '../../../components/Button/CustomButton.js';

export function createStartButton(app) {
  const START_BUTTON_SETTINGS = _createStartButtonOptions();
  
  const startButton = new CustomButton('Start', START_BUTTON_SETTINGS);
  _positionStartButton(startButton, app);

  return startButton;
}
const _createStartButtonOptions = () => {
  return {
    width: 220,
    height: 90,
    backgroundColor: Theme.Colors.InitialScreen.buttonBackgroundColor,
    hoverColor: Theme.Colors.InitialScreen.buttonHoverColor,
    textColor: Theme.Colors.InitialScreen.buttonTextColor,
    fontSize: Theme.Fonts.InitialScreen.startButtonFontSize,
  }
}
const _positionStartButton = (startButton, app) => {
  const HORIZONTAL_POSITION = app.screen.width / 2 - 110
  const VERTICAL_POSITION = app.screen.height / 2 - 30

  startButton.position.set(HORIZONTAL_POSITION, VERTICAL_POSITION)
}