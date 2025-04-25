// Importa funções que criam os elementos visuais da tela
import { loadCards } from "./components/Cards.js";
import { createCategoriesContainer } from "./components/CategoriesContainer.js";
import { createTooltipContainer } from "./components/TooltipContainer.js";
import { createCardsContainer } from "./components/CardsContainer.js";
import { positionCard } from "./components/Cards.js";
import { createBackButton } from "../../components/Button/BackButton.js";

export class CategoriesScreen extends PIXI.Container {
  constructor(app, gameCategories) {
    super();
    this.app = app;
    this.appContainer = document.getElementById('game-container')
    this.gameCategories = gameCategories;

    this._initialize()
  }
  async _initialize() {
    await this._loadCards();
    this._addComponents();
  }

  async _loadCards() {
    this.cards = loadCards(this.gameCategories);
  }

  _addComponents() {
    this._addCategoriesContainer();
    this._addTooltipContainer();
    this._addCardsContainer();
    this._addCards();
  }

  _addCategoriesContainer() {
    this.categoriesContainer = createCategoriesContainer(this.appContainer);
    this.addChild(this.categoriesContainer);
  }

  _addTooltipContainer() {
    this.tooltipContainer = createTooltipContainer(this.appContainer);
    this.addChild(this.tooltipContainer);
  }

  _addCardsContainer() {
    this.cardsContainer = createCardsContainer(this.categoriesContainer);
    this.categoriesContainer.addChild(this.cardsContainer);
  }

  _addCards() {
    this.cards.forEach((card) => {
      positionCard(card, this.cardsContainer);
      this.cardsContainer.addChild(card);
    });
  }

  addBackButton() {
    this.backButton = createBackButton(this.app);
    this.addChild(this.backButton);

    return this.backButton;
  }
}