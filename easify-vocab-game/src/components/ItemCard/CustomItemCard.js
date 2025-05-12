import { configureItemCardOptions } from './ItemCardOptions.js';
import { ItemCardBackground } from './ItemCardBackground.js'
import { ItemCardImage } from './ItemCardImage/ItemCardImage.js'
import { configureImage } from '../../screens/ReviewScreen/components/ImageManager.js';

export class CustomItemCard extends PIXI.Container {
  constructor(category, item, itemCardOptions = {}) {
    super();
    this.settings = configureItemCardOptions(itemCardOptions);
    this.category = category
    this.item = item;

    this._addComponents();
  }

  _addComponents() {
    this._addBackground();
    this._addImage();
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
    configureImage([this.image], this.background, 40);
  }
}