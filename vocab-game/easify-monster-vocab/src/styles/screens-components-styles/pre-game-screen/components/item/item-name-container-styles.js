import { GLOBAL_COLORS } from '../../../../colors/global-colors.js';
import { DEFAULT_FONT_FAMILY } from '../../../../fonts/default-font-family.js';

export const itemNameStyles = {
  desktop: {
    width: 190,
    height: 60,
    backgroundColor: 0xfff8e7,
    borderColor: GLOBAL_COLORS.SECONDARY,
    borderRadius: 40,
    borderWidth: 4,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 20,
    fill: GLOBAL_COLORS.BLACK,
    align: 'center',
    fontWeight: 'bold',
  },
  mobile: {
    width: 235,
    height: 57,
    backgroundColor: 0xfff8e7,
    borderColor: GLOBAL_COLORS.SECONDARY,
    borderRadius: 40,
    borderWidth: 4,
    fontSize: 22,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 20,
    fill: GLOBAL_COLORS.BLACK,
    align: 'center',
    fontWeight: 'bold',
  },
};
