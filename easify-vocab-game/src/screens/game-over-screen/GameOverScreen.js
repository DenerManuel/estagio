import * as GameOverComponents from './components/game-over-screen-components.js';

export class GameOverScreen extends PIXI.Container {
  constructor(gameScreen) {
    super();
    this._createComponents(gameScreen);
  }

  _createComponents(gameScreen) {
    this._createTitle();
    this._createButtons(gameScreen);
  }

  _createTitle() {
    this.title = new GameOverComponents.Title();
    this.addChild(this.title);
  }

  _createButtons(gameScreen) {
    this._createRetryButton(gameScreen);
    this._createBackButton();
  }

  _createRetryButton(gameScreen) {
    this.retryButton = new GameOverComponents.RetryButton(gameScreen, this);
    this.addChild(this.retryButton);
  }

  _createBackButton() {
    this.backButton = new GameOverComponents.BackButton(this);
    this.addChild(this.backButton);
  }
}
