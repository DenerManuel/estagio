import {
  Title, StartButton, ChooseButton, ReviewButton
} from "./components/home-screen-components.js"

export class HomeScreen extends PIXI.Container {
  constructor(app) {
    super();
    this.app = app

    this._addComponents();
  }

  _addComponents() {
    this._addTitle();
    this._addButtons();
  }

  _addTitle() {
    this.title = new Title()
    this.addChild(this.title);
  }

  _addButtons() {
    this.startButton = new StartButton();
    this.chooseButton = new ChooseButton();
    this.reviewButton = new ReviewButton();
    this.addChild(this.startButton, this.chooseButton, this.reviewButton)
  }
}