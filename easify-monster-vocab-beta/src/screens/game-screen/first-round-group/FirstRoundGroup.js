import { NameFieldContainerPosition } from "../../../styles/screens/game-screen/first-round-group/name-field-container/nameFieldContainerConfig.js";
import { configureCardEvents } from "./components/card/cardEvents.js";
import { positionFiveCards, positionSevenCards, positionThreeCards } from "./components/card/cardPosition.js";
import { getRandomCards } from "./components/card/randomCards.js";
import { getRandomName, resetAvailableIndexes } from "./components/item-name/itemNameCreator.js";
import { addNameFieldContainer } from "./components/name-field-container/nameFieldContainerCreator.js";
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
    NameFieldContainerPosition
    this.selectedCards = getRandomCards(this.cards, 5);
    this._setupCards('five')
    this.nameFieldContainer.y = NameFieldContainerPosition.secondPosition.y
  }
  _addSevenItemCards() {
    this.selectedCards = getRandomCards(this.cards, 7);
    this._setupCards('seven')
    this.nameFieldContainer.y = NameFieldContainerPosition.secondPosition.y
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
  getItemCorreto() {
    // Retorna o objeto do card correto da rodada atual
    return this.selectedCards.find(card => card.item.name === this.itemName)?.item;
  }
}