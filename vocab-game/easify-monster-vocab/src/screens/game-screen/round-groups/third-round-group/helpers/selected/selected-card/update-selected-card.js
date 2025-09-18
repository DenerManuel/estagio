import { pickRandomFromArray } from '../../../../../../../utils/random/pick-random-from-array.js';

/**
 * Atualiza o card selecionado para a rodada.
 * A função seleciona um nome aleatório da lista `selectedNames`, encontra o card
 * correspondente a esse nome e o define como o `selectedCard` da rodada.
 *
 * @param {import('../../../ThirdRoundGroup2.js').ThirdRoundGroup} thirdRoundGroupInstance - A instância do grupo do terceiro round.
 */
export function updateSelectedCard(thirdRoundGroupInstance) {
  const cards = thirdRoundGroupInstance.cards;
  const selectedNames = thirdRoundGroupInstance.selectedNames;

  // 1. Seleciona um nome aleatório da lista de nomes já selecionados para a rodada.
  // `pickRandomFromArray` retorna um array, então usamos desestruturação para pegar o primeiro elemento.
  const [randomName] = pickRandomFromArray(selectedNames, 1);

  // 2. Encontra o card correspondente ao nome selecionado.
  const selectedCard = cards.find((card) => card.item.name === randomName);

  // 3. Atualiza a instância do jogo com o novo card selecionado.
  thirdRoundGroupInstance.selectedCard = selectedCard;
}
