import { GLOBAL_COLORS } from "../../../palettes/colors-palette.js"

const COLORS_PALETTE = {
  PRIMARY: GLOBAL_COLORS.PRIMARY, // Dark blue
  SECONDARY: GLOBAL_COLORS.SECONDARY, // Orange
  HOVER: GLOBAL_COLORS.BUTTONS_HOVER // Light orange
}

export const Colors = {
  NameFieldContainer: {
    backgroundColor: COLORS_PALETTE.PRIMARY,
    borderColor: COLORS_PALETTE.SECONDARY,
  },
  NameText: GLOBAL_COLORS.WHITE,
}