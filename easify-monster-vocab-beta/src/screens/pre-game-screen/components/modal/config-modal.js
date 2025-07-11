import { preGameScreenPositions } from "../../../../styles/screens/pre-game-screen/pre-game-screen-components-position.js";
import { Modal } from "./modal.js";
import { ModalTitle } from "./modalTitle.js";

export class ConfigModal extends PIXI.Container {
  constructor() {
    super()
    this._init()
    this._setPosition()
  }
  _init() {
    this._createModal()
    this._createModalTitle()
  }
  _createModal() {
    this.modal = new Modal()
    this.addChild(this.modal)
  }
  _createModalTitle() {
    this.modalTitle = new ModalTitle()
    this.addChild(this.modalTitle)
  }

  _setPosition() {
    this.position.set(
      preGameScreenPositions.configModal.x,
      preGameScreenPositions.configModal.y,
    )
  }
}