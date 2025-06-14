import { getRandomCards } from "./components/card/randomCards.js";
import { configureCardEvents } from "./components/card/cardEvents.js";
import { positionThreeCards, positionFiveCards, positionSevenCards } from "./components/card/cardPosition.js";
import { addNameFieldContainer } from "./components/name-field-container/nameFieldContainerCreator.js";
import { getRandomName, resetAvailableIndexes } from "./components/item-name/itemNameCreator.js";
import { createNameText } from "./components/name-text/nameTextCreator.js";
import { positionNameText } from "./components/name-text/nameTextPosition.js";

export class FirstRoundGroup extends PIXI.Container {
  constructor(app, cards) {
    super();
    this.app = app;
    this.appContainer = document.getElementById('game-container');
    this.cards = cards;
    this.itemName = null;
    this.currentRound = 1;

    this._initialize();
  }
  _initialize() {
    resetAvailableIndexes();
    this._addComponents();
  }

  _continueGame() {
    this.currentRound++;
    this.removeChildren();

    if (this.currentRound >= 4 && this.currentRound < 7) {
      this._addFiveItemCards();
    } else if (this.currentRound >= 7) {
      this._addSevenItemCards();
    } else {
      this._addThreeItemCards();
    }
  }

  _addComponents() {
    this._addThreeItemCards();
    // this._addScore();
  }
  _addThreeItemCards() {
    this.selectedCards = getRandomCards(this.cards, 3);
    this._setupCards('three')
  }
  _addFiveItemCards() {
    this.selectedCards = getRandomCards(this.cards, 5);
    this._setupCards('five')
    this.nameFieldContainer.y = 425
  }
  _addSevenItemCards() {
    this.selectedCards = getRandomCards(this.cards, 7);
    this._setupCards('seven')
    this.nameFieldContainer.y = 425
  }


  _setupCards(type) {
    this._addNameFieldContainer();
    configureCardEvents(this);
    if (type === 'three') {
      positionThreeCards(this.selectedCards);
    } else if (type === 'five') {
      positionFiveCards(this.selectedCards);
    } else if (type === 'seven') {
      positionSevenCards(this.selectedCards);
    }
    this._addCardsInScreen(this.selectedCards);
  }

  _addNameFieldContainer() {
    this.nameFieldContainer = addNameFieldContainer(this.appContainer);
    this.itemName = getRandomName(this.selectedCards);

    const nameText = createNameText(this.itemName);
    positionNameText(nameText, this.nameFieldContainer);

    this.nameFieldContainer.addChild(nameText);
    this.addChild(this.nameFieldContainer);
  }
  _addCardsInScreen(selectedCards) {
    selectedCards.forEach((card) => {
      this.addChild(card);
    });
  }
}