export function configureCategoryCardOptions(categoryCardOptions) {
  return {
    width: categoryCardOptions.width || 150,
    height: categoryCardOptions.height || 150,
    backgroundColor: categoryCardOptions.backgroundColor || 0xFFFFFF,
    borderColor: categoryCardOptions.borderColor || 0xFB7302,
    borderHoverColor: categoryCardOptions.borderHoverColor || 0xFFFFFF,
    borderSize: categoryCardOptions.borderSize || 4,
    borderRadius: categoryCardOptions.borderRadius || 30,
    fontFamily: categoryCardOptions.fontFamily || 'Lato',
    fontSize: categoryCardOptions.fontSize || 16,
    fontWeight: categoryCardOptions.fontWeight || 'bold',
    textColor: categoryCardOptions.textColor || 0xFB7302
  }
}