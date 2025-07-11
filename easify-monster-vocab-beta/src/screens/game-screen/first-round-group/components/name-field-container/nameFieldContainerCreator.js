import { CustomContainer } from '../../../../../components/container/CustomContainer.js'
import { NameFieldContainerPosition, NameFieldContainerStyles } from '../../../../../styles/screens/game-screen/first-round-group/name-field-container/nameFieldContainerConfig.js'

export function addNameFieldContainer(appContainer) {
  const nameFieldContainer = new CustomContainer(appContainer, NameFieldContainerStyles)
  _positionNameFieldContainer(nameFieldContainer)

  return nameFieldContainer
}
const _positionNameFieldContainer = (nameFieldContainer) => {
  const positionX = NameFieldContainerPosition.firstPosition.x
  const positionY = NameFieldContainerPosition.firstPosition.y

  nameFieldContainer.position.set(positionX, positionY)
}