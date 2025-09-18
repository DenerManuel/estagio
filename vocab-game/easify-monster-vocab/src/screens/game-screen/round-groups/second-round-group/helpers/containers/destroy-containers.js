/**
 * Destrói e remove todos os containers (card e name) da tela e do array de referências.
 */
export function destroyContainers(secondRoundGroupInstance) {
  secondRoundGroupInstance.containerRefs.forEach((ref) => {
    ref.cardContainer?.destroy({ children: true });
    ref.nameContainer?.destroy({ children: true });
  });
  secondRoundGroupInstance.containerRefs = [];
}
