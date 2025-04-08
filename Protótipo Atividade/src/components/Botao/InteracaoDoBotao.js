/**
 * Classe que gerencia todas as interações e efeitos visuais do botão
 */
export class InteracaoDoBotao {
  constructor(botao, config) {
    this.botao = botao;
    this.config = config;
    
    this.botao.eventMode = 'dynamic';
    this.botao.cursor = 'pointer';

    this.configurarEventos();
  }

  configurarEventos() {
    this.botao.on('pointerover', () => this.mouseEmCima());
    this.botao.on('pointerout', () => this.mouseFora());
    this.botao.on('pointerup', () => this.cliqueLiberado());
  }

  mouseEmCima() {
    this.botao.fundo.mudarCor(this.config.corHover);
  }

  mouseFora() {
    this.botao.fundo.mudarCor(this.config.corFundo);
  }

  cliqueLiberado() {
    this.botao.fundo.mudarCor(this.config.corFundo)
  }
}