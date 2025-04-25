export class ButtonText extends PIXI.Text {
  constructor(text, textOptions = {}) {
    super(text , {
      fontFamily: textOptions.fontFamily || 'Lato',
      fontSize: textOptions.fontSize || 22,
      fill: textOptions.textColor || 0xFFFFFF,
      align: 'center'
    })

    this.anchor.set(0.5);
  }
  centralizeText(buttonWidth, buttonHeight) {
    this.position.set(buttonWidth / 2, buttonHeight / 2);
  }

  setText(newText) {
    this.text = newText;
  }
}