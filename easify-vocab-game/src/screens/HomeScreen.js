import { CustomButton } from '../components/Button/CustomButton.js';
import { Theme } from '../styles/theme.js';

export class HomeScreen extends PIXI.Container {
  constructor(app) {
    super();
    this.app = app

    this._createComponents();
  }
  _createComponents() {
    this._createTitle();
    this._createButtons();
  }

  _createTitle() {
    this.title = new PIXI.Text('Easify Vocab', {
      fontFamily: 'Lato',
      fontSize: Theme.Fonts.InitialScreen.titleFontSize,
      fill: Theme.Colors.InitialScreen.titleTextColor,
      align: 'center',
      dropShadow: true,
      dropShadowDistance: 2,
      dropShadowBlur: 4
    });

    this._positionTitle();
    this.addChild(this.title);
  }
  _positionTitle() {
    this.title.anchor.set(0.5);
    this.title.position.set(
      this.app.screen.width / 2,
      this.app.screen.height / 2 - 150
    );
  }

  _createButtons() {
    this._createStartButton();
    this._createSecondaryButtons();
    this._positionButtons();
    this.addChild(this.startButton, this.chooseButton, this.reviewButton);
  }
  _createStartButton() {
    const startButtonSettings = {
      width: 220,
      height: 90,
      backgroundColor: Theme.Colors.InitialScreen.buttonBackgroundColor,
      hoverColor: Theme.Colors.InitialScreen.buttonHoverColor,
      textColor: Theme.Colors.InitialScreen.buttonTextColor,
      fontSize: Theme.Fonts.InitialScreen.startButtonFontSize,
    };

    this.startButton = new CustomButton('Start', startButtonSettings);
  }
  _createSecondaryButtons() {
    const secondaryButtonSettings = {
      width: 180,
      height: 85,
      backgroundColor: Theme.Colors.InitialScreen.buttonBackgroundColor,
      hoverColor: Theme.Colors.InitialScreen.buttonHoverColor,
      textColor: Theme.Colors.InitialScreen.buttonTextColor,
      fontSize: Theme.Fonts.InitialScreen.secondaryButtonFontSize,
    };

    this.chooseButton = new CustomButton('Choose', secondaryButtonSettings);
    this.reviewButton = new CustomButton('Review', secondaryButtonSettings);
  }
  _positionButtons() {
    const BUTTONS_MARGIN = 10;

    this.startButton.position.set(
      this.app.screen.width / 2 - 110,
      this.app.screen.height / 2 - 30
    );

    this.chooseButton.position.set(
      this.app.screen.width / 2 - 90,
      this.startButton.y + this.startButton.height + BUTTONS_MARGIN
    );

    this.reviewButton.position.set(
      this.app.screen.width / 2 - 90,
      this.chooseButton.y + this.chooseButton.height + BUTTONS_MARGIN
    );
  }
}