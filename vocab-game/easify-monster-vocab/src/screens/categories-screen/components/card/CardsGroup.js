/**
 * Agrupa uma lista de cartas em grupos de tamanho definido.
 * Usado para organizar as cartas exibidas na tela de categorias.
 */
export class CardsGroup {
  /**
   * Cria uma instância de CardsGroup.
   * @param {Array} cards - Lista de cartas a serem agrupadas.
   * @param {number} [groupSize=7] - Tamanho de cada grupo.
   */
  constructor(cards, groupSize = 7) {
    this.cards = cards
    this.groupSize = groupSize
    this.groups = this._groupCards()
  }

  /**
   * Agrupa as cartas em arrays de tamanho groupSize (7 por padrão).
   * @private
   * @returns {Array[]} Array de grupos de cartas.
   */
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

  /**
   * Retorna os grupos de cartas criados.
   * @returns {Array[]} Array de grupos de cartas.
   */
  getGroups() {
    return this.groups
  }
}