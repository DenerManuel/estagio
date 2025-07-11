import { BackButton } from '../../components/button/back-button.js';
import * as ReviewUI from './components/review-screen-components.js';
import * as ReviewHelpers from "./helpers/review-screen-helpers.js";

export class ReviewScreen extends PIXI.Container {
  constructor(app, category) {
    super();
    this.app = app;
    this.appContainer = document.getElementById('game-container')
    this.category = category;
    this.currentIndex = 0;
    this.visibleText = true;
    this.currentName = '';

    this._initialize();
  }

  async _initialize() {
    await this._loadCardImages();
    this._addComponents();
    this._updateDisplayedContent();
  }

  async _loadCardImages() {
    this.cardImages = ReviewHelpers.loadCardImages(this.category);
  }

  _addComponents() {
    this._createImageContainer();
    this._configureImage();
    this._createNavigationButtons();
    this._createWordContainer();
    this._createFooterContainer();
    this._configureEvents();
  }

  _createImageContainer() {
    this.imageContainer = new ReviewUI.ImageContainer(this.appContainer)
    this.addChild(this.imageContainer);
  }

  _configureImage() {
    this.cardImages = ReviewHelpers.configureReviewScreenImages(this.cardImages, this.imageContainer)
  }

  _createNavigationButtons() {
    this.previousButton = new ReviewUI.PreviousButton()
    this.nextButton = new ReviewUI.NextButton()
    this.addChild(this.previousButton, this.nextButton);
  }

  _createWordContainer() {
    this.wordContainer = new ReviewUI.WordContainer(this.appContainer)
    this.wordText = new ReviewUI.WordText()
    this.toggleButton = new ReviewUI.ToggleButton()
    this.soundButton = new ReviewUI.SoundButton()

    this.wordContainer.addChild(this.wordText);
    this.addChild(this.toggleButton, this.soundButton, this.wordContainer);
  }

  _createFooterContainer() {
    this.footerContainer = new ReviewUI.FooterContainer(this.appContainer)
    this.footerTitle = new ReviewUI.FooterTitle()
    this.footerQuantity = new ReviewUI.FooterQuantity()

    this.footerContainer.addChild(this.footerTitle, this.footerQuantity);
    this.addChild(this.footerContainer);
  }

  _configureEvents() {
    this.previousButton.on('pointertap', () => this._changeCurrentIndex(-1));
    this.nextButton.on('pointertap', () => this._changeCurrentIndex(1));
    this.toggleButton.on('pointertap', () => this._toggleWordVisibility());
  }
  _changeCurrentIndex(navigationStep) {
    this.currentIndex += navigationStep;
    const REACH_END = this.currentIndex >= this.category.items.length;
    const REACH_START = this.currentIndex < 0;

    if (REACH_END) this.currentIndex = 0;
    if (REACH_START) this.currentIndex = this.category.items.length - 1;
    this._updateDisplayedContent();
  }

  _toggleWordVisibility() {
    const TOGGLE_HIDDEN_TEXT = 'Ⱦ';
    const TOGGLE_VISIBLE_TEXT = 'T';

    this.visibleText = !this.visibleText;
    if (!this.visibleText) {
      this.toggleButton.editText(TOGGLE_HIDDEN_TEXT)
      this.currentName = this.wordText.text
      this.wordText.text = '?'
    } else {
      this.toggleButton.editText(TOGGLE_VISIBLE_TEXT)
      this.wordText.text = this.currentName
    }
  }

  _updateDisplayedContent() {
    const itemName = this.category.items[this.currentIndex].name;

    ReviewHelpers.updateImage(this.imageContainer, this.cardImages, this.currentIndex)
    this.currentName = ReviewHelpers.updateWord(itemName, this.visibleText, this.wordText)
    ReviewHelpers.updateFooter(this.footerTitle, this.footerQuantity, this.category, this.currentIndex)
  }

  addBackButton() {
    this.backButton = new BackButton();
    this.addChild(this.backButton);

    return this.backButton;
  }
}