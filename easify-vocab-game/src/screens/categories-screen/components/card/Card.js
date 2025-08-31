import { CustomContainer } from "../../../../components/container/CustomContainer.js";
import { loadImage } from "../../../../utils/load-images/loadImage.js";
import { CardImage } from "./CardImage.js";
import { CardInteraction } from "./CardInteraction.js";
import { CardTitle } from "./CardTitle.js";
import { categoriesScreenStyles } from "../../../../styles/screens-components-styles/categories-screen/categories-screen-components-styles.js"

export class Card extends CustomContainer {
  constructor(category, cardImagePath) {
    super(null, categoriesScreenStyles.card.desktop);
    this.styles = categoriesScreenStyles.card.desktop
    this.category = category
    this.cardImagePath = cardImagePath

    this._createComponents()
    this._createInteractions()
  }

  _createComponents() {
    this._createTitle();
    this._createImage();
  }

  _createTitle() {
    this.title = new CardTitle(this.category.title, this.styles)
    this.addChild(this.title)
  }

  async _createImage() {
    const imageTexture = await loadImage(this.cardImagePath)

    this.image = new CardImage(imageTexture, this.styles)
    this.addChild(this.image)
  }

  _createInteractions() {
    this.interactions = new CardInteraction(this, this.styles)
  }
}
