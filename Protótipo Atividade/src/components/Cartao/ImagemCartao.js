/**
 * Cria a imagem central do cartão
 */
export class ImagemCartao extends PIXI.Sprite {
  constructor(caminhoImagem, larguraCartao, alturaCartao) {
    super(PIXI.Texture.from(caminhoImagem));

    this.anchor.set(0.5);
    this.position.set(larguraCartao / 2, alturaCartao / 2 - 10);
  }
}