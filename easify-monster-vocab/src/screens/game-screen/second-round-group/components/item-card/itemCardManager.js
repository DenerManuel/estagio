/**
 * Posiciona o card com base na rodada atual e seu índice.
 * @param {Object} card - O card com propriedades x e y (posições) a serem definidas.
 * @param {number} index - O índice do card.
 * @param {number} currentRound - O número da rodada atual.
 */
export function positionItemCard(card, index, currentRound) {
  // Configuração para posições de cartas por intervalo de rodadas
  const positionConfigs = [
    {
      rounds: [10, 11],
      positions: (i) => ({ x: 165, y: 35 + i * 220 }),
    },
    {
      rounds: [12, 13],
      positions: (i) =>
        i <= 1
          ? { x: 55 + i * 185, y: 55 }
          : { x: 150, y: 245 },
    },
    {
      rounds: [14, 16],
      positions: (i) => {
        if (i === 0) return { x: 40, y: 60 };
        if (i <= 2) return { x: 230 + (i - 1) * 190, y: 40 };
        return { x: 610, y: 60 };
      },
    },
    {
      rounds: [17, 17],
      positions: (i) => {
        if (i === 0) return { x: 120, y: 65 };
        if (i === 1) return { x: 320, y: 40 };
        return { x: 520, y: 65 };
      },
    },
    {
      rounds: [18, 18],
      positions: (i) => ({ x: 210 + i * 225, y: 40 }),
    },
    {
      rounds: [19, 19],
      positions: () => ({ x: 325, y: 40 }),
    },
  ];

  // Encontra a configuração que corresponde à rodada atual
  const config = positionConfigs.find(({ rounds }) =>
    currentRound >= rounds[0] && currentRound <= rounds[1]
  );

  // Aplicar a posição com base no índice
  const { x, y } = config.positions(index);
  card.x = x;
  card.y = y;
}