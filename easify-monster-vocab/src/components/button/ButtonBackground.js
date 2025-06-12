export class ButtonBackground extends PIXI.Graphics {
  constructor(buttonOptions) {
    super();
    this.options = buttonOptions;
    this.options.baseColor = this.options.backgroundColor;
    this._createBackground();
  }
  changeColor(newColor) {
    this.options.baseColor = newColor;
    this._createBackground();
  }

  _createBackground() {
    this.clear();
    this._fillBackground();
    this._configureBorder();
    this._drawRectangle();
  }
  
  _fillBackground() {
    this.beginFill(this.options.baseColor)
  }

  _configureBorder() {
    this.lineStyle(
      this.options.borderSize,
      this.options.borderColor
    );
  }
  
  _drawRectangle() {
    this.drawRoundedRect(
      0,
      0,
      this.options.width,
      this.options.height,
      this.options.borderRadius
    );
    this.endFill();
  }

  changeColor(newColor) {
    this.options.baseColor = newColor;
    this._createBackground();
  }
}