import { CustomItemCard } from "../../../../../../components/item-card/CustomItemCard.js";

export async function loadItemCards(gameCategory) {
  const cards = [];
  console.log()

  gameCategory.items.forEach((item, index) => {
    const card = _createCard(gameCategory, item);
    card.index = index;
    cards.push(card);
  });
  return cards;
}
const _createCard = (gameCategory, item) => {
  const ITEM_CARD_OPTIONS = {
    width: 170,
    height: 170,
    backgroundColor: 0xF5F5F5,
    borderColor: 0xFB7302,
    borderHoverColor: 0x03BB85,
    borderSize: 5,
    borderRadius: 40,
    hover: true
  };

  return new CustomItemCard(gameCategory, item, ITEM_CARD_OPTIONS);
}