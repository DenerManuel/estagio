export function calculateSize(instance) {
  const containerWidth = instance.applicationContainer.clientWidth;
  const containerHeight = instance.applicationContainer.clientHeight;
  return _calculateDimensions(instance, containerWidth, containerHeight);
}

export function _calculateDimensions(instance, containerWidth, containerHeight) {
  const aspectRatio = instance.configurations.aspectRatio;

  if (containerWidth / containerHeight > aspectRatio) {
    const width = containerHeight * aspectRatio;
    const height = containerHeight;
    return { width, height };
  } else {
    const width = containerWidth;
    const height = containerWidth / aspectRatio;
    return { width, height };
  }
}