import { Container } from 'pixi.js';
import { thirdRoundGroupStyles } from '../../../../styles/screens-components-styles/game-screen/round-groups/third-roun-group/third-round-components-styles.js';
import * as ThirdRoundHelpers from './helpers/third-group-helpers.js';

export class ThirdRoundGroup extends Container {
  constructor(itemCards) {
    super();
    this.cards = itemCards;
    this.currentRound = 21;
    this.allNames = [];
    this.usedNames = [];
    this.selectedNames = [];
    this.selectedNameContainers = [];
    this.selectedCard = null;

    this._initialize();
    this._setResponsive();
  }

  _setResponsive() {
    this.mediaQuery = window.matchMedia('(max-width: 767px)');
    const IS_MOBILE = this.mediaQuery.matches;

    if (IS_MOBILE) {
      this.cards.forEach((card) => {
        card.updateStyle(thirdRoundGroupStyles.card.mobile);
        card.changeImageSize(thirdRoundGroupStyles.card.mobile);
        card.width = thirdRoundGroupStyles.card.mobile.width;
        card.height = thirdRoundGroupStyles.card.mobile.height;
        card.image.width -= 30;
        card.image.height -= 30;
      });
    }
  }

  async _initialize() {
    await this._changeCardsStyles();
    this._getAllNames();
    this._addComponents();
  }

  async _changeCardsStyles() {
    this.cards = await ThirdRoundHelpers.changeCardStyles(this.cards);
  }

  _getAllNames() {
    this.cards.forEach((card) => {
      this.allNames.push(card.item.name);
    });
  }

  _addComponents() {
    this._addNameContainers();
    this._addCard();
  }

  _addNameContainers(numberOfNameContainers = 3) {
    ThirdRoundHelpers.updateSelectedNames(numberOfNameContainers, this);
    ThirdRoundHelpers.createAndAddNameContainers(this);
    ThirdRoundHelpers.configureSelectedNames(this);
    ThirdRoundHelpers.positionNameContainers(this);
  }

  _addCard() {
    if (this.selectedCard) this.removeChild(this.selectedCard);
    ThirdRoundHelpers.updateSelectedCard(this);
    this.addChild(this.selectedCard);
  }

  _continueGame(correctNameContainer) {
    ThirdRoundHelpers.continueGame(this, correctNameContainer);
  }
}
