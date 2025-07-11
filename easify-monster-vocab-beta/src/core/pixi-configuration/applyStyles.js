const DEFAULT_CANVAS_STYLES = {
  borderRadius: '4.5vw',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  display: 'block',
  pointerEvents: 'auto'
};

export function applyStyles(canvasElement) {
  if (!canvasElement?.style) return;
  const styles = DEFAULT_CANVAS_STYLES;

  Object.entries(styles).forEach(([property, value]) => {
    canvasElement.style[property] = value;
  });
}