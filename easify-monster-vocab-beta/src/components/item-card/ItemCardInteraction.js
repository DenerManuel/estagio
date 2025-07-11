export class ItemCardInteraction {
  constructor(itemCard, itemCardConfig) {
    this.itemCard = itemCard;
    this.options = itemCardConfig;

    this._configureInteractionType();
    this._configureEvents();
  }
  
  _configureInteractionType() {
    this.itemCard.eventMode = 'dynamic';
    this.itemCard.cursor = 'pointer';
  }

  _configureEvents() {
    this.itemCard.on('pointerover', () => this._mouseOver());
    this.itemCard.on('pointerout', () => this._mouseOut());
    this.itemCard.on('pointerup', () => this._mouseUp());
  }

  _mouseOver() {
    this.itemCard.background.changeBorderColor(this.options.borderHoverColor);
  }
  _mouseOut() {
    this.itemCard.background.changeBorderColor(this.options.borderColor);
  }
  _mouseUp() {
    this.itemCard.background.changeBorderColor(this.options.borderColor);
  }
}