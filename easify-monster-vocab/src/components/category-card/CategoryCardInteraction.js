export class CategoryCardInteraction {
  constructor(categoryCard, categoryCardConfig) {
    this.categoryCard = categoryCard;
    this.options = categoryCardConfig;

    this._configureInteractionType();
    this._configureEvents();
  }
  
  _configureInteractionType() {
    this.categoryCard.eventMode = 'dynamic';
    this.categoryCard.cursor = 'pointer';
  }

  _configureEvents() {
    this.categoryCard.on('pointerover', () => this._mouseOver());
    this.categoryCard.on('pointerout', () => this._mouseOut());
    this.categoryCard.on('pointerup', () => this._mouseUp());
  }

  _mouseOver() {
    this.categoryCard.background.changeBorderColor(this.options.borderHoverColor);
  }
  _mouseOut() {
    this.categoryCard.background.changeBorderColor(this.options.borderColor);
  }
  _mouseUp() {
    this.categoryCard.background.changeBorderColor(this.options.borderColor);
  }
}