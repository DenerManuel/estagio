import { App } from '../../../../../../app/App.js';
import { firstRoundGroupPositions } from '../../../../../../styles/screens-components-positions/game-screen/round-groups/first-round-group/first-round-group-components-positions.js';
import { firstRoundGroupStyles } from '../../../../../../styles/screens-components-styles/game-screen/round-groups/first-round-group/first-round-components-styles.js';

/**
 * Posiciona e estiliza um grupo de cartas baseado na configuração de grupo e dispositivo.
 *
 * @param {Array} selectedCards - Cartas selecionadas para posicionamento.
 * @param {string} groupKey - Chave do grupo: 'firstRoundGroupPositions', 'secondRoundGroupPositions', 'thirdRoundGroupPositions'.
 * @param {string} deviceType - Tipo de dispositivo: 'desktop' ou 'mobile'.
 */
export function positionCards(selectedCards, groupKey, deviceType = 'desktop') {
  const groupPosition = firstRoundGroupPositions.cards?.[deviceType]?.[groupKey];
  const groupStyle =
    firstRoundGroupStyles.cards?.[deviceType]?.[groupKey.replace('Positions', 'Styles')];

  if (!groupPosition) {
    console.error(
      `Configuração de posição não encontrada para o grupo "${groupKey}" e device "${deviceType}".`
    );
    return;
  }

  if (!groupStyle) {
    console.error(
      `Configuração de estilo não encontrada para o grupo "${groupKey}" e device "${deviceType}".`
    );
    return;
  }

  const cardCount = Object.keys(groupPosition).length;

  if (selectedCards.length !== cardCount) {
    console.error(
      `Número de cartas fornecidas (${selectedCards.length}) não bate com a configuração (${cardCount}) para o grupo "${groupKey}".`,
      selectedCards
    );
    return;
  }

  selectedCards.forEach((card, index) => {
    const cardKey = `card${index + 1}`;
    const position = groupPosition[cardKey];

    if (!position) {
      console.warn(`Posição não encontrada para ${cardKey} em ${groupKey}`);
      return;
    }
    // Aplica o estilo do grupo
    card.width = groupStyle.width;
    card.height = groupStyle.height;

    // Posiciona o card
    card.position.set(position.getPositionX(), position.getPositionY());
  });
}
