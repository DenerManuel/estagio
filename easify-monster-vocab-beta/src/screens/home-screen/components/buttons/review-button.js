import { CustomButton } from "../../../../components/button/CustomButton.js"
import { homeScreenPositions } from "../../../../styles/screens/home-screen/home-screen-components-position.js"
import { homeScreenStyles } from "../../../../styles/screens/home-screen/home-screen-components-styles.js"


export class ReviewButton extends CustomButton {
  constructor() {
    super('Review', homeScreenStyles.reviewButton)

    this._setPosition()
  }
  _setPosition() {
    const positionX = homeScreenPositions.reviewButton.x
    const positionY = homeScreenPositions.reviewButton.y

    this.position.set(positionX, positionY)
  }
}