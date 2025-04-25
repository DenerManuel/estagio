export class CardBackground extends PIXI.Graphics {
  constructor(width, height, borderRadius, backgroundColor, borderColor) {
    super();
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor || 0xFFFFFF;
    this.borderColor = borderColor || 0xA9A9A9;

    this._createBackground();
  }

  _createBackground() {
    this.clear();
    this.beginFill(this.backgroundColor);
    this.lineStyle(5, this.borderColor);
    this.drawRoundedRect(0, 0, this.width, this.height, this.borderRadius);
    this.endFill();
  }

  changeBorderColor(newColor) {
    this.borderColor = newColor;
    this._createBackground();
  }
}