import { ButtonBackground } from "./ButtonBackground.js";
import { ButtonText } from "./ButtonText.js";
import { ButtonInteraction } from "./ButtonInteraction.js";
import { configureButtonOptions } from "./ButtonOptions.js";

export class CustomButton extends PIXI.Container {
  constructor(buttonText, buttonOptions = {}) {
    super();
    this.text = buttonText;
    this.options = configureButtonOptions(buttonOptions)

    this._addComponents();
    this._addInteraction();
  }
  
  editText(newText) {
    this.text.setText(newText);
    this.text.centralize(this.options.width, this.options.height);
  }

  _addComponents() {
    this._addBackground();
    this._addText();
  }

  _addBackground() {
    this.background = new ButtonBackground(this.options);
    this.addChild(this.background);
  }

  _addText() {
    this.text = new ButtonText(this.text, this.options);
    this.addChild(this.text);
  }

  _addInteraction() {
    this.interaction = new ButtonInteraction(this, this.options);
  }
}