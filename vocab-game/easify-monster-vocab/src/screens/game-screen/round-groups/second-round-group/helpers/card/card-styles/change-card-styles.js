import { CustomItemCard } from '../../../../../../../components/item-card/CustomItemCard.js';
import { secondRoundGroupStyles } from '../../../../../../../styles/screens-components-styles/game-screen/round-groups/second-round-group/second-round-components-styles.js';

/**
 * Aplica estilos visuais específicos para a segunda rodada a uma lista de cartões de itens.
 * A função modifica cada cartão diretamente, ajustando seu estilo, tamanho da imagem e dimensões
 * com base nas configurações definidas para a segunda rodada.
 *
 * @async
 * @export
 * @param {Array<CustomItemCard>} itemCards - O array de instâncias de CustomItemCard a serem modificadas.
 * @returns {Promise<Array<CustomItemCard>>} Uma promessa que resolve para o mesmo array de cartões de itens com os estilos atualizados.
 */
export async function changeCardStyles(itemCards) {
  itemCards.forEach((itemCard) => {
    itemCard.updateStyle(secondRoundGroupStyles.card.desktop);
    itemCard.changeImageSize(secondRoundGroupStyles.card.desktop);
    itemCard.width = secondRoundGroupStyles.card.desktop.width
    itemCard.height = secondRoundGroupStyles.card.desktop.height
    itemCard.image.width -= 30
    itemCard.image.height -= 30
  });
  return itemCards
}
