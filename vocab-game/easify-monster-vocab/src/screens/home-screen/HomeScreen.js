import { Screen } from '../../components/screen/Screen.js';
import { HomeScreenComponentsResponsive } from '../../styles/screens-components-responsive/home-screen/home-screen-components-responsive.js';
import * as HomeComponents from './components/home-screen-components.js';

/**
 * @class HomeScreen
 * @extends Screen
 * @description A tela inicial (menu principal) do jogo.
 * Exibe o título do jogo e os botões de navegação principais:
 * Iniciar, Escolher Categoria e Revisar.
 */
export class HomeScreen extends Screen {
  /**
   * Cria uma instância da tela inicial.
   */
  constructor(category) {
    super();
  }

  /**
   * @private
   * Cria e posiciona todos os componentes visuais da tela inicial,
   * como o título e os botões.
   */
  _createComponents() {
    // Cria o título e os botões da tela inicial.
    this.title = new HomeComponents.Title();
    this.startButton = new HomeComponents.StartButton();
    this.chooseButton = new HomeComponents.ChooseButton();
    this.reviewButton = new HomeComponents.ReviewButton();

    // Adiciona todos os componentes à tela de uma só vez.
    this.addChild(this.title, this.startButton, this.chooseButton, this.reviewButton);
  }

  /**
   * @private
   * Configura a responsividade dos componentes para se adaptarem
   * a diferentes tamanhos de tela.
   */
  _setResponsive() {
    this.componentsResponsive = HomeScreenComponentsResponsive.getInstance({
      title: this.title,
      startButton: this.startButton,
      chooseButton: this.chooseButton,
      reviewButton: this.reviewButton,
    });
  }
}
