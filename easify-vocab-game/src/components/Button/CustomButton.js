import { ButtonBackground } from './ButtonBackground.js'
import { ButtonText } from './ButtonText.js'
import { ButtonInteraction } from './ButtonInteraction.js'

export class CustomButton extends PIXI.Container {
  constructor(buttonText, buttonOptions = {}) {
    super();

    this._configureButtonOptions(buttonOptions);
    this._createButtonComponents(buttonText);
    this._configureButtonInteractions();
  }

  editText(newText) {
    this.buttonText.setText(newText);
    this.buttonText.centralizeText(this.buttonConfig.width, this.buttonConfig.height);
  }

  _configureButtonOptions(buttonOptions) {
    this.buttonConfig = {
      width: 200,
      height: 50,
      backgroundColor: 0x4CAF50,
      hoverColor: 0x45a049,
      borderRadius: 32,
      ...buttonOptions // Sobreescreve com opções personalizadas
    };

    this.textConfig = {
      fontSize: 25,
      textColor: 0xFFFFFF,
      ...buttonOptions
    };
  } // Configura as opções padrão e personalizadas

  _createButtonComponents(buttonText) {
    this._createBackground();
    this._createText(buttonText);
  }

  _createBackground() {
    this.background = new ButtonBackground(this.buttonConfig);
    this.addChild(this.background);
  }

  _createText(buttonText) {
    this.buttonText = new ButtonText(buttonText, this.textConfig);
    this.buttonText.centralizeText(this.buttonConfig.width, this.buttonConfig.height);
    this.addChild(this.buttonText);
  }

  _configureButtonInteractions() {
    this.buttonInteraction = new ButtonInteraction(this, this.buttonConfig);
  }
}