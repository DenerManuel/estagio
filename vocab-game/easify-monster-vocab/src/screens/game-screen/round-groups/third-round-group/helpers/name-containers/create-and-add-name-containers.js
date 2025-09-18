import { NameContainer } from '../../components/name-container/NameContainer.js';

/**
 * Cria e adiciona os namesContainers na tela com base nos nomes selecionados.
 * @private
 */
export function createAndAddNameContainers(thirdRoundGroupInstance) {
  // Cria os novos containers para a rodada atual.
  thirdRoundGroupInstance.selectedNames.forEach((name) => {
    // Verifica se já existe um contêiner para este nome.
    const containerExists = thirdRoundGroupInstance.selectedNameContainers.some(
      (container) => container.name === name
    );
    // Se não existir, cria um novo.
    if (!containerExists) {
      const nameContainer = new NameContainer(name);
      nameContainer.name = name;
      thirdRoundGroupInstance.selectedNameContainers.push(nameContainer);
      thirdRoundGroupInstance.addChild(nameContainer);
    }
  });
}
