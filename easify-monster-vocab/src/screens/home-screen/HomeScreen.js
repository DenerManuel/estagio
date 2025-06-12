import { createTitle } from "./components/title.js";
import { createStartButton } from "./components/startButton.js";
import { createChooseAndReviewButton } from "./components/chooseAndReviewButton.js";

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
    this.title = createTitle(this.app);
    this.addChild(this.title);
  }

  _addButtons() {
    this.startButton = createStartButton(this.app);

    const [chooseButton, reviewButton] = createChooseAndReviewButton(this.app, this.startButton);
    
    this.chooseButton = chooseButton;
    this.reviewButton = reviewButton;
    this.addChild(this.startButton, this.chooseButton, this.reviewButton)
  }
}