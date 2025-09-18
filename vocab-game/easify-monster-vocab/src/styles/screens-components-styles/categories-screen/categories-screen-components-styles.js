import { createStyleProxy } from '../../../utils/position/create-style-proxy.js';
import * as styles from './components/categories-screen-components.js';

export const categoriesScreenStyles = {
  card: createStyleProxy(styles.cardStyles),
  categoriesContainer: createStyleProxy(styles.categoriesContainerStyles),
  tooltipContainer: createStyleProxy(styles.tooltipContainerStyles),
  defaultTooltipContent: createStyleProxy(styles.defaultTooltipContentStyles),
  tooltipItemtexts: createStyleProxy(styles.tooltipItemTextStyles),
  tooltipTitle: createStyleProxy(styles.tooltipTitleStyles),
  cardsContainer: createStyleProxy(styles.cardsContainerStyles),
  navigationButtons: createStyleProxy(styles.navigationButtonsStyles),
};
