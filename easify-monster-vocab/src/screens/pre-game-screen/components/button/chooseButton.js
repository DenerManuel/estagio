import { CustomButton } from "../../../../components/button/CustomButton.js";

export function createChooseButton(app) {
  const CHOOSE_BUTTON_SETTINGS = _createChooseButtonOptions();

  const chooseButton = new CustomButton('Choose', CHOOSE_BUTTON_SETTINGS);
  _positionChooseButton(chooseButton, app);

  return chooseButton;
}
const _createChooseButtonOptions = () => {
  return {
    width: 200,
    height: 80,
    backgroundColor: 0xFB7302,
    hoverColor: 0XFCD2AE,
    textColor: 0xFFFFFF,
    fontSize: 25,
  }
}
const _positionChooseButton = (chooseButton, app) => {
  const HORIZONTAL_POSITION = app.screen.width / 2 - 100
  const VERTICAL_POSITION = (app.screen.height / 2) + 170

  chooseButton.position.set(HORIZONTAL_POSITION, VERTICAL_POSITION)
}