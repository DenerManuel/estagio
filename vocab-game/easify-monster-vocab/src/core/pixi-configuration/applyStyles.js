const DEFAULT_CANVAS_STYLES = {
  borderRadius: '4vw',
  overflow: 'hidden',
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