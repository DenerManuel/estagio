import { App } from '../../../../app/App.js';

export class Title extends PIXI.Text {
  constructor() {
    super('Game Over', {
      fontSize: 54,
      fill: 0xff4444,
      fontWeight: 'bold',
      align: 'center',
    });

    this._setPosition();
  }

  _setPosition() {
    const POSITION_X = App.getInstance().renderer.width / 2;
    const POSITION_Y = 200;

    this.anchor.set(0.5);
    this.position.set(POSITION_X, POSITION_Y);
  }
}
