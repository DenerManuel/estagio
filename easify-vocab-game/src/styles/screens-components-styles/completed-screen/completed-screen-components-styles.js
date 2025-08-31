import { createStyleProxy } from '../../../utils/position/create-style-proxy.js';
import * as styles from './components/completed-screen-components.js';

export const completedScreenStyles = {
  title: createStyleProxy(styles.titleStyles),
  scoreText: createStyleProxy(styles.scoreTextStyles),
  buttonNew: createStyleProxy(styles.buttonNewStyles),
  star: {
    desktop(index, activedStars) {
      return styles.starStyles.desktop(index, activedStars);
    },
    mobile(index, activedStars) {
      return styles.starStyles.mobile(index, activedStars);
    },
  },
};
