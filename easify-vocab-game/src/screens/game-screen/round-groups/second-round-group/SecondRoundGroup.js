import { getUniqueRandomNames } from '../third-round-group/components/item-names/randomNames.js';
import { createNameText } from '../third-round-group/components/name-text/nameTextCreator.js';
import { positionNameText } from '../third-round-group/components/name-text/nameTextPosition.js';
import {
  createCardContainer,
  positionCardContainer,
} from './components/card-container/cardContainerManager.js';
import { positionItemCard } from './components/item-card/itemCardManager.js';
import {
  createNameContainer,
  positionNameContainer,
} from './components/name-container/nameContainerManager.js';
import { loadItemCards } from './helpers/card/card-creator/cardCreator.js';
import { configureCardMovement } from './helpers/card/card-movement/configureCardMovement.js';
import { onPointerLeave } from './helpers/card/drag-handlers/index.js';
import { getAvailableNames } from './helpers/names/namesHelper.js';
import { determineQuantityCardsOnScreen, getNames } from './helpers/round/roundHelper.js';

export class SecondRoundGroup extends PIXI.Container {
  constructor(app, category) {
    super();
    this.name = "SecondRoundGroup";
    this.app = app;
    this.appContainer = document.getElementById('game-container');
    this.category = category;
    this.currentRound = 10;
    this.allNames = [];
    this.usedNames = [];
    this.cards = [];
    this.correctsInCurrentRound = 0;
    this.containersOnScreen = 2;

    this._initialize();
    this.app.view.addEventListener('pointerleave', this._onPointerLeave.bind(this));
  }

  _onPointerLeave() {
    if (this.cardRefs) {
      onPointerLeave(this.cardRefs, this.app, this._dragTickerHandler);
    }
  }

  async _initialize() {
    await this._loadCards();
    this.allNames = this.cards.map((card) => card.item.name);

    this._setupRound();
    this._addComponents();
  }

  async _loadCards() {
    this.cards = await loadItemCards(this.category);
  }

  _setupRound(index = null) {
    this.quantityCardsOnScreen = determineQuantityCardsOnScreen(this.currentRound);

    if (this.currentRound < 17) {
      const availableNames = getAvailableNames(this.allNames, this.usedNames);
      this.currentCardNames = getNames(
        availableNames,
        this.currentRound,
        this.currentCardNames,
        index
      );
      this.currentCardNames.forEach((name) => {
        this.usedNames.push(name);
      });
    }

    if (this.currentRound % 2 === 0) {
      this.currentContainerNames = getUniqueRandomNames(
        this.currentCardNames,
        this.containersOnScreen
      );
    }

    this.correctsInCurrentRound = 0;
  }

  _addComponents() {
    this.removeChildren();
    if (this.quantityCardsOnScreen === 0 || this.currentRound > 19) {
      this.emit('end');
      return;
    }
    this._addCards();
    this._addCardContainers();
  }

  _addCardContainers() {
    this.containerRefs = [];
    this.currentContainerNames.forEach((name, index) => {
      const cardContainer = createCardContainer(this.appContainer);
      positionCardContainer(cardContainer, index, this.currentRound);
      cardContainer.name = name;

      // Texto do nome
      const nameContainer = createNameContainer(this.appContainer);
      positionNameContainer(nameContainer, index, this.currentRound);

      const nameText = createNameText(name);
      positionNameText(nameContainer, nameText);
      nameContainer.addChild(nameText);
      nameContainer.name = name;

      this.containerRefs.push({ cardContainer, nameContainer });
      this.addChild(cardContainer, nameContainer);
    });
  }

  _addCards() {
    this.cardRefs = [];
    this.currentCardNames.forEach((name, index) => {
      const cardData = this.cards.find((card) => card.item.name === name);
      if (!cardData) return;

      const card = cardData.clone?.() || cardData;
      card.name = name;
      positionItemCard(card, index, this.currentRound);
      // card.x = 165;
      // card.y = 35 + index * 220;

      configureCardMovement({
        app: this.app,
        card,
        dragTickerHandler: this._dragTickerHandler,
        onDrop: (card) => this._handleCardDrop(card),
      });

      this.cardRefs.push(card);
      this.addChild(card);
    });
  }

  _handleCardDrop(card) {
    if (card.hasHit) return;
    const targetContainer = this.containerRefs.find(
      (ref) => this._isOverlapping(card, ref.cardContainer) && ref.cardContainer.name === card.name
    );

    if (targetContainer) {
      this.emit('correct');
      this.currentRound++;
      card.hasHit = true;

      const index = this.currentCardNames.indexOf(card.name);

      if (this.currentRound >= 17) {
        this.currentCardNames.splice(index, 1);
      }
      // Acerto
      card.x = targetContainer.x - 85;
      card.y = targetContainer.y - 155;
      card.eventMode = 'static';
      card.cursor = 'default';

      this.usedNames.push(card.name);
      this.correctsInCurrentRound++;

      // Verifica condições de término
      if (this.currentRound > 19) {
        this.emit('end');
      } else {
        this._setupRound(index);
        this._addComponents();
      }
    } else {
      this.emit('error');
      // Volta para posição original
      if (card.dragStart) {
        card.x = card.dragStart.x;
        card.y = card.dragStart.y;
      }
    }
  }

  _isOverlapping(obj1, obj2) {
    const b1 = obj1.getBounds();
    const b2 = obj2.getBounds();
    // return b1.x + b1.width > b2.x &&
    //   b1.x < b2.x + b2.width &&
    //   b1.y + b1.height > b2.y &&
    //   b1.y < b2.y + b2.height;

    // Defina o quanto quer "diminuir" a área de colisão (exemplo: 30px de cada lado)
    const padding = 80;

    // Crie uma área interna reduzida para o cardContainer
    const innerB2 = {
      x: b2.x + padding,
      y: b2.y + padding,
      width: b2.width - 2 * padding,
      height: b2.height - 2 * padding,
    };

    // Verifique colisão apenas com a área interna
    return (
      b1.x + b1.width > innerB2.x &&
      b1.x < innerB2.x + innerB2.width &&
      b1.y + b1.height > innerB2.y &&
      b1.y < innerB2.y + innerB2.height
    );
  }
  getItemCorreto() {
    // Retorna o objeto do card correto da rodada atual
    // Supondo que o nome correto é o nome do card que deveria ser arrastado para o container correto
    // Aqui, pegue o nome do card que está sendo testado (pode ser o primeiro da lista)
    const nomeCorreto = this.currentCardNames?.[0];
    return this.cards.find((card) => card.item.name === nomeCorreto)?.item;
  }
}
