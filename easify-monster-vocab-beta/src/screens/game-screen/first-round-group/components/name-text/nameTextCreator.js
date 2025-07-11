import { NameTextStyles } from "../../../../../styles/screens/game-screen/first-round-group/name-text/nameTextConfig.js";

export function createNameText(itemName) {
  return new PIXI.Text(itemName, NameTextStyles);
}