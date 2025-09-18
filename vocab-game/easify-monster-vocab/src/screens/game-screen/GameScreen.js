import { Container } from 'pixi.js';
import { BackButton } from '../../components/button/BackButton.js';
import { GameScreenComponentsResponsive } from '../../styles/screens-components-responsive/game-screen/game-screen-components-responsive.js';
import * as GameComponents from './components/game-screen-components.js';
import * as GameHelpers from './helpers/game-screen-helpers.js';

export class GameScreen extends Container {
  constructor(app, category, mode) {
    super();
    this.app = app;
    this.originalWidth = this.app.screen.width;
    this.originalHeight = this.app.screen.height;
    this.appContainer = document.getElementById('game-container');
    this.category = category;
    this.currentRound = 1;
    this.currentScreen = 'firstRoundGroup';
    this.totalScore = 0;
    this.duration = 7;

    this.mode = mode; // 'score' ou 'heart'

    this._initialize();
  }

  async _initialize() {
    await this._loadItemCards();
    this._addComponents();
    this._setResponsiveStyles();
  }

  async _loadItemCards() {
    this.itemCards = await GameHelpers.loadItemCards(this.category);
  }

  _addComponents() {
    if (this.mode === 'heart') this._createHearts();
    this._createTimer();
    this._createScore();
    this._createRoundCounter();
    this._createBackButton();

    // Atualize os componentes na instância responsiva
    const responsiveInstance = GameScreenComponentsResponsive.getInstance();
    responsiveInstance.updateComponents({
      heartSprites: this.heartSprites,
      timer: this.timer,
      score: this.score,
      roundCounter: this.roundCounter,
      backButton: this.backButton,
    });

    GameHelpers.addFirstRoundGroup(this);
  }

  _createHearts() {
    this.heartsCount = 5;
    this.heartSprites = GameHelpers.createHearts(this.heartsCount);
    this.heartSprites.forEach((heart) => this.addChild(heart));
  }

  _createTimer() {
    this.timer = new GameComponents.Timer(this.duration);
    this.addChild(this.timer);
  }

  _createScore() {
    this.score = new GameComponents.Score();
    this.addChild(this.score);
    this.totalScore = 0;
  }

  _createRoundCounter() {
    this.roundCounter = new GameComponents.RoundCounter(this.appContainer);
    this.addChild(this.roundCounter);
  }

  _createBackButton() {
    this.backButton = new BackButton();
    this._setBackButtonEvents();
    this.addChild(this.backButton);
  }

  _setBackButtonEvents() {
    this.backButton.on('pointertap', () => {
      this.app.navigationManager.navigateTo('preGameScreen', this.category);
      this.destroy({ children: true });
    });
  }

  _setResponsiveStyles() {
    const responsiveInstance = GameScreenComponentsResponsive.getInstance();
    responsiveInstance.updateComponents({
      heartSprites: this.heartSprites,
      timer: this.timer,
      score: this.score,
      roundCounter: this.roundCounter,
      backButton: this.backButton,
    });
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (isMobile) {
      responsiveInstance.changeComponentsStylesAndPositions();
    } else {
      responsiveInstance.resetComponentsStylesAndPositions();
    }
  }
}
