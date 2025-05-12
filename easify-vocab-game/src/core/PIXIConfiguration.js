export class PIXIConfiguration {
  constructor(applicationContainerID, pixiConfigurations = {}) {
    this.app = null;
    this.applicationContainer = document.getElementById(applicationContainerID);

    this._createConfigurations(pixiConfigurations);
    this._configureResizeObserver();
  }
  _createConfigurations(pixiConfigurations) {
    this.configurations = {
      aspectRatio: 16 / 11,
      backgroundColor: 0x241D7A, // Azul
      antialias: true, // Suavização de bordas
      ...pixiConfigurations
    }
  }

  // Inicializa o PIXI Application e configura o canvas
  initialize() {
    const { width, height } = this._calculateSize();
    this._createPIXIApplication(width, height);
    this._appendCanvasToContainer();
    this._setupResizeHandler();
    this._resize();
    return this.app;
  }
  _createPIXIApplication(width, height) {
    this.app = new PIXI.Application({
      width,
      height,
      backgroundColor: this.configurations.backgroundColor,
      antialias: this.configurations.antialias,
      autoDensity: true,
      resolution: 2
    });
    this._applyStyles(this.app.view);
  }
  _appendCanvasToContainer() {
    this.applicationContainer.appendChild(this.app.view);
  }
  _setupResizeHandler() {
    window.addEventListener('resize', () => this._resize());
  }

  // Calcula o tamanho do canvas com base no tamanho do container
  _calculateSize() {
    const containerWidth = this.applicationContainer.clientWidth;
    const containerHeight = this.applicationContainer.clientHeight;

    return this._calculateDimensions(containerWidth, containerHeight);
  }
  _calculateDimensions(containerWidth, containerHeight) {
    const aspectRatio = this.configurations.aspectRatio;

    if (containerWidth / containerHeight > aspectRatio) {
      const width = containerHeight * aspectRatio;
      const height = containerHeight;
      return { width, height };
    } else {
      const width = containerWidth;
      const height = containerWidth / aspectRatio;
      return { width, height };
    }
  }

  // Redimensiona o canvas para se ajustar ao tamanho do container
  _resize() {
    if (!this.app) return;
    const { width, height } = this._calculateSize();

    this.app.renderer.resize(width, height);
    this.app.view.style.width = `${width}px`;
    this.app.view.style.height = `${height}px`;
  }

  // Aplica estilos ao canvas
  _applyStyles(view) {
    view.style.borderRadius = '54px';
    view.style.overflow = 'hidden';
    view.style.width = '100%';
    view.style.height = '100%';
    view.style.position = 'absolute';
    view.style.display = 'block';
    view.style.margin = '0 auto';
  }

  // Configura o ResizeObserver para redimensionar o canvas quando o container mudar de tamanho
  _configureResizeObserver() {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this._resize();
      });
      this.resizeObserver.observe(this.applicationContainer);
    }
  }
}