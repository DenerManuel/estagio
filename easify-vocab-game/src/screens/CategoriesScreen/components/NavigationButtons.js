import { CustomButton } from "../../../components/Button/CustomButton.js";

export const NavigationButtons = {
  createPreviousButton: function () {
    const previousButton = new CustomButton('◀', {
      width: 80,
      height: 80,
      backgroundColor: 0xFB7302,
      borderRadius: 50,
      hoverColor: 0XFCD2AE
    });
    previousButton.position.set(20, 270);
    return previousButton;
  },
  createNextButton: function () {
    const nextButton = new CustomButton('▶', {
      width: 80,
      height: 80,
      backgroundColor: 0xFB7302,
      borderRadius: 50,
      hoverColor: 0XFCD2AE
    });
    nextButton.position.set(732, 270);
    return nextButton;
  }
}