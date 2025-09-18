export function configureButtonOptions(buttonOptions) {
  return {
    width: buttonOptions.width || 200,
    height: buttonOptions.height || 50,
    backgroundColor: buttonOptions.backgroundColor || 0xFB7302,
    borderColor: buttonOptions.borderColor || 0xFFFFFF,
    borderSize: buttonOptions.borderSize || 4,
    borderRadius: buttonOptions.borderRadius || 32,
    fontFamily: buttonOptions.fontFamily || 'Arial, sans-serif',
    fontSize: buttonOptions.fontSize || 25,
    textColor: buttonOptions.textColor || 0xFFFFFF,
    hoverColor: buttonOptions.hoverColor || 0XFCD2AE
  }
}