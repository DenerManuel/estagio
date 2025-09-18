import { BackButton } from '../../components/button/BackButton.js';
import { NavigationManager } from '../../core/NavigationManager.js';
import { PreGameScreenComponentsResponsive } from '../../styles/screens-components-responsive/pre-game-screen/pre-game-screen-components-responsive.js';
import * as PreGameComponents from './components/pre-game-screen-components.js';
import * as PreGameHelpers from './helpers/pre-game-screen-helpers.js';
import { Container } from "pixi.js"

export class PreGameScreen extends Container {
  constructor(category) {
    super();
    this.category = PreGameHelpers.pickRandomItems(category, 10);
    this.items = this.category.items;
    this.startIndex = 0;
    this.endIndex = 3;
    this.itemCards = [];
    this.selectedMode = 'score';

    this._initialize();
  }
  _initialize() {
    this._createComponents();
    this._setResponsiveStyles();
  }
  _createComponents() {
    this._createTitle();
    this._addItemCards();
    this._addItemNames();
    this._createButtons();
    PreGameHelpers.configureNavigationButtonEvents(this);
  }

  _createTitle() {
    this.title = new PreGameComponents.Title(this.category.title);
    this.addChild(this.title);
  }

  _addItemCards() {
    this.itemCards = PreGameHelpers.createItemCards(this.category);
    this.itemCards.forEach((itemCard) => this.addChild(itemCard));
  }

  _addItemNames() {
    this.itemNames = PreGameHelpers.createItensName(this.category);
    this.itemNames.forEach((itemName) => this.addChild(itemName));
  }

  _createButtons() {
    this.previousButton = new PreGameComponents.PreviousButton(this);
    this.nextButton = new PreGameComponents.NextButton(this);
    this.playButton = new PreGameComponents.PlayButton(this);
    this.chooseButton = new PreGameComponents.ChooseButton();
    this.configButton = new PreGameComponents.ConfigButton(this);
    this.scoreModeButton = new PreGameComponents.ScoreModeButton();
    this.heartModeButton = new PreGameComponents.HeartModeButton();

    this.scoreModeButton.setEvents(this);
    this.heartModeButton.setEvents(this);

    this.addChild(
      this.previousButton,
      this.nextButton,
      this.playButton,
      this.chooseButton,
      this.configButton
    );

    this._createBackButton();
  }

  _createBackButton() {
    this.backButton = new BackButton();
    this._setBackButtonEvents();
    this.addChild(this.backButton);
  }

  _setBackButtonEvents() {
    this.backButton.on('pointertap', () => {
      NavigationManager.getInstance().navigateTo('homeScreen');
    });
  }

  _showConfigModal() {
    this.overlay = PreGameHelpers.createOverlay();
    this.configModal = new PreGameHelpers.createConfigModal();
    this.closeButton = new PreGameComponents.CloseButton(this);

    this.configModal.addChild(this.scoreModeButton, this.heartModeButton, this.closeButton);
    this.addChild(this.overlay, this.configModal);
  }

  _hideConfigModal() {
    if (this.overlay) this.removeChild(this.overlay);
    if (this.configModal) this.removeChild(this.configModal);
  }

  _setResponsiveStyles() {
    const responsiveInstance = PreGameScreenComponentsResponsive.getInstance();
    responsiveInstance.updateComponents({
      title: this.title,
      itemCards: this.itemCards,
      itemNames: this.itemNames,
      previousButton: this.previousButton,
      nextButton: this.nextButton,
      playButton: this.playButton,
      chooseButton: this.chooseButton,
      configButton: this.configButton,
      scoreModeButton: this.scoreModeButton,
      heartModeButton: this.heartModeButton,
      backButton: this.backButton,
    });
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (isMobile) {
      responsiveInstance.changeComponentsStylesAndPositions();
    } else {
      responsiveInstance.resetComponentsStylesAndPositions();
    }
  }
}
