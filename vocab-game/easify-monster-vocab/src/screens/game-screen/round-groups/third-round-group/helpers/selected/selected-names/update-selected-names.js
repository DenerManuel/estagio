import { NameContainer } from '../../../components/name-container/NameContainer.js';
import { selectNRandomNames } from './select-n-random-names.js';

export function updateSelectedNames(numberOfNames, secondRoundGroupInstance) {
  const namesToAddCount = numberOfNames - secondRoundGroupInstance.selectedNames.length;

  if (namesToAddCount <= 0) return;

  const newNames = selectNRandomNames(
    secondRoundGroupInstance.allNames,
    namesToAddCount,
    secondRoundGroupInstance.usedNames
  );

  // Adiciona os novos nomes tanto à lista de nomes na tela (selectedCards)
  // quanto à lista de nomes já "em uso" (usedNames) para não serem selecionados novamente.
  secondRoundGroupInstance.selectedNames.push(...newNames);
  secondRoundGroupInstance.usedNames.push(...newNames);
}
