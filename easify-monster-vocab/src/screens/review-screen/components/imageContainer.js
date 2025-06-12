import { CustomContainer } from "../../../components/container/CustomContainer.js";

export function createImageContainer(appContainer) {
  const IMAGE_CONTAINER_SETTINGS = {
    width: appContainer.clientWidth,
    height: appContainer.clientHeight,
    backgroundColor: 0xF8E7B4,
    borderColor: 0xFB7302,
    borderWidth: 5,
    borderRadius: 40,
    horizontalAlign: 'center',
    verticalAlign: 'middle',
    padding: {
      top: 45,
      left: 275,
      bottom: 245,
      right: 275
    }
  }
  return new CustomContainer(appContainer, IMAGE_CONTAINER_SETTINGS);
}