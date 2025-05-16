export class ItemCardBackground extends PIXI.Graphics {
  constructor(itemCardOptions) {
    super();
    this.settings = itemCardOptions;
    this.settings.baseBackgroundColor = this.settings.baseBackgroundColor;
    this.settings.baseBorderColor = this.settings.borderColor;
  }

  changeBackgroundColor(newBackgroundColor) {
    this.settings.baseBackgroundColor = newBackgroundColor;
    this.createBackground();
  }

  changeBorderColor(newBorderColor) {
    this.settings.baseBorderColor = newBorderColor;
  }

  createBackground() {
    this.clear();
    this._fillBackground();
    this._configureBorder();
    this._drawRectangle();
  }

  _fillBackground() {
    this.beginFill(this.settings.backgroundColor)
  }
  _configureBorder() {
    this.lineStyle(
      this.settings.borderSize,
      this.settings.baseBorderColor
    );
  }
  _drawRectangle() {
    this.drawRoundedRect(
      0,
      0,
      this.settings.width,
      this.settings.height,
      this.settings.borderRadius
    );
    this.endFill();
  }
}