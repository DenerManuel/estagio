export function configureItemCardOptions(itemCardOptions) {
  return {
    width: itemCardOptions.width || 168,
    height: itemCardOptions.height || 168,
    backgroundColor: itemCardOptions.backgroundColor || 0xDCF2FF,
    borderColor: itemCardOptions.borderColor || 0xFB7302,
    borderHoverColor: itemCardOptions.borderHoverColor || 0xFB7302,
    borderSize: itemCardOptions.borderSize || 5,
    borderRadius: itemCardOptions.borderRadius || 40,
    hover: itemCardOptions.hover || false
  }
}