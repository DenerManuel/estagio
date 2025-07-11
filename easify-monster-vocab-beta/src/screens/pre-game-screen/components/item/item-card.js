import { CustomItemCard } from "../../../../components/item-card/CustomItemCard.js";
import { preGameScreenStyles } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-styles.js";

export class ItemCard extends CustomItemCard {
  constructor(category, item) {
    super(category, item, preGameScreenStyles.itemCard)
    this.visible = false
  }
}