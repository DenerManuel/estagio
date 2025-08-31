import { App } from '../../app/App.js';
import { HomeScreenComponentsResponsive } from '../../styles/screens-components-responsive/home-screen/home-screen-components-responsive.js';
import * as HomeComponents from './components/home-screen-components.js';

export class HomeScreen extends PIXI.Container {
  constructor(category) {
    super();
    this.category = category;
    this._createComponents();
    this._setResponsiveStyles();
  }

  _createComponents() {
    this._createTitle();
    this._createButtons();
  }

  _createTitle() {
    this.title = new HomeComponents.Title();
    this.addChild(this.title);
  }

  _createButtons() {
    this.startButton = new HomeComponents.StartButton();
    this.chooseButton = new HomeComponents.ChooseButton();
    this.reviewButton = new HomeComponents.ReviewButton();
    this.addChild(this.startButton, this.chooseButton, this.reviewButton);
  }

  _setResponsiveStyles() {
    this.componentsResponsive = HomeScreenComponentsResponsive.getInstance({
      title: this.title,
      startButton: this.startButton,
      chooseButton: this.chooseButton,
      reviewButton: this.reviewButton,
    });
  }
}
