import { loadItemCards } from "./components/card/cardCreator.js";
import { FirstRoundGroup } from "./first-round-group/FirstRoundGroup.js";
import { createRoundCounter } from "./components/round-counter-container/roundCounterCreator.js";
import { createRoundCounterText } from "./components/round-counter-text/roundCounterTextCreator.js";
import { createBackButton } from "../../components/button/backButton.js";
import { positionRoundCounterText } from "./components/round-counter-text/roundCounterTextPosition.js";
import { ThirdRoundGroup } from "./third-round-group/ThirdRoundGroup.js";
import { SecondRoundGroup } from "./second-round-group/SecondRoundGroup.js";
import { resetAvailableIndexes } from "./first-round-group/components/item-name/itemNameCreator.js";

export class GameScreen extends PIXI.Container {
  constructor(app, category) {
    super();
    this.app = app;
    this.appContainer = document.getElementById('game-container')
    this.category = category;
    this.currentRound = 1;
    this.currentScreen = 'thirdRoundScreen'

    this._initialize();
  }
  async _initialize() {
    await this._loadItemCards();
    this._addComponents();
  }
  async _loadItemCards() {
    this.cards = await loadItemCards(this.category)
  }

  _addComponents() {
    this._addFirstRoundGroup();
    this._addRoundCounter();
  }

  _addFirstRoundGroup() {
    this.firstRoundGroup = new FirstRoundGroup(this.app, this.cards);
    this.firstRoundGroup.on('correct', () => {
      this.updateRoundCounter();
    });
    this.addChild(this.firstRoundGroup)
    this.currentScreen = 'firstRoundGroup'
  }
  _addSecondRoundGroup() {
    this.secondRoundGroup = new SecondRoundGroup(this.app, this.category);
    this.secondRoundGroup.on('correct', () => {
      this.updateRoundCounter();
    });
    this.addChild(this.secondRoundGroup)
    this.currentScreen = 'secondRoundGroup'
  }
  _addThirdRoundGroup() {
    this.thirdRoundGroup = new ThirdRoundGroup(this.app, this.category);
    this.thirdRoundGroup.on('correct', () => {
      this.updateRoundCounter();
    });
    this.addChild(this.thirdRoundGroup)
  }

  _addRoundCounter() {
    this.roundCounterContainer = createRoundCounter(this.appContainer);
    this.roundCounterText = createRoundCounterText(`${this.currentRound} / 30`);
    positionRoundCounterText(this.roundCounterText, this.roundCounterContainer);

    this.roundCounterContainer.addChild(this.roundCounterText);
    this.addChild(this.roundCounterContainer);
  }
  updateRoundCounter() {
    this.currentRound++;
    if (this.roundCounterText) {
      this.roundCounterText.text = `${this.currentRound} / 30`;
    }
    if (this.currentRound === 11 && this.currentScreen === "firstRoundGroup") {
      this.firstRoundGroup.destroy();
      this._addSecondRoundGroup();
      this.currentScreen = 'secondRoundScreen'
      this.currentRound = 10
      this.roundCounterText.text = `${this.currentRound} / 30`;
    } else if (this.currentRound === 20 && this.currentScreen === "secondRoundScreen") {
      this.secondRoundGroup.destroy();
      this._addThirdRoundGroup();
      this.currentScreen = 'thirdRoundScreen'
      this.currentRound = 21
      this.roundCounterText.text = `${this.currentRound} / 30`;
    } else if (this.currentRound === 31 && this.currentScreen === "thirdRoundScreen") {
      this.thirdRoundGroup.destroy();
      this.currentRound = 1;
      this._createFinalScreen();
      this.removeChild(this.roundCounterContainer);

      setTimeout(() => {
        this.removeChild(this.finalScreen);
        this.addChild(this.backButton)
        this._showScoreScreen();
      }, 3000);
    }
  }

  _createFinalScreen() {
    this.removeChild(this.backButton);
    this.finalScreen = new PIXI.Container();
    const finalText = new PIXI.Text('Well Done!', {
      fontSize: 50,
      fill: 0xffffff,
      align: 'center'
    });
    finalText.anchor.set(0.5);
    finalText.position.set(this.appContainer.clientWidth / 2, this.appContainer.clientHeight / 2);
    this.finalScreen.addChild(finalText);
    this.addChild(this.finalScreen);
  }
  _showScoreScreen() {
    console.log("Showing score screen...");
  }

  addBackButton() {
    this.backButton = createBackButton(this.app);
    this.addChild(this.backButton);

    return this.backButton
  }
}