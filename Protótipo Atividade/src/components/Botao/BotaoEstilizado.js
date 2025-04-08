import { FundoDoBotao } from './FundoDoBotao.js';
import { TextoDoBotao } from './TextoDoBotao.js';
import { InteracaoDoBotao } from './InteracaoDoBotao.js';

/**
 * Componente de botão estilizado e interativo
 * Combina fundo, texto e interações em um único componente
 */
export class BotaoEstilizado extends PIXI.Container {
  /**
   * @param {string} texto - Texto a ser exibido no botão
   * @param {Object} [opcoes] - Configurações personalizadas
   * @param {number} [opcoes.largura=200] - Largura em pixels
   * @param {number} [opcoes.altura=50] - Altura em pixels
   * @param {number} [opcoes.corFundo=0x4CAF50] - Cor de fundo (hexadecimal)
   * @param {number} [opcoes.corHover=0x45a049] - Cor no estado hover
   * @param {number} [opcoes.raioBorda=32] - Raio das bordas arredondadas
   * @param {number} [opcoes.tamanhoFonte=25] - Tamanho da fonte do texto
   * @param {number} [opcoes.corTexto=0xFFFFFF] - Cor do texto (hexadecimal)
   * @param {boolean} [opcoes.desativado=false] - Se o botão começa desativado
   */
  constructor(texto, opcoes = {}) {
    super();

    this._configurarOpcoes(opcoes);
    this._inicializarComponentes(texto);
    this._setupInteracao();

    if (this.config.desativado) {
      this.desativar();
    }
  }

  /**
   * Configura as opções padrão e personalizadas
   * @private
   * @param {Object} opcoes - Opções passadas no construtor
   */
  _configurarOpcoes(opcoes) {
    this.config = {
      largura: 200,
      altura: 50,
      corFundo: 0x4CAF50,
      corHover: 0x45a049,
      raioBorda: 32,
      desativado: false,
      ...opcoes // Sobrescreve com opções personalizadas
    };

    this.configTexto = {
      tamanhoFonte: 25,
      corTexto: 0xFFFFFF,
      ...opcoes // Mantém apenas propriedades relevantes para o texto
    };
  }

  /**
   * Inicializa os componentes visuais do botão
   * @private
   * @param {string} texto - Texto do botão
   */
  _inicializarComponentes(texto) {
    this._criarFundo();
    this._criarTexto(texto);
  }

  /**
   * Cria o elemento de fundo do botão
   * @private
   */
  _criarFundo() {
    this.fundo = new FundoDoBotao(
      this.config.largura,
      this.config.altura,
      this.config.raioBorda,
      this.config.corFundo
    );
    this.addChild(this.fundo);
  }

  /**
   * Cria o elemento de texto do botão
   * @private
   * @param {string} texto - Texto a ser exibido
   */
  _criarTexto(texto) {
    this.texto = new TextoDoBotao(texto, this.configTexto);
    this.texto.centralizar(this.config.largura, this.config.altura);
    this.addChild(this.texto);
  }

  /**
   * Configura as interações do botão
   * @private
   */
  _setupInteracao() {
    this.interacao = new InteracaoDoBotao(this, this.config);
  }

  /**
   * Ativa o botão (permite interação)
   */
  ativar() {
    this.interacao.ativar();
    this.fundo.beginFill = this.config.corFundo;
    this.alpha = 1;
    this.interactive = true;
    this.buttonMode = true;
  }

  /**
   * Desativa o botão (bloqueia interação)
   */
  desativar() {
    this.interacao.desativar();
    this.fundo.beginFill = 0x888888; // Cor cinza para estado desativado
    this.alpha = 0.7;
    this.interactive = false;
    this.buttonMode = false;
  }

  /**
   * Altera o texto do botão
   * @param {string} novoTexto - Novo texto a ser exibido
   */
  setTexto(novoTexto) {
    this.texto.setTexto(novoTexto);
    this.texto.centralizar(this.config.largura, this.config.altura);
  }

  /**
   * Altera a cor de fundo do botão
   * @param {number} cor - Nova cor (hexadecimal)
   */
  setCorFundo(cor) {
    this.config.corFundo = cor;
    this.fundo.setCor(cor);
  }
}