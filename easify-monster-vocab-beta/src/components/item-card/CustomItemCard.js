import { configureItemCardOptions } from './ItemCardOptions.js';
import { ItemCardBackground } from './ItemCardBackground.js'
import { ItemCardImage } from './item-card-image/ItemCardImage.js'
import { configureItemCardImage } from './item-card-image/ImageManager.js';
import { ItemCardInteraction } from './ItemCardInteraction.js';

export class CustomItemCard extends PIXI.Container {
  constructor(category, item, itemCardOptions = {}) {
    super();
    this.settings = configureItemCardOptions(itemCardOptions);
    this.category = category
    this.item = item;

    this._addComponents();
  }
  changeSize(newWidth, newHeight) {
    // Atualiza as configurações
    this.settings.width = newWidth;
    this.settings.height = newHeight;

    // Atualiza o background
    if (this.background) {
      this.background.settings.width = newWidth;
      this.background.settings.height = newHeight;
      this.background.createBackground();
    }

    // Atualiza a imagem
    if (this.image) {
      this.image._adjustImage(this.settings);
      configureItemCardImage([this.image], this.background);
    }
  }

  _addComponents() {
    this._addBackground();
    this._addImage();
    this._addInteraction();
  }

  _addBackground() {
    this.background = new ItemCardBackground(this.settings);
    this.addChild(this.background)
  }

  _addImage() {
    const IMAGE_URL = `assets/categories/${this.category.title}/${this.item.image}`;
    this.image = new ItemCardImage(IMAGE_URL, this.settings)
    this.background.addChild(this.image)
    this.background.createBackground();
    configureItemCardImage([this.image], this.background)
  }

  _addInteraction() {
    if (this.settings.hover) {
      new ItemCardInteraction(this, this.settings);
    }
  }
}