import { Text } from 'pixi.js';

export class ButtonText extends Text {
  constructor(buttonText, textOptions) {
    super(buttonText, {
      fontFamily: textOptions.fontFamily,
      fontSize: textOptions.fontSize,
      fill: textOptions.textColor,
      align: 'center',
    });
    this.centralize(textOptions.width, textOptions.height);
  }

  updateStyle(options) {
    // Atualizar propriedades de texto
    if (options.fontSize) this.style.fontSize = options.fontSize;
    if (options.textColor) this.style.fill = options.textColor;
    if (options.fontFamily) this.style.fontFamily = options.fontFamily;
  }

  centralize(buttonWidth, buttonHeight) {
    this.anchor.set(0.5);
    this.position.set(buttonWidth / 2, buttonHeight / 2);
  }

  setText(newText) {
    this.text = newText;
  }
}
