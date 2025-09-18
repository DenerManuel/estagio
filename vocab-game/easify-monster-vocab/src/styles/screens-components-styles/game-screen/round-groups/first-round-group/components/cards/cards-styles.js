import { GLOBAL_COLORS } from '../../../../../../colors/global-colors.js';

const DEFAULT_DESKTOP_STYLES = {
  width: 240,
  height: 240,
  backgroundColor: 0xf5f5f5,
  borderColor: GLOBAL_COLORS.SECONDARY,
  borderHoverColor: 0x03bb85,
  borderWidth: 5,
  borderRadius: 50,
  hover: true,
};
const DEFAULT_MOBILE_STYLES = DEFAULT_DESKTOP_STYLES;

export const cardsStyles = {
  desktop: {
    firstCardsGroup: {
      ...DEFAULT_DESKTOP_STYLES,
      width: 240,
      height: 240,
    },
    secondCardsGroup: {
      ...DEFAULT_DESKTOP_STYLES,
      width: 170,
      height: 170,
    },
    thirdCardsGroup: {
      ...DEFAULT_DESKTOP_STYLES,
      width: 165,
      height: 165,
    },
  },
  mobile: {
    firstCardsGroup: {
      ...DEFAULT_DESKTOP_STYLES,
      width: 240,
      height: 240,
    },
    secondCardsGroup: {
      ...DEFAULT_DESKTOP_STYLES,
      width: 170,
      height: 170,
    },
    thirdCardsGroup: {
      ...DEFAULT_DESKTOP_STYLES,
      width: 165,
      height: 165,
    },
  },
};
