export class ButtonBackground extends PIXI.Graphics {
  constructor(buttonOptions) {
    super();
    this.options = buttonOptions;
    this.options.baseColor = this.options.backgroundColor;
    this._createBackground();
  }

  updateStyle(options) {
    // Atualizar apenas propriedades relevantes
    const visualProps = [
      'width', 'height', 'backgroundColor', 
      'borderSize', 'borderColor', 'borderRadius'
    ];
    
    visualProps.forEach(prop => {
      if (options[prop] !== undefined) {
        this.options[prop] = options[prop];
      }
    });
    
    this._createBackground();
  }

  updateSize({ width, height }) {
    if (width  !== undefined) this.options.width  = width;
    if (height !== undefined) this.options.height = height;
    this._createBackground();
  }

  changeColor(newColor) {
    this.options.baseColor = newColor;
    this._createBackground();
  }

  // altera só a espessura da borda
  setBorderSize(newSize) {
    this.options.borderSize = newSize;
    this._createBackground();
  }

  // altera só o raio dos cantos
  setBorderRadius(newRadius) {
    this.options.borderRadius = newRadius;
    this._createBackground();
  }

  // altera ambos (size e/ou radius)
  updateBorder({ borderSize, borderRadius }) {
    if (borderSize !== undefined)   this.options.borderborderSize = borderSize;
    if (borderRadius !== undefined) this.options.borderRadius = borderRadius;
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