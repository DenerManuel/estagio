export class CardTitle extends PIXI.Text {
  constructor(title, cardWidth, cardHeight) {
    super(title, {
      fontFamily: 'Arial',
      fontSize: 16,
      fontWeight: 'bold',
      fill: 0xFB7302
    });

    this.anchor.set(0.5);
    this.position.set(cardWidth / 2, cardHeight - 20);
  }
}