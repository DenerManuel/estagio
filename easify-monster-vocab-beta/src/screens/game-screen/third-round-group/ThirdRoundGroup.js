import { loadItemCards } from "./components/item-card/cardCreator.js";
import { getUniqueRandomNames } from "./components/item-names/randomNames.js";
import { createNameContainer, positionNameContainer } from "./components/name-container/nameContainerManager.js";
import { createNameText } from "./components/name-text/nameTextCreator.js";
import { positionNameText } from "./components/name-text/nameTextPosition.js";

export class ThirdRoundGroup extends PIXI.Container {
  constructor(app, category) {
    super();
    this.app = app;
    this.appContainer = document.getElementById('game-container');
    this.category = category;
    this.currentRound = 21;
    this.allNames = []
    this.usedNames = [];
    this.currentNames = [];
    this.selectedCard = null;

    this._initialize();
  }
  async _initialize() {
    await this._loadCards();

    this.cards.forEach((card) => {
      this.allNames.push(card.item.name);
    })
    this._setupInitialNames();
    this._addComponents();
  }
  async _loadCards() {
    this.cards = await loadItemCards(this.category)
  }

  _setupInitialNames() {
    this.currentNames = getUniqueRandomNames(this.allNames);
    this.usedNames = [...this.currentNames];
  }

  _addComponents() {
    this._addNameFields();
    this._addCard();
  }

  _addNameFields() {
    let verticalOffset = 0; // Inicializa o deslocamento vertical
    // Se houver mais de 3 nomes, sobe todos um pouco (ajuste conforme necessário)
    if (this.currentNames.length === 5) {
      verticalOffset = -95; // Ajuste para subir os nomes
    } else if (this.currentNames.length === 4) {
      verticalOffset = -45; // Ajuste para subir os nomes
    } else if (this.currentNames.length === 2) {
      verticalOffset = 45; // Ajuste para subir os nomes
    } else if (this.currentNames.length === 1) {
      verticalOffset = 95; // Ajuste para subir os nomes
    }

    this.currentNames.forEach((name, idx) => {
      const nameText = createNameText(name);
      const nameContainer = createNameContainer(this.appContainer, nameText);
      positionNameText(nameContainer, nameText);
      positionNameContainer(nameContainer, idx, verticalOffset);
      this._addNameContainerInteraction(nameContainer, name);

      nameContainer.addChild(nameText);
      this.addChild(nameContainer);
    });
  }
  _addNameContainerInteraction(nameContainer, name) {
    nameContainer.eventMode = 'dynamic';
    nameContainer.cursor = 'pointer';
    nameContainer.on('click', () => this._onNameSelected(name));
  }
  _onNameSelected(selectedName) {
    if (selectedName === this.selectedCard.item.name) {
      this.emit('correct');
      this._handleCorrectAnswer(selectedName);
    } else {
      this.emit('error');
    }
  }

  _addCard() {
    if (this.selectedCard) {
      this.selectedCard.destroy(); // Remove referência antiga, se houver
    }
    const card = this._getRandomCardFromCurrentNames();
    this.selectedCard = card;
    card.x = 125; // Centraliza (ajuste conforme seu layout)
    card.y = 110;
    card.width = 280
    card.height = 280
    this.addChild(card);
  }


  _handleCorrectAnswer(selectedName) {
    this.currentRound++;
    // Atualiza nomes e rodada conforme as regras
    if (this.currentRound === 21 || this.currentRound === 22) {
      this._replaceName(selectedName, 1);
    } else if (this.currentRound === 23) {
      this._addNewName();
      this._replaceName(selectedName, 1);
    } else if (this.currentRound === 24) {
      this._replaceName(selectedName, 1);

    } else if (this.currentRound === 25) {
      this._addNewName();
      this._replaceName(selectedName, 1);
    } else if (this.currentRound === 26) {
      this._replaceName(selectedName, 1);
    } else if (this.currentRound >= 27 && this.currentRound <= 30) {
      this._removeName(selectedName);
    }
    if (this.currentRound > 30) {
      return;
    }
    this.usedNames.push(selectedName);
    this._refreshScreen();
  }

  _replaceName(nameToRemove, count) {
    // Encontra o índice do nome a ser removido
    const idx = this.currentNames.indexOf(nameToRemove);
    if (idx !== -1) {
      // Remove o nome da posição
      this.currentNames.splice(idx, 1);
      // Busca nomes disponíveis
      const available = this.allNames.filter(n => !this.currentNames.includes(n) && !this.usedNames.includes(n));
      if (available.length > 0) {
        // Sorteia um novo nome e coloca na mesma posição
        const newName = available[Math.floor(Math.random() * available.length)];
        this.currentNames.splice(idx, 0, newName);
        this.usedNames.push(newName);
      }
    }
    // this._removeName(nameToRemove);
    // for (let i = 0; i < count; i++) {
    //   this._addNewName();
    // }
  }

  _removeName(name) {
    this.currentNames = this.currentNames.filter(n => n !== name);
  }

  _addNewName() {
    const available = this.allNames.filter(n => !this.currentNames.includes(n) && !this.usedNames.includes(n));
    if (available.length > 0) {
      const newName = available[Math.floor(Math.random() * available.length)];
      this.currentNames.push(newName);
      this.usedNames.push(newName);
    }
  }


  _getRandomCardFromCurrentNames() {
    // Filtra cards cujo nome está em currentNames
    const possibleCards = this.cards.filter(card => this.currentNames.includes(card.item.name));
    const selectedCard = possibleCards[Math.floor(Math.random() * possibleCards.length)];
    if (!selectedCard) {
      console.log("Nenhum card disponível com os nomes atuais.");
    }
    return selectedCard;
  }

  _refreshScreen() {
    this.removeChildren();
    this._addComponents();
  }

  getItemCorreto() {
    // O card selecionado é o correto para a rodada
    return this.selectedCard?.item;
  }
}