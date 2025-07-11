export class CustomContainer extends PIXI.Container {
  constructor(parentContainer, containerSettings = {}) {
    super();
    this.parentContainer = parentContainer;
    this.positionX = 0;
    this.positionY = 0;

    this._configureSettings(containerSettings);
    this._adjustSize();
    this._createContainerBackground();
    // this._setContainerPosition();
  }

  getSize() {
    const width = this.settings.width + this.settings.borderWidth
    const height = this.settings.height + this.settings.borderWidth
    
    return {
      width: width,
      height: height
    }
  }

  setBorder(borderWidth, borderSize) {
    this.settings.borderWidth = borderWidth || this.settings.borderWidth;
    this.settings.borderSize = borderSize || this.settings.borderSize;

    // Recria o background com a nova borda
    this.background.clear();
    this._createContainerBackground();
  }

  changeBorderColor(newBorderColor) {
    this.settings.baseBorderColor = newBorderColor;
    this._createContainerBackground();
  }

  _configureSettings(containerSettings) {
    this.settings = {
      width: containerSettings.width || 300,
      height: containerSettings.height || 200,
      backgroundColor: containerSettings.backgroundColor || 0xFFFFFF,
      baseBorderColor: containerSettings.borderColor || 0x000000,
      borderColor: containerSettings.borderColor || 0x000000,
      borderWidth: containerSettings.borderWidth || 2,
      borderRadius: containerSettings.borderRadius || 10,
      fontFamily: containerSettings.fontFamily || 'Lato',
      fontSize: containerSettings.fontSize || 20,
      fill: containerSettings.textColor || 0xFFFFFF,
      align: containerSettings.align || 'center',
      horizontalAlign: containerSettings.horizontalAlign || 'center', // 'left', 'center', 'right'
      verticalAlign: containerSettings.verticalAlign || 'middle', // 'top', 'middle', 'bottom'
      padding: containerSettings.padding || { top: 0, left: 0, bottom: 0, right: 0 },
    };
  }

  // Ajusta o tamanho do container com base no padding
  _adjustSize() {
    const PADDING_TOP = this.settings.padding.top
    const PADDING_BOTTOM = this.settings.padding.bottom
    const PADDING_LEFT = this.settings.padding.left
    const PADDING_RIGHT = this.settings.padding.right

    this.settings.width -= (PADDING_LEFT + PADDING_RIGHT);
    this.settings.height -= (PADDING_TOP + PADDING_BOTTOM);
  }

  _createContainerBackground() {
    const { width, height, backgroundColor, baseBorderColor, borderWidth, borderRadius } = this.settings;

    const background = new PIXI.Graphics();
    background.beginFill(backgroundColor);
    background.lineStyle(borderWidth, baseBorderColor);
    background.drawRoundedRect(0, 0, width, height, borderRadius);
    background.endFill();
    this.background = background;

    this.addChild(background);
  }

  _setContainerPosition() {
    // Define o pivot para centralizar o container
    this.pivot.set(this.settings.width / 2, this.settings.height / 2);

    this._calculateHorizontalPosition();
    this._calculateVerticalPosition();

    // Aplica as posições calculadas
    this.position.set(this.positionX, this.positionY);
  }

  _calculateHorizontalPosition() {
    const { width, horizontalAlign, padding } = this.settings;

    // Verifica se o parentContainer é um PIXI.Container
    const parentWidth = this.parentContainer instanceof PIXI.Container
      ? this.parentContainer.settings.width
      : this.parentContainer.clientWidth;

    if (horizontalAlign === 'left') {
      this.positionX = width / 2 + padding.left;
    } else if (horizontalAlign === 'right') {
      this.positionX = parentWidth - width / 2 - padding.right;
    } else {
      this.positionX = parentWidth / 2 + (padding.left - padding.right) / 2; // center com ajuste de padding
    }
  }
  _calculateVerticalPosition() {
    const { height, verticalAlign, padding } = this.settings;

    // Verifica se o parentContainer é um PIXI.Container
    const parentHeight = this.parentContainer instanceof PIXI.Container
      ? this.parentContainer.settings.height
      : this.parentContainer.clientHeight;

    if (verticalAlign === 'top') {
      this.positionY = height / 2 + padding.top;
    } else if (verticalAlign === 'bottom') {
      this.positionY = parentHeight - height / 2 - padding.bottom;
    } else {
      this.positionY = parentHeight / 2 + (padding.top - padding.bottom) / 2; // center com ajuste de padding
    }
  }
}