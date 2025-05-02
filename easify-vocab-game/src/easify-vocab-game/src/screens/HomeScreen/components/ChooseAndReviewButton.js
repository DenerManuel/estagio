import { Theme } from '../../../styles/theme.js';
import { CustomButton } from '../../../components/Button/CustomButton.js';

const BUTTONS_MARGIN = 10

export function createChooseAndReviewButton(app, startButton) {
  const SECONDARY_BUTTON_SETTINGS = _createSecondaryButtonsOptions();

  const chooseButton = _createChooseButton(SECONDARY_BUTTON_SETTINGS);
  const reviewButton = _createReviewButton(SECONDARY_BUTTON_SETTINGS);

  _positionChooseButton(chooseButton, app, startButton);
  _positionReviewButton(reviewButton, app, chooseButton);

  return [chooseButton, reviewButton];
}
const _createSecondaryButtonsOptions = () => {
  return {
    width: 180,
    height: 85,
    backgroundColor: Theme.Colors.InitialScreen.buttonBackgroundColor,
    hoverColor: Theme.Colors.InitialScreen.buttonHoverColor,
    textColor: Theme.Colors.InitialScreen.buttonTextColor,
    fontSize: Theme.Fonts.InitialScreen.secondaryButtonFontSize,
  }
}

const _createChooseButton = (SECONDARY_BUTTON_SETTINGS) => {
  return new CustomButton('Choose', SECONDARY_BUTTON_SETTINGS)
}
const _createReviewButton = (SECONDARY_BUTTON_SETTINGS) => {
  return new CustomButton('Review', SECONDARY_BUTTON_SETTINGS)
}

const _positionChooseButton = (chooseButton, app, startButton) => {
  const HORIZONTAL_POSITION = app.screen.width / 2 - 90
  const VERTICAL_POSITION = startButton.y + startButton.height + BUTTONS_MARGIN

  chooseButton.position.set(HORIZONTAL_POSITION, VERTICAL_POSITION)
}
const _positionReviewButton = (reviewButton, app, chooseButton) => {
  const HORIZONTAL_POSITION = app.screen.width / 2 - 90
  const VERTICAL_POSITION = chooseButton.y + chooseButton.height + BUTTONS_MARGIN

  reviewButton.position.set(HORIZONTAL_POSITION, VERTICAL_POSITION)
}