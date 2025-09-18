import { createStyleProxy } from '../../../utils/position/create-style-proxy.js';
import * as styles from './components/home-screen-components.js';

export const homeScreenStyles = {
  title: createStyleProxy(styles.titleStyles),
  startButton: createStyleProxy(styles.startButtonStyles),
  chooseButton: createStyleProxy(styles.chooseButtonStyles),
  reviewButton: createStyleProxy(styles.reviewButtonStyles),
};
