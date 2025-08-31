/**
 * Cria uma string formatada com os nomes dos itens de uma categoria,
 * ideal para ser exibida em um tooltip. A função limita o texto a um
 * número máximo de caracteres por linha e a um número máximo de linhas,
 * adicionando "..." ao final se nem todos os itens puderem ser exibidos.
 *
 * @param {Array<{name: string}>} categoryItems - A lista de itens da categoria. Cada item deve ter uma propriedade 'name'.
 * @returns {string} Uma string formatada com os nomes dos itens, separados por vírgula e com quebras de linha.
 */
export const createItemsText = (categoryItems) => {
  return formatTooltipText(categoryItems);
};

function formatTooltipText(items, maxCharsPerLine = 40, maxLines = 2) {
  const lines = buildLines(items, maxCharsPerLine, maxLines);
  return lines.join('\n');
}

function buildLines(items, maxChars, maxLines) {
  const lines = [];
  let currentLine = '';

  for (let index = 0; index < items.length; index++) {
    const item = items[index].name;
    const candidate = currentLine ? `${currentLine}, ${item}` : item;

    if (candidate.length <= maxChars) {
      currentLine = candidate;
      continue;
    }

    lines.push(currentLine);
    currentLine = item;

    // Se for a última linha permitida, tenta encaixar o máximo e coloca "..."
    if (lines.length === maxLines - 1) {
      index = fillLastLine(items, index, currentLine, maxChars, lines);
      break;
    }
  }

  if (currentLine && lines.length < maxLines) {
    lines.push(currentLine);
  }

  return lines;
}

function fillLastLine(items, startIndex, lineContent, maxChars, lines) {
  let currentLine = lineContent;
  let i = startIndex;

  while (i + 1 < items.length) {
    const nextName = items[i + 1].name;
    const testLine = `${currentLine}, ${nextName}`;

    if (testLine.length > maxChars) break;

    currentLine = testLine;
    i++;
  }

  if (i + 1 < items.length) {
    currentLine += ', ...';
  }

  lines.push(currentLine);
  return i;
}
