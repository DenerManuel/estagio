import { CustomButton } from "../../../../components/button/CustomButton.js"
import { homeScreenPositions } from "../../../../styles/screens/home-screen/home-screen-components-position.js"
import { homeScreenStyles } from "../../../../styles/screens/home-screen/home-screen-components-styles.js"

export class ChooseButton extends CustomButton {
  constructor() {
    super('Choose', homeScreenStyles.chooseButton)

    this._position()
  }
  _position() {
    const positionX = homeScreenPositions.chooseButton.x
    const positionY = homeScreenPositions.chooseButton.y

    this.position.set(positionX, positionY)
  }
}