import { App } from '../../app/App.js';
import { BackButton } from '../../components/button/BackButton.js';
import { NavigationManager } from '../../core/NavigationManager.js';
import { ReviewScreenComponentsResponsive } from '../../styles/screens-components-responsive/review-screen/review-screen-components-responsive.js';
import * as ReviewComponents from './components/review-screen-components.js';
import * as ReviewHelpers from './helpers/review-screen-helpers.js';
import { Container } from "pixi.js"

export class ReviewScreen extends Container {
  constructor(category) {
    super();
    this.appContainer = document.getElementById('game-container');
    this.category = category;
    this.currentIndex = 0;
    this.visibleText = true;
    this.currentName = '';

    this._initialize();
  }

  async _initialize() {
    this._addComponents();
    ReviewHelpers.updateDisplayedContent(this);
    this._setResponsiveStyles();
  }

  _addComponents() {
    this._createImageContainer();
    this._createNavigationButtons();
    this._createWordContainer();
    this._createFooterContainer();
    this._addBackButton();
  }

  _createImageContainer() {
    this.imageContainer = new ReviewComponents.ImageContainer(this);
    this.addChild(this.imageContainer);
  }

  _createNavigationButtons() {
    this.previousButton = new ReviewComponents.PreviousButton();
    this.nextButton = new ReviewComponents.NextButton();
    ReviewHelpers.configureNavigationButtonEvents(this);

    this.addChild(this.previousButton, this.nextButton);
  }

  _createWordContainer() {
    this.wordContainer = new ReviewComponents.WordContainer(this.appContainer);
    this.wordText = new ReviewComponents.WordText();
    this.toggleButton = new ReviewComponents.ToggleButton();
    this.soundButton = new ReviewComponents.SoundButton();
    ReviewHelpers.configureToogleButtonEvents(this);

    this.wordContainer.addChild(this.wordText);
    this.addChild(this.toggleButton, this.soundButton, this.wordContainer);
  }

  _createFooterContainer() {
    this.footerContainer = new ReviewComponents.FooterContainer(this.appContainer);
    this.footerTitle = new ReviewComponents.FooterTitle();
    this.footerQuantity = new ReviewComponents.FooterQuantity();

    this.footerContainer.addChild(this.footerTitle, this.footerQuantity);
    this.addChild(this.footerContainer);
  }

  _addBackButton() {
    this.backButton = new BackButton();
    this._setBackButtonEvents();
    this.addChild(this.backButton);
  }

  _setBackButtonEvents() {
    this.backButton.on('pointertap', () => {
      NavigationManager.getInstance().navigateTo('categoriesScreen');
      App.getInstance().context = 'review';
    });
  }

  _setResponsiveStyles() {
    const responsiveInstance = ReviewScreenComponentsResponsive.getInstance();
    responsiveInstance.updateComponents({
      imageContainer: this.imageContainer,
      previousButton: this.previousButton,
      nextButton: this.nextButton,
      wordContainer: this.wordContainer,
      wordText: this.wordText,
      toggleButton: this.toggleButton,
      soundButton: this.soundButton,
      footerContainer: this.footerContainer,
      footerTitle: this.footerTitle,
      footerQuantity: this.footerQuantity,
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
