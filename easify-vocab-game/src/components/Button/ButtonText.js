export class ButtonText extends PIXI.Text {
  constructor(buttonText, textOptions) {
    super(buttonText, {
      fontFamily: textOptions.fontFamily,
      fontSize: textOptions.fontSize,
      fill: textOptions.textColor,
      align: 'center'
    });
    this.centralize(textOptions.width, textOptions.height);
  }
  centralize(buttonWidth, buttonHeight) {
    this.anchor.set(0.5);
    this.position.set(buttonWidth / 2, buttonHeight / 2);
  }
  setText(newText) {
    this.text = newText;
  }
}