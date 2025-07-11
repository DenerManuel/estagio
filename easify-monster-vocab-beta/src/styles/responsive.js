const BREAKPOINTS = {
  mobile_tablet: 926,
  laptop_desktop: 1024,
}

export const responsiveValue = (laptop_desktop, mobile_tablet, width) => {
  if (width <= BREAKPOINTS.mobile_tablet) return mobile_tablet;
  if (width <= BREAKPOINTS.laptop_desktop) return laptop_desktop;
  return laptop_desktop;
}

export function setSizeAppRef(app, width, height) {
  if (!app) return;
  app.refWidth = width;
  app.refHeight = height;
}
export function getSizeAppRef() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}