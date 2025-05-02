import { CustomButton } from "../../../components/Button/CustomButton.js";

export const createNavigationButtons = {
  createPreviousButton: function () {
    const previousButton = new CustomButton('◀', {
      width: 100,
      height: 100,
      backgroundColor: 0xFB7302,
      borderRadius: 50,
      hoverColor: 0XFCD2AE
    });
    previousButton.position.set(150, 140);
    return previousButton;
  },
  createNextButton: function () {
    const nextButton = new CustomButton('▶', {
      width: 100,
      height: 100,
      backgroundColor: 0xFB7302,
      borderRadius: 50,
      hoverColor: 0XFCD2AE
    });
    nextButton.position.set(580, 140);
    return nextButton;
  }
}