export const starStyles = {
  desktop(index, activedStars) {
    return {
      fontSize: 80,
      fill: index < activedStars ? 0xffff00 : 0x999999,
    };
  },
  mobile(index, activedStars) {
    return {
      fontSize: 80,
      fill: index < activedStars ? 0xffff00 : 0x999999,
    };
  },
};
