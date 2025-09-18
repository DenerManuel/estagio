import { GLOBAL_COLORS } from "../../../../colors/global-colors.js"

export const chooseButtonStyles = {
  desktop: {
    width: 180,
    height: 85,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER,
    textColor: GLOBAL_COLORS.WHITE,
    fontSize: 20,
    borderRadius: 32,
    borderSize: 4
  },
  mobile: {
    width: 320,
    height: 130,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER,
    textColor: GLOBAL_COLORS.WHITE,
    fontSize: 35,
    borderRadius: 50,
    borderSize: 6
  }
}