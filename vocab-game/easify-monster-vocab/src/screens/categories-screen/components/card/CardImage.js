import { Sprite } from "pixi.js"

export class CardImage extends Sprite {
  constructor(imageTexture, cardOptions) {
    super(imageTexture);
    this._adjustImage(cardOptions);
  }

  _adjustImage(cardOptions) {
    this.width = cardOptions.width - 40;
    this.height = cardOptions.height - 40;
    this.anchor.set(0.5);
    this.position.set(cardOptions.width / 2, cardOptions.height / 2 - 10);
  }
}
