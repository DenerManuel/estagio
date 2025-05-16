import { createTitle } from "./components/Title.js";
import { createItemContainers } from "./components/ItemContainer/ItemContainerManager.js";
import { NavigationButtons } from "./components/Button/NavigationButtons.js";
import { positionItemContainers } from './components/ItemContainer/ItemContainerPosition.js'
import { createBackButton } from '../../components/Button/BackButton.js';
import { createPlayButton } from "./components/Button/PlayButton.js";
import { createChooseButton } from "./components/Button/ChooseButton.js";

export class PreGameScreen extends PIXI.Container {
  constructor(app, category) {
    super();
    this.app = app;
    this.category = category;
    this.startIndex = 0;
    this.endIndex = 3;
    this.itemCards = [];

    this._initialize();
  }
  _initialize() {
    this._addComponents();
  }
  _addComponents() {
    this._addTitle();
    this._addItemCards();
    this._addButtons();
    this._configureNavigationButtonEvents();
  }

  _addTitle() {
    this.title = createTitle(this.category.title, this.app);
    this.addChild(this.title);
  }

  _addItemCards() {
    const [itemCards, itemNames] = createItemContainers(this.category, this.app)
    this.itemCards = itemCards
    this.itemNames = itemNames

    this.itemCards.forEach((itemCard) => {
      this.addChild(itemCard)
    })
    this.itemNames.forEach((itemName) => {
      this.addChild(itemName)
    })
  }

  _addButtons() {
    this.previousButton = NavigationButtons.createPreviousButton();
    this.nextButton = NavigationButtons.createNextButton();
    this.playButton = createPlayButton(this.app);
    this.chooseButton = createChooseButton(this.app)

    this.addChild(this.previousButton, this.nextButton, this.playButton, this.chooseButton);
  }
  _configureNavigationButtonEvents() {
    this.previousButton.on('click', () => this._goToPrevious());
    this.nextButton.on('click', () => this._goToNext());
  }

  _goToPrevious() {
    if ((this.endIndex - 1) < 0) {
      this.endIndex = 9
    } else {
      this.endIndex--
    }
    if ((this.startIndex - 1) < 0) {
      this.startIndex = 9
    } else {
      this.startIndex--
    }
    positionItemContainers(this.itemCards, this.itemNames, this.startIndex, this.endIndex)
  }
  _goToNext() {
    if ((this.endIndex + 1) > 9) {
      this.endIndex = 0
    } else {
      this.endIndex++
    }
    if ((this.startIndex + 1) > 9) {
      this.startIndex = 0
    } else {
      this.startIndex++
    }
    positionItemContainers(this.itemCards, this.itemNames, this.startIndex, this.endIndex)
  }
  
  addBackButton() {
    this.backButton = createBackButton(this.app);
    this.addChild(this.backButton);

    return this.backButton;
  }
}