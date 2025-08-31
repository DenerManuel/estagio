import { homeScreenStyles } from "../../../screens-components-styles/home-screen/home-screen-components-styles.js";

export function changeComponentsStyles(components) {
  components.title.style.fontSize = homeScreenStyles.title.mobile.fontSize;
  components.startButton.updateStyle(homeScreenStyles.startButton.mobile);
  components.chooseButton.updateStyle(homeScreenStyles.chooseButton.mobile);
  components.reviewButton.updateStyle(homeScreenStyles.reviewButton.mobile);
}