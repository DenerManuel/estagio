export function calculateSize(instance) {
  _validateInstance(instance);

  const container = instance.applicationContainer;
  const { aspectRatio, maxWidth, maxHeight } = instance.configurations;

  const containerWidth = Math.min(container.clientWidth, maxWidth);
  const containerHeight = Math.min(container.clientHeight, maxHeight);

  return _calculateDimensions(aspectRatio, containerWidth, containerHeight);
}

export function _calculateDimensions(aspectRatio, width, height) {
  const calculatedWidth = Math.min(width, height * aspectRatio);
  const calculatedHeight = calculatedWidth / aspectRatio;

  return {
    width: Math.floor(calculatedWidth),
    height: Math.floor(calculatedHeight)
  };
}

const _validateInstance = (instance) => {
  if (!instance?.applicationContainer || !instance?.configurations) {
    throw new Error('Invalid instance for size calculation');
  }
}