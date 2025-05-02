export class CategoryCardImage extends PIXI.Sprite {
  constructor(imagePath, categoryCardOptions) {
    const texture = PIXI.Assets.cache.get(imagePath);

    if (texture) {
      super(texture); // Use a textura pré-carregada
    } else {
      console.warn(`Texture não encontrada para ${imagePath}. Carregando diretamente.`);
      super(PIXI.Texture.from(imagePath)); // Fallback para carregar diretamente
    }

    this._adjustImage(categoryCardOptions);
  }
  _adjustImage(categoryCardOptions) {
    this.width = categoryCardOptions.width
    this.height = categoryCardOptions.height
    this.anchor.set(0.5);
    this.position.set(this.width / 2, this.height / 2);
  }
}