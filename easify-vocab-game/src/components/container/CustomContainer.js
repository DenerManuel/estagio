export class CustomContainer extends PIXI.Container {
  constructor(parentContainer = null, containerSettings = {}) {
    super();
    this.parentContainer = parentContainer;
    this._configureSettings(containerSettings);
    this.settings.baseBorderColor = this.settings.borderColor;
    this._createContainerBackground();
  }

  updateStyle(newSettings = {}) {
    const visualProps = [
      'width',
      'height',
      'backgroundColor',
      'borderColor',
      'borderWidth',
      'borderRadius',
      'padding',
      'fontFamily',
      'fontSize',
      'textColor',
    ];

    visualProps.forEach((prop) => {
      if (newSettings[prop] !== undefined) {
        if (typeof newSettings[prop] === 'object' && !Array.isArray(newSettings[prop])) {
          // Merge deeply for nested objects like padding
          this.settings[prop] = {
            ...this.settings[prop],
            ...newSettings[prop],
          };
        } else {
          this.settings[prop] = newSettings[prop];
        }
      }
    });

    this._createContainerBackground();
  }

  getSize() {
    const width = this.settings.width + this.settings.borderWidth;
    const height = this.settings.height + this.settings.borderWidth;

    return {
      width: width,
      height: height,
    };
  }

  setBorder(borderWidth, borderSize, borderRadius) {
    this.settings.borderWidth = borderWidth || this.settings.borderWidth;
    this.settings.borderSize = borderSize || this.settings.borderSize;
    this.settings.borderRadius = borderRadius || this.settings.borderRadius;

    this._createContainerBackground();
  }

  changeBorderColor(newBorderColor) {
    this.settings.baseBorderColor = newBorderColor;
    this.settings.borderColor = newBorderColor;
    this._createContainerBackground();
  }

  _configureSettings(containerSettings) {
    this.settings = {
      width: containerSettings.width || 300,
      height: containerSettings.height || 200,
      backgroundColor: containerSettings.backgroundColor || 0xffffff,
      baseBorderColor: containerSettings.borderColor || 0x000000,
      borderColor: containerSettings.borderColor || 0x000000,
      borderWidth: containerSettings.borderWidth || 2,
      borderRadius: containerSettings.borderRadius || 10,
      fontFamily: containerSettings.fontFamily || 'Lato',
      fontWeight: containerSettings.fontWeight || null,
      fontSize: containerSettings.fontSize || 20,
      fill: containerSettings.textColor || 0xffffff,
      align: containerSettings.align || 'center',
    };
  }

  _createContainerBackground() {
    const { width, height, backgroundColor, baseBorderColor, borderWidth, borderRadius } =
      this.settings;

    if (!this.background) {
      this.background = new PIXI.Graphics();
      this.addChildAt(this.background, 0); // Garante que o fundo fique atrás dos outros elementos
    } else {
      this.background.clear();
    }

    this.background.beginFill(backgroundColor);
    this.background.lineStyle(borderWidth, baseBorderColor);
    this.background.drawRoundedRect(0, 0, width, height, borderRadius);
    this.background.endFill();
  }
}
