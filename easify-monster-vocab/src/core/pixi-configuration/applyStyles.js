const DEFAULT_CANVAS_STYLES = {
  borderRadius: '54px',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'block',
  margin: '0 auto',
  pointerEvents: 'auto' // Importante para interatividade
};

export function applyStyles(canvasElement, customStyles = {}) {
  if (!canvasElement?.style) return;
  const styles = { ...DEFAULT_CANVAS_STYLES, ...customStyles };

  Object.entries(styles).forEach(([property, value]) => {
    canvasElement.style[property] = value;
  });
}