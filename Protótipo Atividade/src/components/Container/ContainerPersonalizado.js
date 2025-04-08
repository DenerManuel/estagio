import { ConfigContainer } from './config.js';
import { FundoContainer } from './FundoContainer.js';
import { Posicionador  } from './Posicionador/Posicionador.js';

// Classe principal que integra os módulos
export class ContainerPersonalizado extends PIXI.Container {
  constructor(opcoes = {}) {
    super();
    this._opcoes = { ...ConfigContainer.DEFAULTS, ...opcoes };
    this._fundo = null;

    if (this.deveCriarFundo()) {
      this.criarFundo();
    }
  }

  deveCriarFundo() {
    return this._opcoes.corFundo !== null || this._opcoes.borda > 0;
  }

  criarFundo() {
    this._fundo = new FundoContainer(this._opcoes);
    this.addChildAt(this._fundo, 0);
  }

  posicionar(config) {
    Posicionador.posicionar(this, this.parent, config);
  }

  atualizarOpcoes(novasOpcoes) {
    const opcoesPrecedentes = { ...this._opcoes };
    this._opcoes = { ...this._opcoes, ...novasOpcoes };

    if (this._fundo && this.precisaRedesenhar(opcoesPrecedentes, novasOpcoes)) {
      this._fundo.atualizar(this._opcoes);
    }
  }

  precisaRedesenhar(opcoesAntigas, novasOpcoes) {
    const propsVisuais = ['corFundo', 'borda', 'corBorda', 'arredondamento'];
    return propsVisuais.some(prop => 
      novasOpcoes[prop] !== undefined && 
      novasOpcoes[prop] !== opcoesAntigas[prop]
    );
  }
}