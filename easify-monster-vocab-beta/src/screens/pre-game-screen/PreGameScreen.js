import { BackButton } from '../../components/button/back-button.js';
import { positionItemContainers } from './components/item-container/itemContainerPosition.js';
import * as PreGameUI from "./components/pre-game-screen-components.js";
import { createItemContainers } from "./helpers/item-container/item-container-manager.js";
import { pickRandomItems } from './helpers/pick-random-items.js';

export class PreGameScreen extends PIXI.Container {
  constructor(app, category) {
    super();
    this.app = app;
    this.originalWidth = this.app.screen.width
    this.originalHeight = this.app.screen.height
    this.category = pickRandomItems(category);
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
    this.title = new PreGameUI.Title(this.category.title);
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
    this.previousButton = new PreGameUI.PreviousButton()
    this.nextButton = new PreGameUI.NextButton()
    this.playButton = new PreGameUI.PlayButton();
    this.chooseButton = new PreGameUI.ChooseButton()
    this.configButton = new PreGameUI.ConfigButton(this)
    this.scoreModeButton = new PreGameUI.ScoreModeButton()
    this.heartModeButton = new PreGameUI.HeartModeButton()

    this.scoreModeButton.setEvents(this)
    this.heartModeButton.setEvents(this)

    this.addChild(
      this.previousButton, this.nextButton,
      this.playButton, this.chooseButton,
      this.configButton
    );
  }
  _configureNavigationButtonEvents() {
    this.previousButton.on('pointertap', () => this._goToPrevious());
    this.nextButton.on('pointertap', () => this._goToNext());
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

  _showConfigModal() {
    this._createOverlay()
    this._createConfigModal()
    this._createCloseButton()
  }
  _createOverlay() {
    this.overlay = new PreGameUI.Overlay()
    this.addChild(this.overlay);
  }
  _createConfigModal() {
    this.configModal = new PreGameUI.ConfigModal()
  }
  _hideConfigModal() {
    if (this.overlay) this.removeChild(this.overlay);
    if (this.configModal) this.removeChild(this.configModal);
  }
  _createCloseButton() {
    this.configModal.addChild(this.scoreModeButton, this.heartModeButton);

    const closeButton = new PreGameUI.CloseButton(this)
    this.configModal.addChild(closeButton);

    this.addChild(this.configModal);
  }

  addBackButton() {
    this.backButton = new BackButton();
    this.addChild(this.backButton);

    return this.backButton;
  }
}