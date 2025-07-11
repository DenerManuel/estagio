import { BackButton } from "../../components/button/back-button.js";
import { CustomButton } from "../../components/button/CustomButton.js";
import { appSize } from "../../styles/appSize.js";
import { APP_SIZE } from "../../styles/size/app-size.js";
import { calculateCenteredXPosition } from "../../utils/position/calculateCenteredPosition.js";
import { loadItemCards } from "./components/card/cardCreator.js";
import { createRoundCounter } from "./components/round-counter-container/roundCounterCreator.js";
import { createRoundCounterText } from "./components/round-counter-text/roundCounterTextCreator.js";
import { positionRoundCounterText } from "./components/round-counter-text/roundCounterTextPosition.js";
import { FirstRoundGroup } from "./first-round-group/FirstRoundGroup.js";
import { SecondRoundGroup } from "./second-round-group/SecondRoundGroup.js";
import { ThirdRoundGroup } from "./third-round-group/ThirdRoundGroup.js";

export class GameScreen extends PIXI.Container {
  constructor(app, category, mode = 'heart') {
    super();
    this.app = app;
    this.originalWidth = this.app.screen.width;
    this.originalHeight = this.app.screen.height;
    this.appContainer = document.getElementById('game-container');
    this.category = category;
    this.currentRound = 1;
    this.currentScreen = 'firstRoundGroup';
    this.pontuacaoTotal = 0;
    this.tempoRestante = 7;

    this.mode = mode; // 'score' ou 'heart'
    this.hearts = mode === 'heart' ? 5 : 0;

    this._initialize();
  }

  async _initialize() {
    await this._loadItemCards();
    this._addComponents();
  }

  async _loadItemCards() {
    this.cards = await loadItemCards(this.category);
  }

  _addHearts() {
    if (this.mode !== 'heart') return;
    this.heartSprites = [];
    for (let i = 0; i < this.hearts; i++) {
      const heart = new PIXI.Text('❤️', { fontSize: 28 });
      heart.position.set(100 + i * 35, 515);
      this.addChild(heart);
      this.heartSprites.push(heart);
    }
  }

  _updateHearts() {
    if (this.mode !== 'heart') return;
    this.heartSprites.forEach((heart, i) => {
      heart.visible = i < this.hearts;
    });
  }

  _iniciarTimer() {
    if (this._intervaloTimer) {
      clearInterval(this._intervaloTimer);
    }
    this._inicioRodada = Date.now();
    this.tempoRestante = 7;
    this._atualizarTextoTimer();

    this._intervaloTimer = setInterval(() => {
      const segundosPassados = (Date.now() - this._inicioRodada) / 1000;
      this.tempoRestante = Math.max(7 - Math.floor(segundosPassados), 0);
      this._atualizarTextoTimer();

      if (this.tempoRestante === 0) {
        clearInterval(this._intervaloTimer);
        if (this.mode === 'heart') {
          this.hearts--;
          this._updateHearts();
          if (this.hearts <= 0) {
            this._gameOver();
          }
        }
      }
    }, 1000);
  }

  _pararTimer() {
    if (this._intervaloTimer) {
      clearInterval(this._intervaloTimer);
      this._intervaloTimer = null;
    }
  }

  _calcularPontos() {
    const segundosPassados = (Date.now() - this._inicioRodada) / 1000;
    const tempoUsado = Math.min(segundosPassados, 7);
    let pontos = Math.ceil((7 - tempoUsado) * 45);
    pontos = Math.floor(pontos / 10) * 10;
    return Math.max(pontos, 0);
  }

  _addComponents() {
    this._addFirstRoundGroup();
    this._addRoundCounter();
    this._addScoreText();
    this._addHearts();
  }

  _addScoreText() {
    this.textoPontuacao = new PIXI.Text(`Score: ${this.pontuacaoTotal}`, {
      fontSize: 24,
      fill: 0xffff00
    });
    this.textoPontuacao.position.set(
      APP_SIZE.width - 160,
      APP_SIZE.height - 65
    );
    this.addChild(this.textoPontuacao);

    this.textoTimer = new PIXI.Text(`Tempo: ${this.tempoRestante}s`, {
      fontSize: 24,
      fill: 0xff0000
    });
    this.textoTimer.position.set(
      APP_SIZE.width - 300,
      APP_SIZE.height - 65
    );
    this.addChild(this.textoTimer);
  }

  _atualizarTextoPontuacao() {
    if (this.textoPontuacao) {
      this.textoPontuacao.text = `Score: ${this.pontuacaoTotal}`;
    }
  }

  _atualizarTextoTimer() {
    if (this.textoTimer) {
      this.textoTimer.text = `Tempo: ${this.tempoRestante}s`;
    }
  }

  _addFirstRoundGroup() {
    this.firstRoundGroup = new FirstRoundGroup(this.app, this.cards);
    this.firstRoundGroup.on('correct', () => {
      this._pararTimer();
      const pontosDoRound = this._calcularPontos();
      this.pontuacaoTotal += pontosDoRound;
      this._atualizarTextoPontuacao();
      this.updateRoundCounter();
      this._iniciarTimer();
    });
    this.firstRoundGroup.on('error', () => {
      if (this.mode === 'score') {
        this.pontuacaoTotal = Math.max(this.pontuacaoTotal - 50, 0);
        this._atualizarTextoPontuacao();
      } else if (this.mode === 'heart') {
        this.hearts--;
        this._updateHearts();
        if (this.hearts <= 0) {
          this._gameOver();
        }
      }
    });
    this.addChild(this.firstRoundGroup);
    this.currentScreen = 'firstRoundGroup';
    this._iniciarTimer();
  }

  _addSecondRoundGroup() {
    this.secondRoundGroup = new SecondRoundGroup(this.app, this.category);
    this.secondRoundGroup.on('correct', () => {
      this._pararTimer();
      const pontosDoRound = this._calcularPontos();
      this.pontuacaoTotal += pontosDoRound;
      this._atualizarTextoPontuacao();
      this.updateRoundCounter();
      this._iniciarTimer();
    });
    this.secondRoundGroup.on('error', () => {
      if (this.mode === 'score') {
        this.pontuacaoTotal = Math.max(this.pontuacaoTotal - 100, 0);
        this._atualizarTextoPontuacao();
      } else if (this.mode === 'heart') {
        this.hearts--;
        this._updateHearts();
        if (this.hearts <= 0) {
          this._gameOver();
        }
      }
    });
    this.addChild(this.secondRoundGroup);
    this.currentScreen = 'secondRoundScreen';
    this._iniciarTimer();
  }

  _addThirdRoundGroup() {
    this.thirdRoundGroup = new ThirdRoundGroup(this.app, this.category);
    this.thirdRoundGroup.on('correct', () => {
      this._pararTimer();
      const pontosDoRound = this._calcularPontos();
      this.pontuacaoTotal += pontosDoRound;
      this._atualizarTextoPontuacao();
      this.updateRoundCounter();
      this._iniciarTimer();
    });
    this.thirdRoundGroup.on('error', () => {
      if (this.mode === 'score') {
        this.pontuacaoTotal = Math.max(this.pontuacaoTotal - 100, 0);
        this._atualizarTextoPontuacao();
      } else if (this.mode === 'heart') {
        this.hearts--;
        this._updateHearts();
        if (this.hearts <= 0) {
          this._gameOver();
        }
      }
    });
    this.addChild(this.thirdRoundGroup);
    this.currentScreen = 'thirdRoundGroup';
    this._iniciarTimer();
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
      this.currentRound = 10;
      this.roundCounterText.text = `${this.currentRound} / 30`;
    } else if (this.currentRound === 20 && this.currentScreen === "secondRoundScreen") {
      this.secondRoundGroup.destroy();
      this._addThirdRoundGroup();
      this.currentScreen = 'thirdRoundScreen';
      this.currentRound = 21;
      this.roundCounterText.text = `${this.currentRound} / 30`;
    } else if (this.currentRound === 31 && this.currentScreen === "thirdRoundScreen") {
      this._pararTimer();
      this.thirdRoundGroup.destroy();
      this.currentRound = 1;
      this._showWellDoneThenFinal();
    }
  }

  _showWellDoneThenFinal() {
    // Esconder UI antiga
    if (this.roundCounterContainer) this.roundCounterContainer.visible = false;
    if (this.textoPontuacao) this.textoPontuacao.visible = false;
    if (this.textoTimer) this.textoTimer.visible = false;
    if (this.heartSprites) this.heartSprites.forEach(h => h.visible = false);
    if (this.backButton) this.backButton.visible = false;

    this.wellDoneContainer = new PIXI.Container();
    const text = new PIXI.Text("Well Done!", {
      fontSize: 50,
      fill: 0xffffff,
      align: 'center'
    });
    text.anchor.set(0.5);
    text.position.set(appSize.width / 2, appSize.height / 2);
    this.wellDoneContainer.addChild(text);
    this.addChild(this.wellDoneContainer);

    setTimeout(() => {
      this.removeChild(this.wellDoneContainer);
      this._showCompletedScreen();
    }, 2000);
  }

  _showCompletedScreen() {
    this.completedContainer = new PIXI.Container();

    const title = new PIXI.Text("Completed", {
      fontSize: 52,
      fill: 0x00ff00,
      align: 'center'
    });
    title.anchor.set(0.5);
    title.position.set(APP_SIZE.width / 2, 90);
    this.completedContainer.addChild(title);

    const estrelas = [];
    const estrelasAtivas = Math.min(Math.floor(this.pontuacaoTotal / 1000), 5);
    for (let i = 0; i < 5; i++) {
      const star = new PIXI.Text(i < estrelasAtivas ? '⭐' : '☆', {
        fontSize: 80,
        fill: i < estrelasAtivas ? 0xffff00 : 0x999999
      });
      star.anchor.set(0.5);
      star.position.set(APP_SIZE.width / 2 - 200 + i * 100, 200);
      estrelas.push(star);
      this.completedContainer.addChild(star);
    }

    const scoreText = new PIXI.Text(`Score: ${this.pontuacaoTotal}`, {
      fontSize: 32,
      fill: 0xffffff
    });
    scoreText.anchor.set(0.5);
    scoreText.position.set(APP_SIZE.width / 2, 300);
    this.completedContainer.addChild(scoreText);

    const newButton = new CustomButton("New", {
      fontSize: 32,
      width: 250,
      height: 90
    });
    newButton.position.set(calculateCenteredXPosition(newButton.width), 360);
    newButton.on("pointertap", () => this._goToHomeScreen());
    this.completedContainer.addChild(newButton);

    this.addChild(this.completedContainer);
  }

  addBackButton() {
    this.backButton = new BackButton();
    this.addChild(this.backButton);
    return this.backButton;
  }

  _gameOver() {
    this._pararTimer();
    this._showGameOverScreen();
  }
  _showGameOverScreen() {
    // Esconde elementos antigos
    if (this.firstRoundGroup) this.firstRoundGroup.visible = false;
    if (this.secondRoundGroup) this.secondRoundGroup.visible = false;
    if (this.thirdRoundGroup) this.thirdRoundGroup.visible = false;
    if (this.backButton) this.backButton.visible = false;
    if (this.roundCounterContainer) this.roundCounterContainer.visible = false;
    if (this.textoPontuacao) this.textoPontuacao.visible = false;
    if (this.textoTimer) this.textoTimer.visible = false;
    if (this.heartSprites) this.heartSprites.forEach(h => h.visible = false);

    // Container da tela de Game Over
    this.gameOverContainer = new PIXI.Container();

    // Título "Game Over"
    const title = new PIXI.Text('Game Over', {
      fontSize: 54,
      fill: 0xff4444,
      fontWeight: 'bold',
      align: 'center'
    });
    title.anchor.set(0.5);
    title.position.set(appSize.width / 2, 200);
    this.gameOverContainer.addChild(title);

    // Botões
    const buttonLabels = [
      { label: 'Retry', action: () => this._restartGame() },
      { label: 'Voltar', action: () => this._goToHomeScreen() }
    ];
    buttonLabels.forEach((btn, i) => {
      const button = new CustomButton(btn.label, {
        width: 180,
        height: 80,
      })
      // new PIXI.Graphics();
      // button.beginFill(0x2222aa);
      // button.drawRoundedRect(0, 0, 180, 54, 14);
      // button.endFill();
      button.position.set(appSize.width / 2 - 200 + i * 220, 340);
      // button.eventMode = "dynamic";
      // button.cursor = "pointer";
      button.on('pointertap', btn.action);

      // const buttonText = new PIXI.Text(btn.label, {
      //   fontSize: 26,
      //   fill: 0xffffff,
      //   fontWeight: 'bold'
      // });
      // buttonText.anchor.set(0.5);
      // buttonText.position.set(90, 27);
      // button.addChild(buttonText);

      this.gameOverContainer.addChild(button);
    });

    this.addChild(this.gameOverContainer);
  }

  _showScoreScreen() {
    console.log("Showing score screen...");
  }

  _restartGame() {
    if (this.gameOverContainer && this.children.includes(this.gameOverContainer)) {
      this.removeChild(this.gameOverContainer);
      this.gameOverContainer.destroy({ children: true });
      this.gameOverContainer = null;
    }
    this.pontuacaoTotal = 0;
    this.hearts = 5;
    this.currentRound = 1;
    if (this.firstRoundGroup) this.firstRoundGroup.destroy();
    if (this.secondRoundGroup) this.secondRoundGroup.destroy();
    if (this.thirdRoundGroup) this.thirdRoundGroup.destroy();

    this._addComponents();
    if (this.backButton) this.backButton.visible = true;
    if (this.roundCounterContainer) this.roundCounterContainer.visible = true;
    if (this.textoPontuacao) this.textoPontuacao.visible = true;
    if (this.textoTimer) this.textoTimer.visible = true;
    if (this.heartSprites) this.heartSprites.forEach(h => h.visible = true);
  }

  _goToHomeScreen() {
    if (this.app && this.app.screenManager) {
      this.app.screenManager.displayScreen('homeScreen');
    }
  }
}