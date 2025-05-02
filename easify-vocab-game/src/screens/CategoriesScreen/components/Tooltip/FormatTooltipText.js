export function formatTooltipText(categoryItems) {
  const MAX_CHARACTERS_PER_LINE = 40;
  const MAX_NUMBER_OF_LINES = 2;

  const lines = generateFormattedLines(categoryItems, MAX_CHARACTERS_PER_LINE, MAX_NUMBER_OF_LINES);

  return lines.join('\n');
}

const generateFormattedLines = (categoryItems, maxCharactersPerLine, maxNumberOfLines) => {
  let lines = [];
  let currentLine = '';

  for (let i = 0; i < categoryItems.length; i++) {
    const itemName = categoryItems[i].name;
    const newLine = currentLine ? currentLine + ', ' + itemName : itemName;

    const exceededLimit = newLine.length > maxCharactersPerLine;

    if (!exceededLimit) {
      currentLine = newLine;
      continue;
    }

    lines.push(currentLine);
    currentLine = itemName;

    const isLastLine = lines.length === maxNumberOfLines - 1;

    if (isLastLine) {
      // Tenta encaixar o máximo de palavras possível
      let j = i + 1;
      while (j < categoryItems.length) {
        const nextItem = categoryItems[j].name;
        const possibleLine = currentLine + ', ' + nextItem;

        if (possibleLine.length <= maxCharactersPerLine) {
          currentLine = possibleLine;
          j++;
          i = j - 1;
        } else {
          break;
        }
      }

      // Verifica se ainda tem itens sobrando
      const hasRemainingItems = i + 1 < categoryItems.length;
      if (hasRemainingItems) {
        currentLine += ', ...';
      }

      lines.push(currentLine);
      // return lines.join('\n');
      break
    }
  }

  if (currentLine && lines.length < maxNumberOfLines) {
    lines.push(currentLine);
  }

  return lines
}