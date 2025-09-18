import { CustomItemCard } from '../../../../components/item-card-refatored/CustomItemCard.js';
import { firstRoundGroupStyles } from '../../../../styles/screens-components-styles/game-screen/round-groups/first-round-group/first-round-components-styles.js';

export class ItemCard extends CustomItemCard {
  constructor(category, item) {
    super(category, item, firstRoundGroupStyles.cards.desktop.firstGroupCardsStyles);
    this.category = category;
    this.item = item;
  }

  changeImageSize(cardStyles) {
    this.image.width = cardStyles.width;
    this.image.height = cardStyles.height;
    this._changeImagePosition(cardStyles);
  }

  _changeImagePosition(cardStyles) {
    this.image.anchor.set(0.5);
    this.image.position.set(cardStyles.width / 2, cardStyles.height / 2);
  }
}
