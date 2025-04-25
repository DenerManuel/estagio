import { loadCardImages } from './components/CardManager.js';
import { createImageContainer } from './components/ImageContainer.js';
import { configureImage } from './components/ImageManager.js';
import { createNavigationButtons } from './components/NavigationButtons.js';
import { WordContainerManager } from './components/WordContainer.js';
import { FooterContainerManager } from './components/FooterContainer.js';
import { updateFooter, updateImage, updateWord } from './components/ItemUpdater.js';
import { createBackButton } from '../../components/Button/BackButton.js';

export class ReviewScreen extends PIXI.Container {
  constructor(app, category) {
    super();
    this.app = app;
    this.appContainer = document.getElementById('game-container')
    this.category = category;
    this.currentIndex = 0;
    this.visibleText = true
    this.currentName = ''

    this._initialize()
  }

  async _initialize() {
    await this._loadCardImages();
    this._createLayout();
    this._updateItems();
  }

  async _loadCardImages() {
    this.cardImages = loadCardImages(this.category);
  }

  _createLayout() {
    this._addImageContainer();
    // this._addImageBackground();
    this._configureImage();
    this._addNavigationButtons();
    this._addWordContainer();
    this._addFooterContainer();
    this._configureButtonEvents();
  }

  _addImageContainer() {
    this.imageContainer = createImageContainer(this.appContainer);
    this.addChild(this.imageContainer);
  }

  _configureImage() {
    this.cardImages = configureImage(this.cardImages, this.imageContainer)
  }

  _addNavigationButtons() {
    this.previousButton = createNavigationButtons.createPreviousButton();
    this.nextButton = createNavigationButtons.createNextButton();

    this.addChild(this.previousButton, this.nextButton);
  }

  _addWordContainer() {
    this.wordContainer = WordContainerManager.createWordContainer(this.appContainer);
    this.wordText = WordContainerManager.createText(this.wordContainer);
    this.toggleButton = WordContainerManager.createToggleButton();
    this.soundButton = WordContainerManager.createSoundButton();

    this.wordContainer.addChild(this.wordText);
    this.addChild(this.toggleButton, this.soundButton, this.wordContainer);
  }

  _addFooterContainer() {
    this.footerContainer = FooterContainerManager.createFooterContainer(this.appContainer);
    this.footerTitle = FooterContainerManager.createFooterTitle(this.footerContainer);
    this.footerQuantity = FooterContainerManager.createFooterQuantity(this.footerContainer);

    this.footerContainer.addChild(this.footerTitle, this.footerQuantity);
    this.addChild(this.footerContainer);
  }

  _configureButtonEvents() {
    this.previousButton.on('click', () => this._navigate(-1));
    this.nextButton.on('click', () => this._navigate(1));
    this.toggleButton.on('click', () => this._toggleWord());
  }
  _navigate(direction) {
    this.currentIndex += direction;
    const REACH_END = this.currentIndex >= this.category.items.length;
    const REACH_START = this.currentIndex < 0;

    if (REACH_END) this.currentIndex = 0;
    if (REACH_START) this.currentIndex = this.category.items.length - 1;
    this._updateItems();
  }

  _toggleWord() {
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

  _updateItems() {
    const itemName = this.category.items[this.currentIndex].name;

    updateImage(this.imageContainer, this.cardImages, this.currentIndex)
    this.currentName = updateWord(itemName, this.visibleText, this.wordText)
    updateFooter(this.footerTitle, this.footerQuantity, this.category, this.currentIndex)
  }

  addBackButton() {
    this.backButton = createBackButton(this.app);
    this.addChild(this.backButton);

    return this.backButton;
  }
}