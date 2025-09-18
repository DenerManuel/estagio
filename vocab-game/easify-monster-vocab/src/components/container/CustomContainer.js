import { Container, Graphics } from 'pixi.js';
import { configureSettings } from './configure-custom-container-settings.js';

/**
 * @class CustomContainer
 * @extends PIXI.Container
 * @description Um contêiner customizável que estende `PIXI.Container`, com suporte para
 * fundo, borda, e cantos arredondados. Ele serve como uma base para outros
 * componentes de UI.
 */
export class CustomContainer extends Container {
  /**
   * Cria uma instância de CustomContainer.
   * @param {PIXI.Container} [parentContainer=null] - O contêiner pai ao qual este será adicionado.
   * @param {object} [containerSettings={}] - Configurações para a aparência do contêiner.
   * @param {number} [containerSettings.width] - Largura do contêiner.
   * @param {number} [containerSettings.height] - Altura do contêiner.
   * @param {number} [containerSettings.backgroundColor] - Cor de fundo.
   * @param {number} [containerSettings.borderColor] - Cor da borda.
   * @param {number} [containerSettings.borderWidth] - Largura da borda.
   * @param {number} [containerSettings.borderRadius] - Raio da borda para cantos arredondados.
   */
  constructor(parentContainer = null, containerSettings = {}) {
    super();
    this.parentContainer = parentContainer;
    this.settings = configureSettings(containerSettings);
    this.settings.baseBorderColor = this.settings.borderColor;
    this._createContainerBackground();
  }

  /**
   * Atualiza o estilo do contêiner com novas configurações.
   * Apenas as propriedades fornecidas em `newSettings` serão alteradas.
   * @param {object} [newSettings={}] - Um objeto com as novas configurações de estilo a serem aplicadas.
   */
  updateStyle(newSettings = {}) {
    const newStyleSettings = { ...this.settings };
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
        if (
          typeof newSettings[prop] === 'object' &&
          !Array.isArray(newSettings[prop]) &&
          newSettings[prop] !== null
        ) {
          // Merge deeply for nested objects like padding
          newStyleSettings[prop] = {
            ...newStyleSettings[prop],
            ...newSettings[prop],
          };
        } else {
          newStyleSettings[prop] = newSettings[prop];
        }
      }
    });
    this._applySettings(newStyleSettings);
  }

  /**
   * Altera a cor da borda do contêiner e redesenha seu fundo.
   * @param {number} newBorderColor - A nova cor da borda em formato hexadecimal (ex: 0xFF0000).
   */
  changeBorderColor(newBorderColor) {
    this.settings.baseBorderColor = newBorderColor;
    this.settings.borderColor = newBorderColor;
    this._createContainerBackground();
  }

  /**
   * Aplica novas configurações e redesenha o fundo do contêiner.
   * @private
   * @param {object} newSettings - O novo objeto de configurações.
   */
  _applySettings(newSettings) {
    this.settings = newSettings;
    this._createContainerBackground();
  }

  /**
   * Cria ou atualiza o fundo gráfico do contêiner (um `PIXI.Graphics`).
   * @private
   */
  _createContainerBackground() {
    const { width, height, backgroundColor, baseBorderColor, borderWidth, borderRadius } =
      this.settings;

    if (!this.background) {
      this.background = new Graphics();
      this.addChildAt(this.background, 0); // Garante que o fundo fique atrás dos outros elementos
    } else if (this.background) {
      this.background.clear();
    }

    this.background.beginFill(backgroundColor);
    this.background.lineStyle(borderWidth, baseBorderColor);
    this.background.drawRoundedRect(0, 0, width, height, borderRadius);
    this.background.endFill();
  }
}
