import { createStyleProxy } from '../../../../../utils/position/create-style-proxy.js';
import * as styles from './components/first-round-group-components.js';

export const firstRoundGroupStyles = {
  nameFieldContainer: createStyleProxy(styles.nameFieldContainerStyles),
  nameText: createStyleProxy(styles.nameTextStyles),
  cards: {
    desktop: {
      firstGroupCardsStyles: styles.cardsStyles.desktop.firstCardsGroup,
      secondGroupCardsStyles: styles.cardsStyles.desktop.secondCardsGroup,
      thirdGroupCardsStyles: styles.cardsStyles.desktop.thirdCardsGroup
    },
    mobile: {
      firstGroupCardsStyles: styles.cardsStyles.mobile.firstCardsGroup,
      secondGroupCardsStyles: styles.cardsStyles.mobile.secondCardsGroup,
      thirdGroupCardsStyles: styles.cardsStyles.mobile.thirdCardsGroup
    }
  },
};
