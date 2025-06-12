import { CustomContainer } from '../../../../../components/container/CustomContainer.js'

export function addNameFieldContainer(appContainer) {
  const NAME_FIELD_CONTAINER_OPTIONS = {
    width: appContainer.clientWidth,
    height: appContainer.clientHeight,
    backgroundColor: 0x241D7A,
    borderColor: 0xFB7302,
    borderWidth: 4,
    borderRadius: 35,
    horizontalAlign: 'center',
    verticalAlign: 'bottom',
    padding: {
      top: 360,
      left: 210,
      bottom: 135,
      right: 210
    }
  }
  return new CustomContainer(appContainer, NAME_FIELD_CONTAINER_OPTIONS)
}