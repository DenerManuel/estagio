import { CustomButton } from '../../../../components/button/CustomButton.js';
import { homeScreenPositions } from '../../../../styles/screens/home-screen/home-screen-components-position.js';
import { homeScreenStyles } from '../../../../styles/screens/home-screen/home-screen-components-styles.js';


export class StartButton extends CustomButton {
  constructor() {
    super('Start', homeScreenStyles.startButton)

    this._position()
  }

  _position() {
    const positionX = homeScreenPositions.startButton.x
    const positionY = homeScreenPositions.startButton.y

    this.position.set(positionX, positionY)
  }
}