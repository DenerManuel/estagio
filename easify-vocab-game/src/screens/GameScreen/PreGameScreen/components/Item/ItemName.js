import { CustomContainer } from "../../../../../components/Container/CustomContainer.js";

export function createItemName(itemName, appContainer) {
  const itemNameContainer = _createItemNameContainer(appContainer)
  const name = _createItemNameText(itemName, itemNameContainer)

  itemNameContainer.addChild(name)
  return itemNameContainer
}
const _createItemNameContainer = (appContainer) => {
  const ITEM_NAME_CONTAINER_SETTINGS = {
    width: 190,
    height: 60,
    backgroundColor: 0xFFF8DC,
    borderColor: 0xFB7302,
    borderRadius: 40,
    borderWidth: 4
  }
  return new CustomContainer(appContainer, ITEM_NAME_CONTAINER_SETTINGS);
}

const _createItemNameText = (itemName, itemNameContainer) => {
  const TEXT_OPTIONS = {
    fontFamily: 'Lato',
    fontSize: 22,
    fill: 0x000000,
    align: 'center',
  }
  const text = new PIXI.Text(itemName, TEXT_OPTIONS)
  _positionText(text, itemNameContainer)

  return text
}

const _positionText = (text, itemNameContainer) => {
  const ITEM_NAME_CONTAINER_WIDTH = itemNameContainer.settings.width
  const ITEM_NAME_CONTAINER_HEIGHT = itemNameContainer.settings.height

  text.anchor.set(0.5)
  text.x = ITEM_NAME_CONTAINER_WIDTH / 2
  text.y = ITEM_NAME_CONTAINER_HEIGHT / 2;
}