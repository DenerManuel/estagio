import { appSize } from "../../styles/appSize.js";

export function getPIXIConfigurations() {
  return {
    backgroundColor: 0x241D7A,
    antialias: true,
    autoDensity: true,
    width: appSize.width,
    height: appSize.height,
    resolution: 2 || window.devicePixelRatio,
  };
}