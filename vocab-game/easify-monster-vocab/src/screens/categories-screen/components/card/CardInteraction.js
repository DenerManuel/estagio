export class CardInteraction {
  constructor(card, cardOptions) {
    this.card = card;
    this.cardOptions = cardOptions;

    this._configureInteractionType();
    this._configureEvents();
  }

  _configureInteractionType() {
    this.card.eventMode = 'dynamic';
    this.card.cursor = 'pointer';
  }

  _configureEvents() {
    this.card.on('pointerover', () => this._mouseOver());
    this.card.on('pointerout', () => this._mouseOut());
    this.card.on('pointerup', () => this._mouseUp());
  }

  _mouseOver() {
    this.card.changeBorderColor(this.cardOptions.borderHoverColor);
  }
  _mouseOut() {
    this.card.changeBorderColor(this.cardOptions.borderColor);
  }
  _mouseUp() {
    this.card.changeBorderColor(this.cardOptions.borderColor);
  }
}
