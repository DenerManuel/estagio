/**
 * Adiciona uma lista de cartões de itens como filhos de um contêiner PIXI.
 * Esta função torna os cartões visíveis na tela ao adicioná-los ao stage do jogo ou a um grupo específico.
 *
 * @param {object} firstRoundGroupInstance - A instância do grupo do primeiro round, que deve ser um contêiner PIXI (ou herdar dele).
 * @param {import('../../../../components/item-card/ItemCard.js').default[]} firstRoundGroupInstance.selectedCards - A lista de cartões a serem adicionados à tela.
 * @param {(...children: PIXI.DisplayObject[]) => PIXI.DisplayObject} firstRoundGroupInstance.addChild - O método para adicionar filhos ao contêiner.
 */
export function addCardsInScreen(firstRoundGroupInstance) {
  firstRoundGroupInstance.selectedCards.forEach((card) => {
    firstRoundGroupInstance.addChild(card);
  });
}
