export function createStyleProxy(componentRef) {
  return {
    desktop: componentRef.desktop,
    mobile: componentRef.mobile,
  };
}
