import { BotaoEstilizado } from '../components/Botao/BotaoEstilizado.js';

/**
 * Tela inicial do aplicativo
 * Exibe o título principal e botões de navegação
 */
export class TelaInicial extends PIXI.Container {
  /**
   * @param {PIXI.Application} app - Instância do aplicativo PIXI
   * @param {Object} [opcoes] - Configurações da tela
   * @param {number} [opcoes.margemBotoes=10] - Espaçamento entre botões
   */
  constructor(app, opcoes = {}) {
    super();
    this.app = app;
    this.opcoes = {
      margemBotoes: 10,
      ...opcoes
    };

    // Centraliza o container
    this.pivot.set(this.app.screen.width / 2, this.app.screen.height / 2);
    this.position.set(this.app.screen.width / 2, this.app.screen.height / 2);

    this._criarComponentes();
  }

  /**
   * Cria todos os elementos visuais da tela
   * @private
   */
  _criarComponentes() {
    this._criarTitulo();
    this._criarBotoes();
  }

  /**
   * Cria e configura o título principal
   * @private
   */
  _criarTitulo() {
    this.titulo = new PIXI.Text('Easify Vocab', {
      fontFamily: 'Arial',
      fontSize: 50,
      fill: 0xFFFFFF,
      align: 'center',
      dropShadow: true,
      dropShadowDistance: 2,
      dropShadowBlur: 4
    });

    this.titulo.anchor.set(0.5);
    this.titulo.position.set(
      this.app.screen.width / 2,
      this.app.screen.height / 2 - 150
    ); // Relativo ao centro do container
    this.addChild(this.titulo);
  }

  /**
   * Cria e posiciona os botões de ação
   * @private
   */
  _criarBotoes() {
    const configBotaoPrincipal = {
      largura: 220,
      altura: 90,
      corFundo: 0xFB7302,
      corHover: 0xFCD2AE,
      tamanhoFonte: 24
    };

    const configBotaoSecundario = {
      largura: 180,
      altura: 85,
      corFundo: 0xFB7302,
      corHover: 0xFCD2AE,
      tamanhoFonte: 22
    };

    // Botão Start (principal)
    this.botaoIniciar = new BotaoEstilizado('Start', configBotaoPrincipal);
    this.botaoIniciar.position.set(
      this.app.screen.width / 2 - 110,
      this.app.screen.height / 2 - 30
    );

    // Botão Choose
    this.botaoEscolher = new BotaoEstilizado('Choose', configBotaoSecundario);
    this.botaoEscolher.position.set(
      this.app.screen.width / 2 - 90,
      this.botaoIniciar.y + this.botaoIniciar.height + this.opcoes.margemBotoes
    );

    // Botão Review (exposto como propriedade para navegação)
    this.botaoRevisao = new BotaoEstilizado('Review', configBotaoSecundario);
    this.botaoRevisao.position.set(
      this.app.screen.width / 2 - 90,
      this.botaoEscolher.y + this.botaoEscolher.height + this.opcoes.margemBotoes
    );

    this.addChild(this.botaoIniciar, this.botaoEscolher, this.botaoRevisao);
  }

  /**
   * Chamado quando a tela é exibida
   * @param {Object} [dados] - Dados de inicialização
   */
  onMontar(dados = {}) {
    // Pode adicionar animação de entrada se desejar
    this.visible = true;
    this.alpha = 0;
    this.app.ticker.add(this._fadeIn, this);
  }

  /**
   * Animação de fade in
   * @private
   */
  _fadeIn() {
    if (this.alpha < 1) {
      this.alpha += 0.05;
    } else {
      this.app.ticker.remove(this._fadeIn, this);
    }
  }

  /**
   * Chamado quando a tela é ocultada
   */
  onDesmontar() {
    // Limpa animações
    this.app.ticker.remove(this._fadeIn, this);
  }
}