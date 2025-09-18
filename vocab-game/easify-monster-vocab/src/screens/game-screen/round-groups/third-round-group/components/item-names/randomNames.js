export function getUniqueRandomNames(allNames, qtd = 3) {
  // Recebe uma lista de nomes e retorna três nomes únicos aleatórios
  const shuffled = allNames.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, qtd);
}