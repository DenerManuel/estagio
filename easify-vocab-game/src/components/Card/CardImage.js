export class CardImage extends PIXI.Sprite {
  constructor(imagePath, cardWidth, cardHeight) {
    const texture = PIXI.Assets.cache.get(imagePath);

    if (texture) {
      super(texture); // Use a textura pré-carregada
    } else {
      console.warn(`Texture não encontrada para ${imagePath}. Carregando diretamente.`);
      super(PIXI.Texture.from(imagePath)); // Fallback para carregar diretamente
    }

    this.anchor.set(0.5);
    this.position.set(cardWidth / 2, cardHeight / 2 - 10);
  }
}