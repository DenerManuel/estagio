import { BackButton } from "../../components/button/BackButton.js";
import { NavigationManager } from "../../core/NavigationManager.js";
import { CategoriesScreenComponentsResponsive } from "../../styles/screens-components-responsive/categories-screen/categories-screen-components-responsive.js";
import * as CategoriesComponents from "./components/categories-screen-components.js";
import * as CategoriesHelpers from "./helpers/categories-screen-helpers.js";
import { Container } from "pixi.js"

export class CategoriesScreen extends Container {
  currentGroupIndex = 0
  appContainer = document.getElementById('game-container')

  constructor(cards) {
    super();
    this._initialize(cards)
    this._createBackButton()
  }

  async _initialize(cards) {
    await this._loadCardGroups(cards);
    this._createComponents();
    this._setResponsiveStyles();
  }

  async _loadCardGroups(cards) {
    this.cardGroups = new CategoriesComponents.CardsGroup(cards)
    CategoriesHelpers.positionCards(this.cardGroups, 'desktop');
  }

  _createComponents() {
    this._createCategoriesContainer();
    this._createTooltipContainer();
    this._createCardsContainer();
    this._createNavigationButtons();
    CategoriesHelpers.updateDisplayedContent(this);
  }

  _createCategoriesContainer() {
    this.categoriesContainer = new CategoriesComponents.CategoriesContainer()
    this.addChild(this.categoriesContainer);
  }

  _createTooltipContainer() {
    this.tooltipContainer = new CategoriesComponents.TooltipContainer()
    this.addChild(this.tooltipContainer);

    this._createDefaultTooltipContent()
  }

  _createDefaultTooltipContent() {
    this.defaultTooltipContent = CategoriesComponents.DefaultTooltipContent.getInstance(this.tooltipContainer)
    this.tooltipContainer.addChild(this.defaultTooltipContent)
  }

  _createCardsContainer() {
    this.cardsContainer = new CategoriesComponents.CardsContainer()
    this.categoriesContainer.addChild(this.cardsContainer);
  }

  _createNavigationButtons() {
    this.previousButton = new CategoriesComponents.PreviousButton()
    this.nextButton = new CategoriesComponents.NextButton()
    CategoriesHelpers.configureNavigationButtonEvents(this)

    this.addChild(this.previousButton, this.nextButton);
  }

  _createBackButton() {
    this.backButton = new BackButton()
    this._setBackButtonEvents()
    this.addChild(this.backButton);
  }

  _setBackButtonEvents() {
    this.backButton.on('pointertap', () => {
      NavigationManager.getInstance().navigateTo('homeScreen');
    });
  }

  _setResponsiveStyles() {
    this.componentsResponsive = CategoriesScreenComponentsResponsive.getInstance({
      cardGroups: this.cardGroups,
      categoriesContainer: this.categoriesContainer,
      tooltipContainer: this.tooltipContainer,
      cardsContainer: this.cardsContainer,
      previousButton: this.previousButton,
      nextButton: this.nextButton,
      backButton: this.backButton
    });
  }
}
