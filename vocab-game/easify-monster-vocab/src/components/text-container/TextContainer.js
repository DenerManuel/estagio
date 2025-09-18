import { CustomContainer } from '../container/CustomContainer.js';
import CustomText from '../text/CustomText.js';

/**
 * Um container que gerencia e centraliza um objeto de texto (CustomText).
 * @extends CustomContainer
 */
export class TextContainer extends CustomContainer {
  constructor(text, styles) {
    super(null, styles);
    this.text = new CustomText(text, styles);

    this.addChild(this.text);
    this._setPositionText(styles);
  }

  updateText(newText) {
    this.text.text = newText;
  }

  /** @private */
  _setPositionText(styles) {
    const TEXT_CONTAINER_WIDTH = styles.width;
    const TEXT_CONTAINER_HEIGHT = styles.height;

    this.text.x = TEXT_CONTAINER_WIDTH / 2;
    this.text.y = TEXT_CONTAINER_HEIGHT / 2;
  }
}
