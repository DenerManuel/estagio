// Importa funções que criam os elementos visuais da tela
import { loadCards } from "./components/Cards.js";
import { createCategoriesContainer } from "./components/CategoriesContainer.js";
import { createTooltipContainer } from "./components/TooltipContainer.js";
import { addDefaultTooltipContent } from "./components/DefaultTooltipContent.js";
import { createCardsContainer } from "./components/CardsContainer.js";
import { createNavigationButtons } from './components/NavigationButtons.js';
import { positionCard } from "./components/Cards.js";
import { createBackButton } from "../../components/Button/BackButton.js";
import { createTooltipContent } from "./components/TooltipContent.js";

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
    // this._updateDisplayedCategories();
  }

  async _loadCardGroups() {
    const cards = await this._loadCards();

    this.cardGroups = [] // VOU USAR ISSO
    let cardGroup = []

    cards.forEach((card, indice) => {
      cardGroup.push(card)

      if (cardGroup.length === 7 || indice === cards.length - 1) {
        this.cardGroups.push(cardGroup)
        cardGroup = []
      }
    })
  }
  async _loadCards() {
    return loadCards(this.gameCategories);
  }

  _addComponents() {
    this._addCategoriesContainer();
    this._addTooltipContainer();
    this._addDefaultTooltipContent();
    this._addCardsContainer();
    this._addNavigationButtons();
    // this._addCards();
    this._configureNavigationButtonEvents(); // Adicionado aqui
    this._updateDisplayedContent();
  }

  _addCategoriesContainer() {
    this.categoriesContainer = createCategoriesContainer(this.appContainer);
    this.addChild(this.categoriesContainer);
  }

  _addTooltipContainer() {
    this.tooltipContainer = createTooltipContainer(this.appContainer);
    this.addChild(this.tooltipContainer);
  }

  _addDefaultTooltipContent() {
    // Remove apenas o título e o texto dos itens, mantendo a borda
    const childrenToRemove = this.tooltipContainer.children.filter(child =>
      child.name === 'tooltipTitle' || child.name === 'tooltipItemTexts'
    );
    childrenToRemove.forEach(child => this.tooltipContainer.removeChild(child));

    // Adiciona o conteúdo padrão
    const defaultTooltipContent = addDefaultTooltipContent();
    defaultTooltipContent.name = 'defaultTooltipContent';
    this.tooltipContainer.addChild(defaultTooltipContent);
  }

  _addCardsContainer() {
    this.cardsContainer = createCardsContainer(this.categoriesContainer);
    this.categoriesContainer.addChild(this.cardsContainer);
  }

  _addNavigationButtons() {
    this.previousButton = createNavigationButtons.createPreviousButton();
    this.nextButton = createNavigationButtons.createNextButton();

    this.addChild(this.previousButton, this.nextButton);
  }

  // _addCards() {
  //   this.cardGroups[0].forEach((card, index) => {
  //     positionCard(card, this.cardsContainer);
  //     this.cardsContainer.addChild(card);

  //     // Configura o evento de clique no card
  //     card.eventMode = 'dynamic';
  //     card.cursor = 'pointer';
  //     card.on('click', () => this._handleCardClick(index));
  //     card.on('pointerover', () => {
  //       const [tooltipTitle, tooltipItemTexts] = createTooltipContent(card.category)

  //       this.tooltipContainer.removeChildren(1)

  //       this.tooltipContainer.addChild(tooltipTitle, tooltipItemTexts)
  //     })
  //     card.on('pointerout', () => this._addDefaultTooltipContent())
  //   });
  // }
  _handleCardClick(index) {
    const selectedCategory = this.gameCategories[index];
    const context = this.app.context; // Contexto passado pela NavigationManager

    if (context === 'review') {
      this.app.screenManager.displayScreen('reviewScreen', 'categoriesScreen', selectedCategory);
    } else if (context === 'game') {
      console.log('Navegar para a tela do jogo com a categoria:', selectedCategory);
      // Implementar navegação para a tela do jogo no futuro
    }

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

    // Adiciona os cartões do grupo atual
    const currentCards = this.cardGroups[this.currentGroupIndex];
    currentCards.forEach((card, index) => {
      positionCard(card, this.cardsContainer);
      this.cardsContainer.addChild(card);

      // Configura eventos para os cartões
      card.eventMode = 'dynamic';
      card.cursor = 'pointer';
      card.on('click', () => this._handleCardClick(index));
      card.on('pointerover', () => {
        const [tooltipTitle, tooltipItemTexts] = createTooltipContent(card.category);

        this.tooltipContainer.removeChildren(1);
        this.tooltipContainer.addChild(tooltipTitle, tooltipItemTexts);
      });
      card.on('pointerout', () => this._addDefaultTooltipContent());
    });
  }

  addBackButton() {
    this.backButton = createBackButton(this.app);
    this.addChild(this.backButton);

    return this.backButton;
  }

  // _changeGroup(step) {
  //   const newIndex = this.currentGroupIndex + step;
  //   if (newIndex >= 0 && newIndex < this.categoryGroups.length) {
  //     this.currentGroupIndex = newIndex;
  //     this._updateDisplayedCategories();
  //   }
  // }

  // _updateDisplayedCategories() {
  //   this.categoriesContainer.removeChildren(); // Remove os cards antigos
  //   const currentCards = this.cards[this.currentGroupIndex];
  //   currentCards.forEach(card => this.categoriesContainer.addChild(card));
  // }
}