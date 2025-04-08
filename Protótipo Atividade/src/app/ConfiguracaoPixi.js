/**
 * Classe responsável pela configuração e inicialização do PIXI.Application
 * - Cria e configura o renderizador (WebGL/Canvas)
 * - Gerencia a responsividade do viewport
 * - Aplica estilos básicos ao canvas
 */
export class ConfiguracaoPixi {
  /**
   * @param {string} containerId - ID do elemento HTML container
   * @param {Object} [opcoes] - Opções de configuração
   * @param {number} [opcoes.ratio=16/11] - Proporção de aspecto desejada (largura/altura)
   * @param {boolean} [opcoes.antialias=true] - Suavização de bordas
   */
  constructor(containerId, opcoes = {}) {
    this.container = document.getElementById(containerId);

    if (!this.container) {
      throw new Error(`Container com ID "${containerId}" não encontrado`);
    }

    this.opcoes = {
      ratio: 16 / 11,
      backgroundColor: 0x241D7A,
      antialias: true,
      ...opcoes
    };

    this.app = null;
    this._configurarResizeObserver();
  }

  /**
   * Inicializa o PIXI.Application com configurações responsivas
   * @returns {PIXI.Application} Instância do PIXI.Application
   */
  inicializar() {
    const { largura, altura } = this._calcularTamanho();
    this.app = new PIXI.Application({
      largura,
      altura,
      backgroundColor: this.opcoes.backgroundColor,
      antialias: this.opcoes.antialias,
      resolution: window.devicePixelRatio || 1
    });

    this._aplicarEstilos(this.app.view);
    this.container.appendChild(this.app.view);

    window.addEventListener('resize', () => this._redimensionar());
    this._redimensionar(); // Redimensiona imediatamente

    return this.app;
  }

  /**
   * Calcula o tamanho do viewport mantendo o aspect ratio
   * @private
   * @returns {Object} Largura e altura calculadas
   */
  _calcularTamanho() {
    const containerWidth = this.container.clientWidth;
    const containerHeight = this.container.clientHeight;

    let width, height;

    if (containerWidth / containerHeight > this.opcoes.ratio) {
      // Container mais largo que o ratio desejado
      height = containerHeight;
      width = height * this.opcoes.ratio;
    } else {
      // Container mais alto que o ratio desejado
      width = containerWidth;
      height = width / this.opcoes.ratio;
    }

    return { width, height };
  }

  /**
   * Redimensiona o renderizador mantendo a proporção
   * @private
   */
  _redimensionar() {
    if (!this.app) return;

    const { width, height } = this._calcularTamanho();

    this.app.renderer.resize(width, height);
    this.app.view.style.width = `${width}px`;
    this.app.view.style.height = `${height}px`;
  }

  /**
   * Aplica estilos visuais ao canvas
   * @private
   * @param {HTMLCanvasElement} view - Elemento canvas do PIXI
   */
  _aplicarEstilos(view) {
    view.style.borderRadius = '40px';
    view.style.overflow = 'hidden';
    view.style.display = 'block';
    view.style.margin = '0 auto';
  }

  /**
   * Configura o ResizeObserver para redimensionamento automático
   * @private
   */
  _configurarResizeObserver() {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this._redimensionar());
      this.resizeObserver.observe(this.container);
    }
  }

  /**
   * Destrói a instância e limpa recursos
   */
  destruir() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    window.removeEventListener('resize', this._redimensionar);
    if (this.app) {
      this.app.destroy(true);
    }
  }
}