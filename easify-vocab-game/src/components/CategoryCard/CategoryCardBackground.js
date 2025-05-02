export class CategoryCardBackground extends PIXI.Graphics {
  constructor(categoryCardOptions) {
    super();
    this.settings = categoryCardOptions;
    this.settings.baseBorderColor = this.settings.borderColor;
  }
  changeBorderColor(newBorderColor) {
    this.settings.baseBorderColor = newBorderColor;
    this.createBackground();
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