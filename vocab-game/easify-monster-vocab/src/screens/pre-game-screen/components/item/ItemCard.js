import { CustomItemCard } from '../../../../components/item-card-refatored/CustomItemCard.js';
import { preGameScreenStyles } from '../../../../styles/screens-components-styles/pre-game-screen/pre-game-screen-components-styles.js';

export class ItemCard extends CustomItemCard {
  constructor(category, item) {
    super(category, item, preGameScreenStyles.itemCard.desktop);
    this.category = category;
    this.item = item;
  }

  changeImageSize(cardStyles) {
    this.image.width = cardStyles.width - 50;
    this.image.height = cardStyles.height - 50;
    this._changeImagePosition(cardStyles);
  }

  _changeImagePosition(cardStyles) {
    this.image.anchor.set(0.5);
    this.image.position.set(cardStyles.width / 2, cardStyles.height / 2 - 10);
  }

  _setImagePosition() {
    this.image.y -= 10;
  }
}
