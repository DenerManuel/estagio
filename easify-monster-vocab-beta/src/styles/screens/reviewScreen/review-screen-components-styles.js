import { GLOBAL_COLORS } from "../../colors/global-colors.js"
import { DEFAULT_FONT_FAMILY } from "../../default-font-family.js"

export const reviewScreenStyles = {
  imageContainer: {
    width: 282,
    height: 282,
    backgroundColor: 0xF8E7B4,
    borderColor: GLOBAL_COLORS.SECONDARY,
    borderWidth: 5,
    borderRadius: 40,
  },
  navigationButtons: {
    width: 100,
    height: 100,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    borderRadius: 50,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER
  },
  wordContainer: {
    width: 472,
    height: 92,
    backgroundColor: GLOBAL_COLORS.PRIMARY,
    borderColor: GLOBAL_COLORS.SECONDARY,
    borderWidth: 4,
    borderRadius: 40,
  },
  wordText: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 40,
    fill: GLOBAL_COLORS.WHITE
  },
  toogleButton: {
    width: 70,
    height: 70,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    borderRadius: 35,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER,
  },
  soundButton: {
    width: 70,
    height: 70,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    borderRadius: 35,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER,
  },
  footerContainer: {
    width: 172,
    height: 82,
    backgroundColor: GLOBAL_COLORS.PRIMARY,
    borderColor: GLOBAL_COLORS.SECONDARY,
    borderWidth: 4,
    borderRadius: 40,
  },
  footerTitle: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 24,
    fill: GLOBAL_COLORS.WHITE,
  },
  footerQuantity: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 20,
    fill: GLOBAL_COLORS.WHITE,
  },
}