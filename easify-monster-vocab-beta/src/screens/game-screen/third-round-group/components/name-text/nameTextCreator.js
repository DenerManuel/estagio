export function createNameText(name) {
  const nameText = new PIXI.Text(name, {
    fontFamily: "Arial",
    fontSize: 22,
    fontWeight: 'bold',
    fill: 0x000000,
    align: 'center',
  });
  return nameText;
}
