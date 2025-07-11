// VOU UTILIZAR ESSA CLASSE DEPOIS.

export class AvailableIndexManager {
  constructor(size = 10) {
    this.size = size;
    this.reset();
  }

  reset() {
    this.availableIndexes = Array.from({ length: this.size }, (_, i) => i);
  }

  getAvailableCards(cards) {
    return cards.filter(card => this.availableIndexes.includes(card.index));
  }

  getRandomCard(cards) {
    const availableCards = this.getAvailableCards(cards);
    if (availableCards.length === 0) return null;
    const idx = Math.floor(Math.random() * availableCards.length);
    const card = availableCards[idx];
    this.removeIndex(card.index);
    return card;
  }

  removeIndex(index) {
    const i = this.availableIndexes.indexOf(index);
    if (i !== -1) this.availableIndexes.splice(i, 1);
  }
}