export class ItemCardImage extends PIXI.Sprite {
  constructor(imageTexture, cardOptions) {
    super(imageTexture);
    this._adjustImage(cardOptions);
  }

  _adjustImage(cardOptions) {
    this.width = cardOptions.width - 45;
    this.height = cardOptions.height - 45;
    this.anchor.set(0.5);
    this.position.set(cardOptions.width / 2, cardOptions.height / 2);
  }
}
