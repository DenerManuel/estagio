import { preGameScreenPositions } from '../../../../styles/screens-components-positions/pre-game-screen/pre-game-screen-components-positions.js';
import { Modal } from './Modal.js';
import { ModalTitle } from './ModalTitle.js';

export class ConfigModal extends PIXI.Container {
  constructor() {
    super();
    this._init();
    this._setPosition();
  }
  _init() {
    this._createModal();
    this._createModalTitle();
  }
  _createModal() {
    this.modal = new Modal();
    this.addChild(this.modal);
  }
  _createModalTitle() {
    this.modalTitle = new ModalTitle();
    this.addChild(this.modalTitle);
  }

  _setPosition() {
    this.position.set(
      preGameScreenPositions.configModal.desktop.x,
      preGameScreenPositions.configModal.desktop.y
    );
  }
}
