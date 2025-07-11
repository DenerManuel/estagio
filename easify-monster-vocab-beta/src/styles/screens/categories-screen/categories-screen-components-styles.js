import { GLOBAL_COLORS } from "../../colors/global-colors.js"
import { DEFAULT_FONT_FAMILY } from "../../default-font-family.js"

export const categoriesScreenStyles = {
  categoriesContainer: {
    width: 572,
    height: 342,
    backgroundColor: GLOBAL_COLORS.PRIMARY,
    borderColor: GLOBAL_COLORS.SECONDARY,
    borderWidth: 4,
    borderRadius: 60,
  },
  tooltipContainer: {
    width: 352,
    height: 112,
    backgroundColor: GLOBAL_COLORS.PRIMARY,
    borderColor: GLOBAL_COLORS.SECONDARY,
    borderWidth: 4,
    borderRadius: 50,
  },
  defaultTooltipContent: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 26,
    fill: GLOBAL_COLORS.WHITE,
    align: 'center'
  },
  tooltipItemtexts: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 16,
    fill: 0xD3D3D3,
    align: 'center'
  },
  tooltipTitle: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 20,
    fontWeight: '700',
    fill: GLOBAL_COLORS.WHITE,
    align: 'center'
  },
  cardsContainer: {
    width: 572,
    height: 277,
    backgroundColor: GLOBAL_COLORS.PRIMARY,
    borderColor: GLOBAL_COLORS.PRIMARY,
    borderRadius: 50,
    FontFamily: DEFAULT_FONT_FAMILY,
  },
  navigationButtons: {
    width: 80,
    height: 80,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    borderRadius: 50,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER
  }
}