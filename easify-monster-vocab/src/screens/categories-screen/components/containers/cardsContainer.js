import { CustomContainer } from "../../../../components/container/CustomContainer.js";

export function createCardsContainer(categoriesContainer) {
  const CARDS_CONTAINER_SETTINGS = {
    width: categoriesContainer.settings.width,
    height: categoriesContainer.settings.height,
    backgroundColor: 0x241D7A,
    borderColor: 0x241D7A,
    borderRadius: 50,
    fontFamily: 'Lato',
    fontSize: 20,
    textColor: 0xFFFFFF,
    align: 'center',
    horizontalAlign: 'center',
    verticalAlign: 'middle',
    padding: {
      top: 50,
      left: 10,
      bottom: 15,
      right: 10
    }
  }
  return new CustomContainer(categoriesContainer, CARDS_CONTAINER_SETTINGS);
}