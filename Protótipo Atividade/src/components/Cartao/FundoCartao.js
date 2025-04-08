/**
 * Cria o fundo visual do cartão com bordas arredondadas
 */
export class FundoCartao extends PIXI.Graphics {
  /**
   * @param {number} largura - Largura do cartão
   * @param {number} altura - Altura do cartão
   * @param {number} raioBorda - Raio das bordas arredondadas
   * @param {number} corFundo - Cor de fundo (hexadecimal)
   * @param {number} corBorda - Cor da borda (hexadecimal)
   */
  constructor(largura, altura, raioBorda, corFundo, corBorda) {
    super();
    this.largura = largura;
    this.altura = altura;
    this.raioBorda = raioBorda;
    this.corFundo = corFundo;
    this.corBorda = corBorda;
    
    this.desenharFundo();
  }

  /**
   * Redesenha o fundo com as configurações atuais
   */
  desenharFundo() {
    this.clear()
    this.beginFill(this.corFundo)
    this.lineStyle(2, this.corBorda)
    this.drawRoundedRect(0, 0, this.largura, this.altura, this.raioBorda)
    this.endFill();
  }

  mudarCorBorda(novaCor) {
    this.corBorda = novaCor;
    this.desenharFundo();
  }
}