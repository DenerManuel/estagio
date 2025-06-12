import { CustomButton } from "../../../../components/button/CustomButton.js";

export const NavigationButtons = {
  createPreviousButton: function () {
    const previousButton = new CustomButton('◀', {
      width: 85,
      height: 85,
      backgroundColor: 0xFB7302,
      borderRadius: 50,
      hoverColor: 0XFCD2AE
    });
    previousButton.position.set(155, 350);
    return previousButton;
  },
  createNextButton: function () {
    const nextButton = new CustomButton('▶', {
      width: 85,
      height: 85,
      backgroundColor: 0xFB7302,
      borderRadius: 50,
      hoverColor: 0XFCD2AE
    });
    nextButton.position.set(590, 350);
    return nextButton;
  }
}