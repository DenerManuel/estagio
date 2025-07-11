export const createItemsText = (categoryItems) => {
  return formatTooltipText(categoryItems);
}

/**
 * Formata uma lista de itens em texto de tooltip, respeitando limites de linhas e de caracteres.
 * @param {Array<{ name: string }>} items - Lista de itens com nome.
 * @param {number} maxCharsPerLine - Máximo de caracteres por linha.
 * @param {number} maxLines - Máximo de linhas no tooltip.
 * @returns {string} Texto formatado para o tooltip.
 */
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

/**
 * Preenche a última linha possível, adicionando "..." se sobrar item.
 * @returns {number} Novo índice para o loop externo.
 */
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