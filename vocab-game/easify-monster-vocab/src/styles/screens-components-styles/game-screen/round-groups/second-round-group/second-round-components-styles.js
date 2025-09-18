import { createStyleProxy } from '../../../../../utils/position/create-style-proxy.js';
import * as styles from './components/second-round-group-components.js';

export const secondRoundGroupStyles = {
  cardContainer: createStyleProxy(styles.cardContainerStyles),
  nameContainer: createStyleProxy(styles.nameContainerStyles),
  card: createStyleProxy(styles.cardStyles)
};
