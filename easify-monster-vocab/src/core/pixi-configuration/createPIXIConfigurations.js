const DEFAULT_CONFIG = {
  ASPECT_RATIO: 16 / 11,
  BACKGROUND_COLOR: 0x241D7A,
  ANTIALIAS: true,
  MAX_WIDTH: 1920,
  MAX_HEIGHT: 1080
};

export function createPIXIConfigurations(customConfig = {}) {
  return {
    aspectRatio: customConfig.aspectRatio || DEFAULT_CONFIG.ASPECT_RATIO,
    backgroundColor: customConfig.backgroundColor || DEFAULT_CONFIG.BACKGROUND_COLOR,
    antialias: customConfig.antialias ?? DEFAULT_CONFIG.ANTIALIAS,
    maxWidth: customConfig.maxWidth || DEFAULT_CONFIG.MAX_WIDTH,
    maxHeight: customConfig.maxHeight || DEFAULT_CONFIG.MAX_HEIGHT
  };
}