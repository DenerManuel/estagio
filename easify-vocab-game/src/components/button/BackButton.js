import { App } from '../../app/App.js';
import { CustomButton } from './CustomButton.js';

const BACK_BUTTON_SETTINGS = {
  width: 70,
  height: 50,
  backgroundColor: 0XFB7302,
  hoverColor: 0XFCD2AE,
  borderColor: 0xFFFFFF,
  fontSize: 18
};

export class BackButton extends CustomButton {
  constructor() {
    super('Back', BACK_BUTTON_SETTINGS)

    this._setPosition()
  }

  _setPosition() {
    const positionX = 20
    const positionY = App.getInstance().renderer.height - 70

    this.position.set(positionX, positionY)
  }
}