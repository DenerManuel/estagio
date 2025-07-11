export function updateComponent(component, newConfig) {
  console.log(newConfig)
  if (!component || !newConfig) {
    throw new Error('Componente e nova configuração são necessários.');
  }
  component.width = newConfig.width || component.width;
  component.height = newConfig.height || component.height;
  component.x = newConfig.x || component.x;
  component.y = newConfig.y || component.y;

  const borderWidth = newConfig.borderWidth || component.borderWidth;
  const borderSize = newConfig.borderSize || component.borderSize;

  component.setBorder(borderWidth, borderSize);

  if (component instanceof PIXI.Text) {
    component.style.fontSize = newConfig.fontSize || component.style.fontSize;
  }
}