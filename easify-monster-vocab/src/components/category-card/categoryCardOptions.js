export function configureCategoryCardOptions(categoryCardOptions) {
  return {
    width: categoryCardOptions.width || 120,
    height: categoryCardOptions.height || 120,
    backgroundColor: categoryCardOptions.backgroundColor || 0xF5F5F5,
    borderColor: categoryCardOptions.borderColor || 0xFB7302,
    borderHoverColor: categoryCardOptions.borderHoverColor || 0x03BB85,
    borderSize: categoryCardOptions.borderSize || 4,
    borderRadius: categoryCardOptions.borderRadius || 30,
    fontFamily: categoryCardOptions.fontFamily || 'Lato',
    fontSize: categoryCardOptions.fontSize || 16,
    fontWeight: categoryCardOptions.fontWeight || 'bold',
    textColor: categoryCardOptions.textColor || 0xFF4500,
  }
}