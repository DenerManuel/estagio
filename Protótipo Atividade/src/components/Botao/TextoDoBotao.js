/**
 * Componente de texto centralizado para botões.
 * Responsável por renderizar e posicionar texto em botões
 */
export class TextoDoBotao extends PIXI.Text {
  /**
   * @param {string} texto - Texto a ser exibido 
   * @param {Object} opcoes - Configurações do texto
   * @param {number} opcoes.tamanhoFonte - Tamanho da fonte (px)
   * @param {number} opcoes.corTexto - Cor do texto (hex)
   */
  constructor(texto, opcoes = {}) {
    super(texto, {
      fontFamily: 'Arial',
      fontSize: opcoes.tamanhoFonte || 22,
      fill: opcoes.corTexto || 0xFFFFFF,
      align: 'center'
    });
    
    this.anchor.set(0.5);
  }

  /**
   * Centraliza o texto no botão pai
   * @param {number} larguraBotao - Largura do botão
   * @param {number} alturaBotao - Altura do botão
   */
  centralizar(larguraBotao, alturaBotao) {
    this.position.set(larguraBotao / 2, alturaBotao / 2);
  }
}