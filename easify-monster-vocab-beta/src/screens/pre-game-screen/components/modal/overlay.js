import { APP_SIZE } from "../../../../styles/size/app-size.js";

export class Overlay extends PIXI.Graphics {
  constructor() {
    super()
    this._init()
  }
  _init() {
    this.beginFill(0x000000, 0.5);
    this.drawRect(0, 0, APP_SIZE.width, APP_SIZE.height);
    this.endFill();
    this.eventMode = 'dynamic';
  }
}