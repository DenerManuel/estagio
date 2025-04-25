export class ButtonBackground extends PIXI.Graphics {
  constructor(backgroundOptions) {
    super();
    this.backgroundOptions = backgroundOptions;
    this.backgroundOptions.baseColor = backgroundOptions.backgroundColor;
    this._createBackground();
  }

  _createBackground() {
    this.clear(); // Limpa o gráfico antes de desenhar um novo fundo
    this._configureBorder();
    this._fillBackground()
    this._drawRectangle()
  }

  _configureBorder() {
    this.lineStyle(
      this.backgroundOptions.borderSize || 4,
      this.backgroundOptions.borderColor || 0xFFFFFF
    );
  }
  _fillBackground() {
    this.beginFill(this.backgroundOptions.baseColor);
  }
  _drawRectangle() {
    this.drawRoundedRect(
      0,
      0,
      this.backgroundOptions.width,
      this.backgroundOptions.height,
      this.backgroundOptions.borderRadius
    );
    this.endFill();
  }

  changeColor(newColor) {
    this.backgroundOptions.baseColor = newColor;
    this._createBackground();
  }
}