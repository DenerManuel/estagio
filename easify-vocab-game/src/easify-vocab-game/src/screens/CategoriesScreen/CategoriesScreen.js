import { loadCards } from "./components/Card/Cards.js";
import { addCurrentGroupCards, createCardGroups } from "./components/Card/CardsGroups.js";
import { Containers } from "./components/Containers/index.js"
import { addDefaultTooltipContent } from "./components/Tooltip/DefaultTooltipContent.js";
import { NavigationButtons } from './components/NavigationButtons.js';
import { createBackButton } from "../../components/Button/BackButton.js";

export class CategoriesScreen extends PIXI.Container {
  constructor(app, gameCategories) {
    super();
    this.app = app;
    this.appContainer = document.getElementById('game-container')
    this.gameCategories = gameCategories;
    this.currentGroupIndex = 0

    this._initialize()
  }
  async _initialize() {
    await this._loadCardGroups();
    this._addComponents();
  }

  async _loadCardGroups() {
    const cards = await loadCards(this.gameCategories);
    this.cardGroups = createCardGroups(cards);
  }

  _addComponents() {
    this._addCategoriesContainer();
    this._addTooltipContainer();
    this._addCardsContainer();
    this._addDefaultTooltipContent();
    this._addNavigationButtons();
    this._configureNavigationButtonEvents();
    this._updateDisplayedContent();
  }

  _addCategoriesContainer() {
    this.categoriesContainer = Containers.createCategoriesContainer(this.appContainer);
    this.addChild(this.categoriesContainer);
  }

  _addTooltipContainer() {
    this.tooltipContainer = Containers.createTooltipContainer(this.appContainer);
    this.addChild(this.tooltipContainer);
  }
  // Mostra "Select Content" caso nenhuma categoria estiver selecionada (hover)
  _addDefaultTooltipContent() {
    addDefaultTooltipContent(this.tooltipContainer)
  }

  _addCardsContainer() {
    this.cardsContainer = Containers.createCardsContainer(this.categoriesContainer);
    this.categoriesContainer.addChild(this.cardsContainer);
  }

  _addNavigationButtons() {
    this.previousButton = NavigationButtons.createPreviousButton();
    this.nextButton = NavigationButtons.createNextButton();

    this.addChild(this.previousButton, this.nextButton);
  }
  _configureNavigationButtonEvents() {
    this.previousButton.on('click', () => this._changeCurrentIndex(-1));
    this.nextButton.on('click', () => this._changeCurrentIndex(1));
  }
  _changeCurrentIndex(step) {
    this.currentGroupIndex += step;
    const REACH_END = this.currentGroupIndex >= this.cardGroups.length;
    const REACH_START = this.currentGroupIndex < 0;

    if (REACH_END) this.currentGroupIndex = 0;
    if (REACH_START) this.currentGroupIndex = this.cardGroups.length - 1;
    this._updateDisplayedContent();
  }

  _updateDisplayedContent() {
    this.cardsContainer.positionData = { positionX: 0, positionY: 0 };
    this.cardsContainer.removeChildren();

    addCurrentGroupCards(this)
  }

  addBackButton() {
    this.backButton = createBackButton(this.app);
    this.addChild(this.backButton);

    return this.backButton;
  }
}