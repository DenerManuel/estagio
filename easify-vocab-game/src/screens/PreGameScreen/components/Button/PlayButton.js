import { CustomButton } from "../../../../components/Button/CustomButton.js";

export function createPlayButton(app) {
  const PLAY_BUTTON_SETTINGS = _createPlayButtonOptions();
  
  const playButton = new CustomButton('Play', PLAY_BUTTON_SETTINGS);
  _positionPlayButton(playButton, app);

  return playButton;
}
const _createPlayButtonOptions = () => {
  return {
    width: 300,
    height: 100,
    backgroundColor: 0xFFA500,
    hoverColor: 0XF0E68C,
    textColor: 0xFFFFFF,
    fontSize: 40,
  }
}
const _positionPlayButton = (playButton, app) => {
  const HORIZONTAL_POSITION = app.screen.width / 2 - 150
  const VERTICAL_POSITION = (app.screen.height / 2) + 55

  playButton.position.set(HORIZONTAL_POSITION, VERTICAL_POSITION)
}