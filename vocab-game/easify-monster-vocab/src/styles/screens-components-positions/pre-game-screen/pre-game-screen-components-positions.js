import { createPositionProxy } from '../../../utils/position/create-position-proxy.js';
import * as positions from './components/pre-game-screen-components.js';

export const preGameScreenPositions = {
  title: createPositionProxy(positions.titlePosition),
  itemCard: {
    desktop: (index) => {
      return positions.itemCardPosition.desktop(index);
    },
    mobile: (index) => {
      return positions.itemCardPosition.mobile(index);
    },
  },
  itemNameContainer: {
    desktop: (index) => {
      return positions.itemNameContainerPosition.desktop(index);
    },
    mobile: (index) => {
      return positions.itemNameContainerPosition.mobile(index);
    },
  },
  itemNameText: createPositionProxy(positions.itemNameTextPosition),
  previousButton: createPositionProxy(positions.previousButtonPosition),
  nextButton: createPositionProxy(positions.nextButtonPosition),
  playButton: createPositionProxy(positions.playButtonPosition),
  chooseButton: createPositionProxy(positions.chooseButtonPosition),
  configButton: createPositionProxy(positions.configButtonPosition),
  scoreModeButton: createPositionProxy(positions.scoreModeButtonPosition),
  heartModeButton: createPositionProxy(positions.heartModeButtonPosition),
  configModal: createPositionProxy(positions.configModalPosition),
  modalTitle: createPositionProxy(positions.modalTitlePosition),
  closeButton: createPositionProxy(positions.closeButtonPosition),
  overlay: createPositionProxy(positions.overlayPosition),
};
