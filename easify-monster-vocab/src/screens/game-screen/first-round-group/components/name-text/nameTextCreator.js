export function createNameText(itemName) {
  return new PIXI.Text(itemName, {
    fontFamily: 'Arial',
    fontSize: 36,
    fill: 0xFFFFFF,
    align: 'center'
  });
}