import { Text } from "pixi.js"

export function createNameText(name) {
  const nameText = new  Text(name, {
    fontFamily: "Arial",
    fontSize: 22,
    fontWeight: 'bold',
    fill: 0x000000,
    align: 'center',
  });
  return nameText;
}
