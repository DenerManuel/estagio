import { CustomButton } from '../../../components/Button/CustomButton.js';
import { CustomContainer } from '../../../components/Container/CustomContainer.js';

export const WordContainerManager = {
  createWordContainer: function (appContainer) {
    const WORD_CONTAINER_SETTINGS = {
      width: appContainer.clientWidth,
      height: appContainer.clientHeight,
      backgroundColor: 0x241D7A,
      borderColor: 0xFB7302,
      borderWidth: 4,
      borderRadius: 40,
      horizontalAlign: 'center',
      verticalAlign: 'bottom',
      padding: {
        top: 350,
        left: 180,
        bottom: 130,
        right: 180
      }
    };
    return new CustomContainer(appContainer, WORD_CONTAINER_SETTINGS);
  },
  createText: function (wordContainer) {
    const wordText = new PIXI.Text('', {
      fontFamily: 'Lato',
      fontSize: 40,
      fill: 0xFFFFFF
    });
    wordText.anchor.set(0.5);
    wordText.position.set(
      wordContainer.settings.width / 2,
      wordContainer.settings.height / 2
    ); // Centraliza o texto no container
    return wordText;
  },
  createToggleButton: function () {
    const toggleButton = new CustomButton('T', {
      width: 70,
      height: 70,
      backgroundColor: 0xFB7302,
      borderRadius: 35,
      hoverColor: 0XFCD2AE
    });
    toggleButton.position.set(95, 360);
    return toggleButton;
  },
  createSoundButton: function () {
    const soundButton = new CustomButton('🔊', {
      width: 70,
      height: 70,
      backgroundColor: 0xFB7302,
      borderRadius: 35,
      hoverColor: 0XFCD2AE
    });
    soundButton.position.set(667, 360);
    return soundButton;
  }
}