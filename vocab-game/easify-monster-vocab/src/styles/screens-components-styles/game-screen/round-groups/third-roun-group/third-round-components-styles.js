import { createStyleProxy } from '../../../../../utils/position/create-style-proxy.js';
import * as styles from './components/third-round-group-components.js';

export const thirdRoundGroupStyles = {
  card: createStyleProxy(styles.cardStyles),
  nameContainer: createStyleProxy(styles.nameContainerStyles),
};
