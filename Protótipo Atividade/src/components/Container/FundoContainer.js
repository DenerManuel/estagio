import { ConfigContainer } from './config.js';

// Gerencia a criação e atualização do fundo visual
export class FundoContainer extends PIXI.Graphics {
  constructor(opcoes) {
    super();
    this._opcoes = { ...ConfigContainer.DEFAULTS, ...opcoes };
    this.desenhar();
  }

  atualizar(novasOpcoes) {
    this._opcoes = { ...this._opcoes, ...novasOpcoes };
    this.clear();
    this.desenhar();
  }

  desenhar() {
    const { largura, altura, corFundo, borda, corBorda, arredondamento } = this._opcoes;

    if (borda > 0) {
      this.lineStyle(borda, corBorda);
    }
    if (corFundo) {
      this.beginFill(corFundo);
    }
    if (arredondamento > 0) {
      this.drawRoundedRect(0, 0, largura, altura, arredondamento)
    } else {
      this.drawRect(0, 0, largura, altura);
    }
    if (corFundo) {
      this.endFill();
    }
  }
}