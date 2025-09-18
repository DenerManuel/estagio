import { Text } from "pixi.js"

export class CardTitle extends Text {
  constructor(title, cardStyles) {
    super(title, {
      fontFamily: cardStyles.fontFamily,
      fontSize: cardStyles.fontSize,
      fontWeight: cardStyles.fontWeight,
      fill: cardStyles.textColor,
    });
    this._setPosition(cardStyles);
  }
  _setPosition(cardStyles) {
    this.anchor.set(0.5);
    this.position.set(cardStyles.width / 2, cardStyles.height - 20);
  }
}
