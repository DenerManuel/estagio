/**
 * Cria o texto do título na parte inferior do cartão
 */
export class TituloCartao extends PIXI.Text {
  /**
   * @param {string} titulo - Texto a ser exibido
   * @param {number} larguraCartao - Largura total do cartão
   * @param {number} alturaCartao - Altura total do cartão
   */
  constructor(titulo, larguraCartao, alturaCartao) {
    super(titulo, {
      fontFamily: 'Arial',
      fontSize: 16,
      fontWeigth: 'bold',
      fill: 0xFB7302
    });
    
    this.anchor.set(0.5);
    this.position.set(larguraCartao / 2, alturaCartao - 20);
  }
}