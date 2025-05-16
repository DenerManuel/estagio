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
    backgroundColor: 0xFB7302,
    hoverColor: 0XFCD2AE,
    textColor: 0xFFFFFF,
    fontSize: 30,
  }
}
const _positionStartButton = (startButton, app) => {
  const HORIZONTAL_POSITION = app.screen.width / 2 - 110
  const VERTICAL_POSITION = app.screen.height / 2 - 30

  startButton.position.set(HORIZONTAL_POSITION, VERTICAL_POSITION)
}