import { CustomContainer } from '../../../components/Container/CustomContainer.js';

export const FooterContainerManager = {
  createFooterContainer: function (appContainer) {
    const FOOTER_CONTAINER_SETTINGS = {
      width: appContainer.clientWidth,
      height: appContainer.clientHeight,
      backgroundColor: 0x241D7A,
      borderColor: 0xFB7302,
      borderWidth: 4,
      borderRadius: 40,
      horizontalAlign: 'center',
      verticalAlign: 'bottom',
      padding: {
        top: 460,
        left: 330,
        bottom: 30,
        right: 330
      }
    };
    return new CustomContainer(appContainer, FOOTER_CONTAINER_SETTINGS);
  },
  createFooterTitle: function (footerContainer) {
    const footerTitle = new PIXI.Text('', {
      fontFamily: 'Lato',
      fontSize: 24,
      fill: 0xFFFFFF
    });
    footerTitle.anchor.set(0.5);
    footerTitle.position.set(
      footerContainer.settings.width / 2,
      footerContainer.settings.height / 2 - 15
    ); // Centraliza o texto no container
    return footerTitle;
  },
  createFooterQuantity: function (footerContainer) {
    const footerQuantity = new PIXI.Text('', {
      fontFamily: 'Lato',
      fontSize: 20,
      fill: 0xFFFFFF
    });
    footerQuantity.anchor.set(0.5);
    footerQuantity.position.set(
      footerContainer.settings.width / 2,
      footerContainer.settings.height / 2 + 20
    ); // Centraliza o texto no container
    return footerQuantity;
  },
}