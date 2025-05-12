import { createTitle } from "./components/Title.js";
import { createItemContainers } from "./components/ItemContainer/ItemContainerManager.js";
import { positionItemContainers } from './components/ItemContainer/ItemContainerPosition.js'
import { createBackButton } from '../../../components/Button/BackButton.js';

export class PreGameScreen extends PIXI.Container {
  constructor(app, category) {
    super();
    this.app = app;
    this.category = category;

    // this.cardsPerPage = 4;
    // this.offsetIndex = 0;
    this.startIndex = 0;
    this.endIndex = 3;
    this.itemCards = [];

    this._initialize();
  }
  async _initialize() {
    // await this._loadCards();
    this._addComponents();
  }

  async _loadCards() {
    this.itemCards = await loadItemCards(this.category)
  }

  _addComponents() {
    this._addTitle();
    this._addItemCards();
    this._addButtons();
  }

  _addTitle() {
    this.title = createTitle(this.category.title, this.app);
    this.addChild(this.title);
  }

  _addItemCards() {
    const [itemCards, itemNames] = createItemContainers(this.category, this.app)
    this.itemCards = itemCards
    this.itemNames = itemNames

    this.itemCards.forEach((itemCard) => {
      this.addChild(itemCard)
    })
    this.itemNames.forEach((itemName) => {
      this.addChild(itemName)
    })
    // this.itemCards = createItemContainers(this.app, this.category);

    // this.cardsContainer = new PIXI.Container();
    // this.addChild(this.cardsContainer);

    // this.itemCards.forEach((card) => {
    //   this.cardsContainer.addChild(card);
    // });

    // this._positionCards();
  }

  // _positionCards() {
  //   const start = this.offsetIndex;
  //   const end = start + this.cardsPerPage;

  //   this.itemCards.forEach((card, index) => {
  //     if (index >= start && index < end) {
  //       card.visible = true;

  //       const positionInView = index - start;
  //       card.position.set(100 + positionInView * 150, 200); // X, Y ajustáveis
  //     } else {
  //       card.visible = false;
  //     }
  //   });
  // }

  _addButtons() {
    const buttonPrev = new PIXI.Text("<", { fontSize: 32, fill: "#ffffff" });
    const buttonNext = new PIXI.Text(">", { fontSize: 32, fill: "#ffffff" });

    buttonPrev.eventMode = 'dynamic';
    buttonNext.eventMode = 'dynamic';
    buttonPrev.cursor = 'pointer';
    buttonNext.cursor = 'pointer';

    buttonPrev.position.set(30, 400);
    buttonNext.position.set(750, 400);

    buttonPrev.on("pointerdown", () => this._goToPrevious());
    buttonNext.on("pointerdown", () => this._goToNext());

    this.addChild(buttonPrev, buttonNext);
  }

  _goToNext() {
    // const maxIndex = this.itemCards.length - this.cardsPerPage;
    if ((this.endIndex + 1) > 9) {
      this.endIndex = 0
    } else {
      this.endIndex++
    }
    if ((this.startIndex + 1) > 9) {
      this.startIndex = 0
    } else {
      this.startIndex++
    }
    // if (this.offsetIndex < maxIndex) {
    //   this.offsetIndex++;
    // } else {
    //   this.offsetIndex = 0; // volta pro começo
    positionItemContainers(this.itemCards, this.itemNames, this.startIndex, this.endIndex)
  }

  _goToPrevious() {
    // if (this.offsetIndex > 0) {
    //   this.offsetIndex--;
    // } else {
    //   this.offsetIndex = this.itemCards.length - this.cardsPerPage; // vai pro final
    // }
    if ((this.endIndex - 1) < 0) {
      this.endIndex = 9
    } else {
      this.endIndex--
    }
    if ((this.startIndex - 1) < 0) {
      this.startIndex = 9
    } else {
      this.startIndex--
    }
    positionItemContainers(this.itemCards, this.itemNames, this.startIndex, this.endIndex)
  }

  addBackButton() {
    this.backButton = createBackButton(this.app);
    this.addChild(this.backButton);

    return this.backButton;
  }
}