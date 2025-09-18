import { GLOBAL_COLORS } from "../../../../colors/global-colors.js"
import { DEFAULT_FONT_FAMILY } from "../../../../fonts/default-font-family.js"

export const defaultTooltipContentStyles = {
  desktop: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 26,
    fill: GLOBAL_COLORS.WHITE,
    align: 'center'
  },
  mobile: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 30,
    fill: GLOBAL_COLORS.WHITE,
    align: 'center'
  }
}
