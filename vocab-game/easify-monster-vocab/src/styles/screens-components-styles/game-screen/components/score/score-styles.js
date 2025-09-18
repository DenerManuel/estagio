import { GLOBAL_COLORS } from '../../../../colors/global-colors.js';
import { DEFAULT_FONT_FAMILY } from '../../../../fonts/default-font-family.js';

export const scoreStyles = {
  desktop: {
    width: 170,
    height: 70,
    backgroundColor: GLOBAL_COLORS.PRIMARY,
    borderColor: GLOBAL_COLORS.SECONDARY,
    backgroundColor: 0x241d7a,
    borderWidth: 4,
    borderRadius: 25,
    fontSize: 30,
    fill: GLOBAL_COLORS.WHITE,
    fontFamily: DEFAULT_FONT_FAMILY,
  },
  mobile: {
    width: 185,
    height: 70,
    backgroundColor: GLOBAL_COLORS.PRIMARY,
    borderColor: GLOBAL_COLORS.SECONDARY,
    backgroundColor: 0x241d7a,
    borderWidth: 4,
    borderRadius: 28,
    fontSize: 30,
    fill: GLOBAL_COLORS.WHITE,
    fontFamily: DEFAULT_FONT_FAMILY,
  },
};
