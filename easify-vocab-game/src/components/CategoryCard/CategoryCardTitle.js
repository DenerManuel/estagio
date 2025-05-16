export class CategoryCardTitle extends PIXI.Text {
  constructor(title, categoryCardOptions) {
    super(title, {
      fontFamily: categoryCardOptions.fontFamily,
      fontSize: categoryCardOptions.fontSize,
      fontWeight: categoryCardOptions.fontWeight,
      fill: categoryCardOptions.textColor
    });
    this._positionCategoryCardTitle(categoryCardOptions)
  }
  _positionCategoryCardTitle(categoryCardOptions) {
    const CARD_WIDTH = categoryCardOptions.width
    const CARD_HEIGHT = categoryCardOptions.height

    this.anchor.set(0.5);
    this.position.set(CARD_WIDTH / 2, CARD_HEIGHT - 20);
  }
}