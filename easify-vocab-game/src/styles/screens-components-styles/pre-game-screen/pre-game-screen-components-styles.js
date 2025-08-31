import { createStyleProxy } from '../../../utils/position/create-style-proxy.js';
import * as styles from './components/pre-game-screen-components.js';

export const preGameScreenStyles = {
  title: createStyleProxy(styles.titleStyles),
  itemCard: createStyleProxy(styles.itemCardStyles),
  itemName: createStyleProxy(styles.itemNameStyles),
  // itemNameContainer: createStyleProxy(styles.itemNameContainerStyles),
  itemNameText: createStyleProxy(styles.itemNameTextStyles),
  navigationButtons: createStyleProxy(styles.navigationButtonsStyles),
  playButton: createStyleProxy(styles.playButtonStyles),
  chooseButton: createStyleProxy(styles.chooseButtonStyles),
  configButton: createStyleProxy(styles.configButtonStyles),
  scoreModeButton: createStyleProxy(styles.scoreModeButtonStyles),
  heartModeButton: createStyleProxy(styles.heartModeButtonStyles),
  modal: createStyleProxy(styles.modalStyles),
  modalTitle: createStyleProxy(styles.modalTitleStyles),
  closeButton: createStyleProxy(styles.closeButtonStyles),
};
