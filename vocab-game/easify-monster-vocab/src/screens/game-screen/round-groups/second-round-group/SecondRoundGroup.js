import { Container } from 'pixi.js';
import { secondRoundGroupStyles } from '../../../../styles/screens-components-styles/game-screen/round-groups/second-round-group/second-round-components-styles.js';
import * as SecondGroupHelpers from './helpers/second-group-helpers.js';

export class SecondRoundGroup extends Container {
  constructor(app, category, itemCards) {
    super();
    this.name = 'SecondRoundGroup';
    this.app = app;
    this.appContainer = document.getElementById('game-container');
    this.category = category;
    this.cards = itemCards;
    this.selectedCards = [];
    this.selectedNames = [];
    this.usedCards = [];
    this.usedNames = [];
    this.cardsCorrects = 0;
    this.containerRefs = [];
    this.currentRound = 10;

    this._initialize();
    this._setResponsive();
  }

  _setResponsive() {
    this.mediaQuery = window.matchMedia('(max-width: 767px)');
    const IS_MOBILE = this.mediaQuery.matches;

    if (IS_MOBILE) {
      this.cards.forEach((card) => {
        card.updateStyle(secondRoundGroupStyles.card.mobile);
        card.changeImageSize(secondRoundGroupStyles.card.mobile);
        card.width = secondRoundGroupStyles.card.mobile.width;
        card.height = secondRoundGroupStyles.card.mobile.height;
        card.image.width -= 30;
        card.image.height -= 30;
      });
    }
  }

  async _initialize() {
    SecondGroupHelpers.configureOnPointerLeave(this);

    await this._changeCardsStyles();
    this._addComponents();
  }

  async _changeCardsStyles() {
    this.cards = await SecondGroupHelpers.changeCardStyles(this.cards);
  }

  _addComponents() {
    this._addCards();
    this._addCardsContainers();
  }

  _addCards(numberOfCards = 2) {
    SecondGroupHelpers.updateSelectedCards(numberOfCards, this);
    SecondGroupHelpers.positionCards(this);
    SecondGroupHelpers.configureSelectedCards(this);
  }

  _addCardsContainers() {
    // Garante que todos os containers (card e name) antigos sejam destruídos.
    SecondGroupHelpers.destroyContainers(this);
    SecondGroupHelpers.updateSelectedNames(this);
    SecondGroupHelpers.createAndAddContainers(this);
  }

  _continueGame() {
    SecondGroupHelpers.continueGame(this);
  }
}
