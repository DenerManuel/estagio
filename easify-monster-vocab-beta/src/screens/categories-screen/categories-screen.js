import { BackButton } from "../../components/button/back-button.js";
import * as CategoriesUI from "./components/categories-screen-components.js";
import { addCurrentGroupCards } from "./helpers/cards/add-current-group-cards.js";

export class CategoriesScreen extends PIXI.Container {
  constructor(app, cards) {
    super();
    this.app = app;
    this.appContainer = document.getElementById('game-container')
    this.currentGroupIndex = 0

    this._initialize(cards)
  }
  async _initialize(cards) {
    await this._loadCardGroups(cards);
    this._addComponents();
  }

  async _loadCardGroups(cards) {
    this.cardGroups = new CategoriesUI.CardsGroup(cards)
  }

  _addComponents() {
    this._addCategoriesContainer();
    this._addTooltipContainer();
    this._addCardsContainer();
    this._addNavigationButtons();
    this._configureNavigationButtonEvents();
    this._updateDisplayedContent();
  }

  _addCategoriesContainer() {
    this.categoriesContainer = new CategoriesUI.CategoriesContainer(this.appContainer)
    this.addChild(this.categoriesContainer);
  }

  _addTooltipContainer() {
    this.tooltipContainer = new CategoriesUI.TooltipContainer(this.appContainer)
    this.addChild(this.tooltipContainer);

    this._addDefaultTooltipContent()
  }
  _addDefaultTooltipContent() {
    this.defaultTooltipContent = CategoriesUI.DefaultTooltipContent.getInstance(this.tooltipContainer)
    this.tooltipContainer.addChild(this.defaultTooltipContent)
  }

  _addCardsContainer() {
    this.cardsContainer = new CategoriesUI.CardsContainer(this.categoriesContainer)
    this.categoriesContainer.addChild(this.cardsContainer);
  }

  _addNavigationButtons() {
    this.previousButton = new CategoriesUI.PreviousButton()
    this.nextButton = new CategoriesUI.NextButton()
    this.addChild(this.previousButton, this.nextButton);
  }
  _configureNavigationButtonEvents() {
    this.previousButton.on('pointertap', () => this._changeCurrentIndex(-1));
    this.nextButton.on('pointertap', () => this._changeCurrentIndex(1));
  }
  _changeCurrentIndex(step) {
    this.currentGroupIndex += step;
    const REACH_END = this.currentGroupIndex >= this.cardGroups.getGroups().length;
    const REACH_START = this.currentGroupIndex < 0;

    if (REACH_END) this.currentGroupIndex = 0;
    if (REACH_START) this.currentGroupIndex = this.cardGroups.getGroups().length - 1;
    this._updateDisplayedContent();
  }
  _updateDisplayedContent() {
    this.cardsContainer.positionData = { positionX: 0, positionY: 0 };
    this.cardsContainer.removeChildren();

    addCurrentGroupCards(this)
  }

  addBackButton() {
    this.backButton = new BackButton()
    this.addChild(this.backButton);

    return this.backButton;
  }
}