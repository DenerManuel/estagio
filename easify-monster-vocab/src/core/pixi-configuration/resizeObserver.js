export function configureResizeObserver(instance) {
  if (!instance?.applicationContainer) return;

  if (typeof ResizeObserver === 'function') {
    instance.resizeObserver?.disconnect(); // Limpa observer anterior
    
    instance.resizeObserver = new ResizeObserver(entries => {
      if (!entries[0]?.contentRect) return;
      instance._debouncedResize();
    });
    
    instance.resizeObserver.observe(instance.applicationContainer);
  }
}