/**
 * Componente gráfico para fundo de botão com bordas arredondadas
 * Responsável por:
 * - Renderizar o fundo estilizado do botão
 * - Gerenciar mudanças de aparência dinâmicas
 * - Fornecer feedback visual para interações
 */
export class FundoDoBotao extends PIXI.Graphics {
  /**
   * @param {number} largura - Largura em pixels
   * @param {number} altura - Altura em pixels
   * @param {number} raioBorda - Raio das bordas arredondadas (em pixels)
   * @param {number} corBase - Cor de fundo (hexadecimal)
   * @param {Object} [opcoes] - Configurações adicionais
   * @param {number} [opcoes.corBorda=0xFFFFFF] - Cor da borda
   * @param {number} [opcoes.espessuraBorda=4] - Espessura da borda (px)
   * @param {number} [opcoes.corDesativado=0x888888] - Cor quando desativado
   */
  constructor(largura, altura, raioBorda, corBase, opcoes = {}) {
    super();

    this.config = {
      corBorda: 0xFFFFFF,
      espessuraBorda: 4,
      corDesativado: 0x888888,
      ...opcoes
    };

    this.estado = {
      largura,
      altura,
      raioBorda,
      corBase,
      corAtual: corBase,
      desativado: false
    };

    this._renderizar();
  }

  /**
   * Renderiza/atualiza o fundo do botão
   * @private
   */
  _renderizar() {
    this.clear();

    // Borda
    this.lineStyle(
      this.config.espessuraBorda,
      this.config.corBorda
    );

    // Preenchimento
    this.beginFill(this.estado.corAtual);
    this.drawRoundedRect(
      0,
      0,
      this.estado.largura,
      this.estado.altura,
      this.estado.raioBorda
    );
    this.endFill();
  }

  /**
   * Altera a cor de fundo do botão
   * @param {number} novaCor - Cor hexadecimal
   */
  mudarCor(novaCor) {
    if (!this.estado.desativado) {
      this.estado.corBase = novaCor;
      this.estado.corAtual = novaCor;
      this._renderizar();
    }
  }

  /**
   * Ativa/desativa o botão visualmente
   * @param {boolean} [desativado=true] - Se deve desativar
   */
  setDesativado(desativado = true) {
    this.estado.desativado = desativado;
    this.estado.corAtual = desativado 
      ? this.config.corDesativado 
      : this.estado.corBase;
    this._renderizar();
  }

  /**
   * Atualiza o tamanho do botão
   * @param {number} largura - Nova largura
   * @param {number} altura - Nova altura
   */
  redimensionar(largura, altura) {
    this.estado.largura = largura;
    this.estado.altura = altura;
    this._renderizar();
  }

  /**
   * Efeito de hover (pode ser chamado pela InteracaoDoBotao)
   * @param {boolean} [hover=true] - Se está em estado hover
   */
  setHover(hover = true) {
    if (!this.estado.desativado) {
      this.estado.corAtual = hover 
        ? this._clarearCor(this.estado.corBase, 20) 
        : this.estado.corBase;
      this._renderizar();
    }
  }

  /**
   * Clareia uma cor hexadecimal
   * @private
   * @param {number} cor - Cor original
   * @param {number} percentual - Percentual para clarear
   * @returns {number} Nova cor hexadecimal
   */
  _clarearCor(cor, percentual) {
    const componenteVermelho = (cor >> 16) & 0xFF;
    const componenteVerde = (cor >> 8) & 0xFF;
    const componenteAzul = cor & 0xFF;

    const fatorClareamento = 1 + percentual / 100;
    
    const novoVermelho = Math.min(255, componenteVermelho * fatorClareamento);
    const novoVerde = Math.min(255, componenteVerde * fatorClareamento);
    const novoAzul = Math.min(255, componenteAzul * fatorClareamento);

    return (novoVermelho << 16) | (novoVerde << 8) | novoAzul;
  }
}