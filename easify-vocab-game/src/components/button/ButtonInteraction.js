export class ButtonInteraction {
  constructor(button, buttonConfig) {
    this.button = button;
    this.buttonConfig = buttonConfig;

    this._configureInteractionType();
    this._configureEvents();
  }
  
  _configureInteractionType() {
    this.button.eventMode = 'dynamic';
    this.button.cursor = 'pointer';
  }

  _configureEvents() {
    this.button.on('pointerover', () => this._mouseOver());
    this.button.on('pointerout', () => this._mouseOut());
    this.button.on('pointerup', () => this._mouseUp());
  }

  _mouseOver() {
    this.button.background.changeColor(this.buttonConfig.hoverColor);
  }
  _mouseOut() {
    this.button.background.changeColor(this.buttonConfig.backgroundColor);
  }
  _mouseUp() {
    this.button.background.changeColor(this.buttonConfig.backgroundColor);
  }
}