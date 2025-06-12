export class ItemCardImage extends PIXI.Sprite {
  constructor(imagePath, itemCardOptions) {
    const texture = PIXI.Assets.cache.get(imagePath);

    if (texture) {
      super(texture); // Use a textura pré-carregada
    } else {
      console.warn(`Texture não encontrada para ${imagePath}. Carregando diretamente.`);
      super(PIXI.Texture.from(imagePath)); // Fallback para carregar diretamente
    }

    this._adjustImage(itemCardOptions);
  }

  _adjustImage(itemCardOptions) {
    this.width = itemCardOptions.width
    this.height = itemCardOptions.height
    
    this.anchor.set(0.5);
    this.position.set(this.width / 2, this.height / 2);
  }
}