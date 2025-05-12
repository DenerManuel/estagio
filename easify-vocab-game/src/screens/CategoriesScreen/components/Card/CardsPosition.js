export function positionCard(card, cardsContainer) {
  const cardWidth = 120;
  const cardHeight = 120;
  const margin = 10;

  const offsets = calculateOffsets(cardsContainer, cardWidth, cardHeight, margin);
  const { positionX, positionY } = getCurrentPosition(cardsContainer);

  const isSecondRow = positionY === 1;
  const adjustedOffsetX = isSecondRow ? offsets.offsetXSecondRow : offsets.offsetXFirstRow;

  card.position.set(
    adjustedOffsetX + positionX * (cardWidth + margin),
    offsets.offsetY + positionY * (cardHeight + margin)
  );

  updatePosition(cardsContainer, positionX, positionY);
}
const calculateOffsets = (cardsContainer, cardWidth, cardHeight, margin) => {
  const maxColumnsFirstRow = 4;
  const maxColumnsSecondRow = 3;

  const totalWidthFirstRow = maxColumnsFirstRow * cardWidth + (maxColumnsFirstRow - 1) * margin;
  const totalWidthSecondRow = maxColumnsSecondRow * cardWidth + (maxColumnsSecondRow - 1) * margin;

  const offsetXFirstRow = (cardsContainer.settings.width - totalWidthFirstRow) / 2;
  const offsetXSecondRow = (cardsContainer.settings.width - totalWidthSecondRow) / 2;
  const offsetY = (cardsContainer.settings.height - (2 * cardHeight + margin)) / 2;

  return { offsetXFirstRow, offsetXSecondRow, offsetY };
}
const getCurrentPosition = (cardsContainer) => {
  if (!cardsContainer.positionData) {
    cardsContainer.positionData = { positionX: 0, positionY: 0 };
  }
  return cardsContainer.positionData;
}
const updatePosition = (cardsContainer, positionX, positionY) => {
  const maxColumnsFirstRow = 4;
  const maxColumnsSecondRow = 3;

  positionX++;
  const maxColumns = positionY === 0 ? maxColumnsFirstRow : maxColumnsSecondRow;

  if (positionX >= maxColumns) {
    positionX = 0;
    positionY++;
  }

  cardsContainer.positionData = { positionX, positionY };
}