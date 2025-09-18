import { Container } from 'pixi.js';

/**
 * @abstract
 * Classe base para todas as telas do jogo.
 * Fornece uma estrutura comum e um ciclo de vida para as telas.
 * Cada tela que herda desta classe deve implementar os métodos "abstratos".
 */
export class Screen extends Container {
  constructor() {
    super();

    // Garante que a classe não seja instanciada diretamente.
    if (this.constructor === Screen) {
      throw new Error("A classe abstrata 'Screen' não pode ser instanciada diretamente.");
    }

    // Chama os métodos do ciclo de vida na ordem correta.
    this._createComponents();
    this._setupEventListeners();
    this._setResponsive();
  }

  /**
   * @abstract
   * Cria e adiciona os componentes visuais da tela.
   * Deve ser implementado pela classe filha.
   */
  _createComponents() {
    throw new Error("O método '_createComponents()' deve ser implementado.");
  }

  /**
   * Configura os listeners de eventos para os componentes da tela.
   * Pode ser sobrescrito pela classe filha se necessário.
   */
  _setupEventListeners() {
    // Implementação padrão vazia, pois nem todas as telas podem ter eventos.
  }

  /**
   * @abstract
   * Inicializa a lógica de responsividade para os componentes da tela.
   * Deve ser implementado pela classe filha.
   */
  _setResponsive() {
    throw new Error("O método '_setResponsive()' deve ser implementado.");
  }

  /**
   * Atualiza a tela. Chamado a cada frame pelo loop principal do jogo.
   * @param {number} delta - O tempo, em segundos, desde o último frame.
   */
  update(delta) {
    // A ser implementado pelas telas filhas, se necessário para animações ou lógica contínua.
  }
}
