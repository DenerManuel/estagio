import * as FirstRoundHelpers from './helpers/first-round-helpers.js';

export class FirstRoundGroup extends PIXI.Container {
  constructor(app, itemCards) {
    super();
    this.appContainer = document.getElementById('game-container');
    this.itemCards = itemCards;
    this.itemName = null;
    this.selectedCards = [];
    this.selectedNames = [];
    this.currentRound = 1;
    this.itemCardSelected = null;

    this._initialize();
  }

  _initialize() {
    this._createItemName();
    FirstRoundHelpers.addItemCards(this, 3);
  }

  _createItemName() {
    this.itemName = FirstRoundHelpers.createItemName(this);
    this.addChild(this.itemName);
  }
}
