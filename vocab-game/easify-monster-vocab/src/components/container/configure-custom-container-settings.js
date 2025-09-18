export function configureSettings(settings) {
  return {
    width: settings.width || 300,
    height: settings.height || 200,
    backgroundColor: settings.backgroundColor || 0xffffff,
    baseBorderColor: settings.borderColor || 0x000000,
    borderColor: settings.borderColor || 0x000000,
    borderWidth: settings.borderWidth || 2,
    borderRadius: settings.borderRadius || 10,
    fontFamily: settings.fontFamily || 'Lato',
    fontWeight: settings.fontWeight || null,
    fontSize: settings.fontSize || 20,
    fill: settings.textColor || 0xffffff,
    align: settings.align || 'center',
    // hover: {
    //   isActivated: settings.hover.isActivated || false,
    //   backgroundColor: settings.hover.backgroundColor || 0x000000,
    //   borderColor: settings.hover.borderColor || 0x000000,
    //   borderWidth: settings.hover.borderWidth || 2,
    //   borderRadius: settings.hover.borderRadius || 10,
    // }
  };
}
