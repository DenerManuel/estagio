import { CustomItemCard } from '../../../../components/item-card/CustomItemCard.js';

const ITEM_CARD_OPTIONS = {
  width: 230,
  height: 230,
  backgroundColor: 0xf5f5f5,
  borderColor: 0xfb7302,
  borderHoverColor: 0x03bb85,
  borderSize: 5,
  borderRadius: 40,
  hover: true,
};

export class Card extends CustomItemCard {
  constructor(gameCategory, item) {
    super(gameCategory, item, ITEM_CARD_OPTIONS);
  }
}
