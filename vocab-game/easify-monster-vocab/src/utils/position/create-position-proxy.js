export function createPositionProxy(componentRef) {
  return {
    desktop: {
      get x() {
        return componentRef.desktop.getPositionX();
      },
      get y() {
        return componentRef.desktop.getPositionY();
      },
    },
    mobile: {
      get x() {
        return componentRef.mobile.getPositionX();
      },
      get y() {
        return componentRef.mobile.getPositionY();
      },
    },
  };
}
