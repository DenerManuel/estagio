import { CustomContainer } from "../../../../components/Container/CustomContainer.js";

export function createCategoriesContainer(appContainer) {
  const CATEGORIES_CONTAINER_SETTINGS = {
    width: appContainer.clientWidth,
    height: appContainer.clientHeight,
    backgroundColor: 0x241D7A,
    borderColor: 0xFB7302,
    borderWidth: 4,
    borderRadius: 60,
    horizontalAlign: 'center',
    verticalAlign: 'bottom',
    padding: {
      top: 140,
      left: 130,
      bottom: 90,
      right: 130
    }
  }
  return new CustomContainer(appContainer, CATEGORIES_CONTAINER_SETTINGS);
}