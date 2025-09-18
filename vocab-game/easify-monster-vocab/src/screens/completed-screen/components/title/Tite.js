import { completedScreenPositions } from '../../../../styles/screens-components-positions/completed-screen/completed-screen-components-positions.js';
import { completedScreenStyles } from '../../../../styles/screens-components-styles/completed-screen/completed-screen-components-styles.js';
import { Text } from "pixi.js"

export class Title extends Text {
  constructor() {
    super('Completed', completedScreenStyles.title.desktop);

    this._setPosition();
  }

  _setPosition() {
    const POSITION = completedScreenPositions.title.desktop;

    this.anchor.set(0.5);
    this.position.set(POSITION.x, POSITION.y);
  }
}
