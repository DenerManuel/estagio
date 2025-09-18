import { CustomItemCard } from '../../../../../../components/item-card/CustomItemCard.js';
import { thirdRoundGroupPositions } from '../../../../../../styles/screens-components-positions/game-screen/round-groups/third-round-group/third-round-group-components-positions.js';
import { thirdRoundGroupStyles } from '../../../../../../styles/screens-components-styles/game-screen/round-groups/third-roun-group/third-round-components-styles.js';

/**
 * Aplica estilos visuais específicos para a terceira rodada a uma lista de cartões de itens.
 * A função modifica cada cartão diretamente, ajustando seu estilo, tamanho da imagem e dimensões
 * com base nas configurações definidas para a terceira rodada.
 *
 * @async
 * @export
 * @param {Array<CustomItemCard>} itemCards - O array de instâncias de CustomItemCard a serem modificadas.
 * @returns {Promise<Array<CustomItemCard>>} Uma promessa que resolve para o mesmo array de cartões de itens com os estilos atualizados.
 */
export async function changeCardStyles(itemCards) {
  itemCards.forEach((itemCard) => {
    itemCard.updateStyle(thirdRoundGroupStyles.card.desktop);
    itemCard.changeImageSize(thirdRoundGroupStyles.card.desktop);
    itemCard.width = thirdRoundGroupStyles.card.desktop.width;
    itemCard.height = thirdRoundGroupStyles.card.desktop.height;
    itemCard.image.width -= 30;
    itemCard.image.height -= 30;
    positionCard(itemCard);
  });
  return itemCards;
}

function positionCard(itemCard) {
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  const IS_MOBILE = mediaQuery.matches;
  let POSITION;

  if (IS_MOBILE) {
    POSITION = thirdRoundGroupPositions.card.mobile;
  } else {
    POSITION = thirdRoundGroupPositions.card.desktop;
  }

  itemCard.x = POSITION.x;
  itemCard.y = POSITION.y;
}
