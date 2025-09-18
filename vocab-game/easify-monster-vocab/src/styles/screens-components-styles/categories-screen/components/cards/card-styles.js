import { GLOBAL_COLORS } from '../../../../colors/global-colors.js';
import { DEFAULT_FONT_FAMILY } from '../../../../fonts/default-font-family.js';

export const cardStyles = {
  desktop: {
    width: 120,
    height: 120,
    backgroundColor: 0xF5F5F5,
    borderColor: GLOBAL_COLORS.SECONDARY,
    borderHoverColor: 0x03bb85,
    borderWidth: 4,
    borderRadius: 30,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 15,
    fontWeight: 'bold',
    textColor: 0xff4500,
  },
  mobile: {
    width: 115,
    height: 115,
    backgroundColor: 0xf5f5f5,
    borderColor: 0xfb7302,
    borderHoverColor: 0x03bb85,
    borderWidth: 4,
    borderRadius: 30,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 15,
    fontWeight: 'bold',
    textColor: 0xff4500,
  },
};
