import { createStyleProxy } from '../../../utils/position/create-style-proxy.js';
import * as styles from './components/review-screen-components.js';

export const reviewScreenStyles = {
  imageContainer: createStyleProxy(styles.imageContainerStyles),
  navigationButtons: createStyleProxy(styles.navigationButtonsStyles),
  wordContainer: createStyleProxy(styles.wordContainerStyles),
  wordText: createStyleProxy(styles.wordTextStyles),
  toggleButton: createStyleProxy(styles.toggleButtonStyles),
  soundButton: createStyleProxy(styles.soundButtonStyles),
  footerContainer: createStyleProxy(styles.footerContainerStyles),
  footerTitle: createStyleProxy(styles.footerTitleStyles),
  footerQuantity: createStyleProxy(styles.footerQuantityStyles),
};
