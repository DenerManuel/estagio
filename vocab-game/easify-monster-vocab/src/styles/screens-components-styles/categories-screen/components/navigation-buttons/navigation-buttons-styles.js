import { GLOBAL_COLORS } from "../../../../colors/global-colors.js"

export const navigationButtonsStyles = {
  desktop: {
    width: 80,
    height: 80,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    borderRadius: 50,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER,
    fontSize: 25,
    borderSize: 4
  },
  mobile: {
    width: 130,
    height: 130,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    borderRadius: 80,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER,
    fontSize: 50,
    borderSize: 6
  }
}
