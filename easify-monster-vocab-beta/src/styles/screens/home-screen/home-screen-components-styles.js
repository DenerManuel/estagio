import { GLOBAL_COLORS } from "../../colors/global-colors.js"
import { DEFAULT_FONT_FAMILY } from "../../default-font-family.js"

export const homeScreenStyles = {
  title: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 50,
    fill: GLOBAL_COLORS.WHITE,
    align: 'center',
    dropShadow: true,
    dropShadowDistance: 2,
    dropShadowBlur: 4
  },
  startButton: {
    width: 220,
    height: 90,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER,
    textColor: GLOBAL_COLORS.WHITE,
    fontSize: 30,
  },
  chooseButton: {
    width: 180,
    height: 85,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER,
    textColor: GLOBAL_COLORS.WHITE,
    fontSize: 20,
  },
  reviewButton: {
    width: 180,
    height: 85,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER,
    textColor: GLOBAL_COLORS.WHITE,
    fontSize: 20,
  }
}