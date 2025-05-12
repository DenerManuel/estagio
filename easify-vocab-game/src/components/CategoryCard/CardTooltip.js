export class CardTooltip extends PIXI.Container {
  constructor(items, cardWidth) {
    super();
    this.visible = false;
    this.items = items;
    this.cardWidth = cardWidth;

    this._createBackground();
    this._createTitle();
    this._createText();
    this._positionTooltip();
  }

  _createBackground() {
    const background = new PIXI.Graphics()
      .beginFill(0xFFFFFF)
      .drawRect(0, 0, this.cardWidth + 40, 100)
      .endFill();
    this.addChild(background);
  }
  _createTitle() {
    const title = new PIXI.Text(
      this.items.title,
      {
        fontFamily: 'Arial',
        fontSize: 14,
        fill: 0x000000,
        align: 'center'
      }
    );
    title.position.set(10, 30);
    this.addChild(title);
  }
  _createText() {
    // const text = new PIXI.Text(
    //   `${this.items[0].name}, `,
    //   { 
    //     fontFamily: 'Arial', 
    //     fontSize: 14, 
    //     fill: 0x000000, 
    //     wordWrap: true, 
    //     wordWrapWidth: this.cardWidth 
    //   }
    // );
    // text.position.set(10, 30);
    // this.addChild(text);
  }
  _positionTooltip() {
    this.y = -110;
    this.x = -20;
  }
}