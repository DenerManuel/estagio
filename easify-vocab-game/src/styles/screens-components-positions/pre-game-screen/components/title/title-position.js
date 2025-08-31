import { App } from "../../../../../app/App.js";

export const titlePosition = {
  desktop: {
    getPositionX: () => {
      return (App.getInstance().renderer.width / 2)
    },
    getPositionY: () => {
      return 60
    }
  },
  mobile: {
    getPositionX: () => {
      return (App.getInstance().renderer.width / 2)
    },
    getPositionY: () => {
      return 70
    }
  }
}
