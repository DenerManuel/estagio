export function configureResizeObserver(instance) {
  if (typeof ResizeObserver !== 'undefined') {
    instance.resizeObserver = new ResizeObserver(() => {
      instance._resize();
    });
    instance.resizeObserver.observe(instance.applicationContainer);
  }
}