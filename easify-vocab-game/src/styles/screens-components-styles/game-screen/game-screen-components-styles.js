import { createStyleProxy } from '../../../utils/position/create-style-proxy.js';
import * as styles from './components/game-screen-components.js';

export const gameScreenStyles = {
  roundCounterContainer: createStyleProxy(styles.roundCounterContainerStyles),
  roundCounterText: createStyleProxy(styles.roundCounterTextStyles),
  timer: createStyleProxy(styles.timerStyles),
  score: createStyleProxy(styles.scoreStyles),
  heart: createStyleProxy(styles.heartStyles),
  wellDoneText: createStyleProxy(styles.wellDoneTextStyles),
};
