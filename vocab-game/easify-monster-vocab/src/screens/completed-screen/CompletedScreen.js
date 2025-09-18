import * as CompletedScreenComponents from './components/completed-screen-components.js';
import * as CompletedScreenHelpers from './helpers/completed-screen-helpers.js';
import { Container } from "pixi.js"

export class CompletedScreen extends Container {
  constructor(totalScore) {
    super();
    this.totalScore = totalScore;
    this.activedStars = Math.min(Math.floor(this.totalScore / 1000), 5);

    this._createComponents();
  }

  _createComponents() {
    this._createTitle();
    this._createStars();
    this._createScoreText();
    this._createButtonNew();
  }

  _createTitle() {
    this.title = new CompletedScreenComponents.Title();
    this.addChild(this.title);
  }

  _createStars() {
    this.stars = CompletedScreenHelpers.createStars(this.activedStars);
    this.stars.forEach((star) => this.addChild(star));
  }

  _createScoreText() {
    this.scoreText = new CompletedScreenComponents.ScoreText(this.totalScore);
    this.addChild(this.scoreText);
  }

  _createButtonNew() {
    this.buttonNew = new CompletedScreenComponents.ButtonNew(this);
    this.addChild(this.buttonNew);
  }
}
