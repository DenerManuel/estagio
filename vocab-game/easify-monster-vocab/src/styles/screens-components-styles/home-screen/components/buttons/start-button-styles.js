import { GLOBAL_COLORS } from '../../../../colors/global-colors.js';

export const startButtonStyles = {
  desktop: {
    width: 220,
    height: 90,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER,
    textColor: GLOBAL_COLORS.WHITE,
    fontSize: 30,
    borderRadius: 32,
    borderSize: 4,
  },
  mobile: {
    width: 320,
    height: 130,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER,
    textColor: GLOBAL_COLORS.WHITE,
    fontSize: 40,
    borderRadius: 50,
    borderSize: 6,
  },
};
