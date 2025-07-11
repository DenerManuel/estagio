export function createCardGroups(cards) {
  let cardGroups = []
  let currentGroup = []

  cards.forEach((card, indice) => {
    currentGroup.push(card)

    if (currentGroup.length === 7 || indice === cards.length - 1) {
      cardGroups.push(currentGroup)
      currentGroup = []
    }
  })

  return cardGroups
}

export class CardsGroup {
  constructor(cards, groupSize = 7) {
    this.cards = cards
    this.groupSize = groupSize
    this.groups = this._groupCards()
  }

  _groupCards() {
    const allGroups = []
    let currentGroup = []

    this.cards.forEach((card, index) => {
      currentGroup.push(card)

      const isGroupFull = currentGroup.length === this.groupSize
      const isLastCard = index === this.cards.length - 1

      if (isGroupFull || isLastCard) {
        allGroups.push(currentGroup)
        currentGroup = []
      }
    })

    return allGroups
  }

  getGroups() {
    return this.groups
  }
}