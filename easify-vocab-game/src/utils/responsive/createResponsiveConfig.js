import { getHorizontalPercentage, getVerticalPercentage } from "./percentageCalculations.js"

const calculateResponsiveValue = (value, refSize, percentageFunction) => {
  return refSize * (percentageFunction(value, refSize) / 100);
}
export function createResponsiveConfig(config, refWidth, refHeight) {
  const { width, height, x, y, borderWidth, borderRadius } = config;

  return {
    width: calculateResponsiveValue(width, refWidth, getHorizontalPercentage),
    height: calculateResponsiveValue(width, refWidth, getHorizontalPercentage),
    x: calculateResponsiveValue(x, refWidth, getHorizontalPercentage),
    y: calculateResponsiveValue(y, refHeight, getVerticalPercentage),
    borderWidth: calculateResponsiveValue(borderWidth, refWidth, getHorizontalPercentage),
    borderRadius: calculateResponsiveValue(borderRadius, refWidth, getHorizontalPercentage),
  }
}