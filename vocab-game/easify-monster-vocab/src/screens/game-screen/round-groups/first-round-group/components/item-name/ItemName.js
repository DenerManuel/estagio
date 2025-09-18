import { TextContainer } from '../../../../../../components/text-container/TextContainer.js';
import { firstRoundGroupPositions } from '../../../../../../styles/screens-components-positions/game-screen/round-groups/first-round-group/first-round-group-components-positions.js';
import { firstRoundGroupStyles } from '../../../../../../styles/screens-components-styles/game-screen/round-groups/first-round-group/first-round-components-styles.js';

export class ItemName extends TextContainer {
  constructor(text) {
    super(text, firstRoundGroupStyles.nameFieldContainer.desktop);
    this.name = text;
    this._setPosition('desktop');
    this._setupResponsiveness();
  }

  _setPosition(deviceType) {
    const IS_MOBILE = deviceType === 'mobile';
    let position;

    if (IS_MOBILE) {
      position = firstRoundGroupPositions.nameFieldContainer.mobile.firstPosition();
      const textPosition = firstRoundGroupPositions.nameText.mobile;
      this.text.position.set(textPosition.x, textPosition.y);
    } else {
      position = firstRoundGroupPositions.nameFieldContainer.desktop.firstPosition();
      const textPosition = firstRoundGroupPositions.nameText.desktop;
      this.text.position.set(textPosition.x, textPosition.y);
    }

    this.position.set(position[0], position[1]);
  }

  _setupResponsiveness() {
    this.mediaQuery = window.matchMedia('(max-width: 767px)');
    const IS_MOBILE = this.mediaQuery.matches;

    if (IS_MOBILE) {
      this.updateStyle(firstRoundGroupStyles.nameFieldContainer.mobile);
      this._setPosition('mobile');
    }

    this._mediaQueryListener = (e) => {
      if (e.matches) {
        this.updateStyle(firstRoundGroupStyles.nameFieldContainer.mobile);
        this.text.updateStyle(firstRoundGroupStyles.nameText.mobile);
        this._setPosition('mobile');
      } else {
        this.updateStyle(firstRoundGroupStyles.nameFieldContainer.desktop);
        this.text.updateStyle(firstRoundGroupStyles.nameText.desktop);
        this._setPosition('desktop');
      }
    };

    this.mediaQuery.addEventListener('change', this._mediaQueryListener);
  }

  destroy(options) {
    // Remove o listener ao destruir o componente
    if (this.mediaQuery && this._mediaQueryListener) {
      this.mediaQuery.removeEventListener('change', this._mediaQueryListener);
    }
    super.destroy?.(options);
  }
}
