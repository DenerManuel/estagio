import { CardContainer, NameContainer } from '../../components/second-group-components.js';

/**
 * Cria e adiciona os containers de cards e nomes na tela com base nos nomes selecionados.
 * @private
 */
export function createAndAddContainers(secondRoundGroupInstance) {
  // Cria os novos containers para a rodada atual.
  secondRoundGroupInstance.selectedNames.forEach((name, index) => {
    const cardContainer = new CardContainer(index, secondRoundGroupInstance.currentRound);
    cardContainer.name = name; // Atribui o nome para verificação no drop

    const nameContainer = new NameContainer(name, index, secondRoundGroupInstance.currentRound);
    nameContainer.name = name;

    secondRoundGroupInstance.containerRefs.push({ cardContainer, nameContainer });
    secondRoundGroupInstance.addChild(cardContainer, nameContainer);
  });
}
