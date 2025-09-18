import { selectedRandomNames } from './selected-random-names.js';

/**
 * Atualiza a lista de nomes selecionados para a rodada.
 */
export function updateSelectedNames(secondRoundGroupInstance) {
  secondRoundGroupInstance.selectedNames = selectedRandomNames(
    secondRoundGroupInstance.selectedCards,
    secondRoundGroupInstance.usedNames
  );
}
