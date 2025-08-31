const ITEM_CARD_OPTIONS = {
  width: 170,
  height: 170,
  backgroundColor: 0xf5f5f5,
  borderColor: 0xfb7302,
  borderHoverColor: 0x03bb85,
  borderSize: 5,
  borderRadius: 40,
  hover: true,
};

export class Card extends CustomItemCards {
  constructor(gameCategory) {
    super(gameCategory, item, ITEM_CARD_OPTIONS);
  }
}
