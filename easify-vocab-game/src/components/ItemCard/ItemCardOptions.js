export function configureItemCardOptions(itemCardOptions) {
  return {
    width: itemCardOptions.width || 170,
    height: itemCardOptions.height || 170,
    backgroundColor: itemCardOptions.backgroundColor || 0xF5F5F5,
    borderColor: itemCardOptions.borderColor || 0xFB7302,
    borderSize: itemCardOptions.borderSize || 5,
    borderRadius: itemCardOptions.borderRadius || 40,
  }
}