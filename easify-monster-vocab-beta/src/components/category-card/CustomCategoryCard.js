import { configureCategoryCardOptions } from './CategoryCardOptions.js';
import { CategoryCardBackground } from './CategoryCardBackground.js'
import { CategoryCardImage } from './category-card-image/CategoryCardImage.js'
import { CategoryCardTitle } from './CategoryCardTitle.js'
import { CategoryCardInteraction } from './CategoryCardInteraction.js'
import { configureCategoryCardImage } from './category-card-image/imageManager.js';

export class CustomCategoryCard extends PIXI.Container {
  constructor(category, categoryCardOptions = {}) {
    super();
    this.options = configureCategoryCardOptions(categoryCardOptions);
    this.category = category;
    this._addComponents();
    this._addInteraction();
  }

  _addComponents() {
    this._addBackground();
    this._addImage();
    this._addTitle()
    
  }

  _addBackground() {
    this.background = new CategoryCardBackground(this.options);
    this.addChild(this.background)
  }

  _addImage() {
    const IMAGE_URL = `assets/categories/${this.category.title}/${this.category.items[0].image}`;
    this.image = new CategoryCardImage(IMAGE_URL, this.options)
    this.background.addChild(this.image)
    this.background.createBackground();
    configureCategoryCardImage([this.image], this.background)
    // configureImage([this.image], this.background, 50);
  }

  _addTitle() {
    this.title = new CategoryCardTitle(this.category.title, this.options)
    this.addChild(this.title)
  }

  _addInteraction() {
    this.interaction = new CategoryCardInteraction(this, this.options);
  }
}