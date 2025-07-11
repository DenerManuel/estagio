import { GLOBAL_COLORS } from "../../colors/global-colors.js";
import { DEFAULT_FONT_FAMILY } from "../../default-font-family.js";

export const preGameScreenStyles = {
  title: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 40,
    fill: GLOBAL_COLORS.WHITE,
    align: 'center',
    dropShadow: true,
    dropShadowDistance: 2,
    dropShadowBlur: 4
  },
  itemCard: {
    width: 168,
    height: 168,
    backgroundColor: 0xDCF2FF,
    borderColor: GLOBAL_COLORS.SECONDARY,
    borderHoverColor: GLOBAL_COLORS.SECONDARY,
    borderSize: 5,
    borderRadius: 40,
    hover: false
  },
  itemNameContainer: {
    width: 190,
    height: 60,
    backgroundColor: 0xFFF8DC,
    borderColor: GLOBAL_COLORS.SECONDARY,
    borderRadius: 40,
    borderWidth: 4
  },
  itemNameText: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: 17,
    fill: 0x000000,
    align: 'center',
    fontWeight: 'bold'
  },
  navigationButtons: {
    width: 85,
    height: 85,
    backgroundColor: GLOBAL_COLORS.SECONDARY,
    borderRadius: 50,
    hoverColor: GLOBAL_COLORS.BUTTONS_HOVER,
  },
  playButton: {
    width: 300,
    height: 100,
    backgroundColor: 0xFFA500,
    hoverColor: 0XF0E68C,
    textColor: GLOBAL_COLORS.WHITE,
    fontSize: 40,
  },
  chooseButton: {
    width: 200,
    height: 80,
    backgroundColor: 0xFF0000,
    hoverColor: 0xFA8072,
    textColor: GLOBAL_COLORS.WHITE,
    fontSize: 25,
  },
  configButton: {
    fontSize: 22,
    textColor: 0x333333,
    width: 50,
    height: 50,
  },
  scoreModeButton: {
    fontSize: 24,
    fill: 0x00ff00
  },
  heartModeButton: {
    fontSize: 24,
    fill: 0x888888
  },
  modal: {
    width: 480,
    height: 300,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 0x000000,
    backgroundColor: GLOBAL_COLORS.WHITE
  },
  modalTitle: {
    fontSize: 30,
    fill: 0x000000,
  },
  closeButton: {
    fontSize: 24,
    fill: 0x555555
  }
}