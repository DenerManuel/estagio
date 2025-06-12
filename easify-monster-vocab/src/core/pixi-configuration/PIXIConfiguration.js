import { createPIXIConfigurations } from "./createPIXIConfigurations.js";
import { configureResizeObserver } from "./resizeObserver.js";
import { calculateSize } from "./resize.js";
import { applyStyles } from "./applyStyles.js";

export class PIXIConfiguration {
  constructor(applicationContainerID) {
    this._validateParameter(applicationContainerID)

    this.app = null;
    this.applicationContainer = document.getElementById(applicationContainerID);
    this._validateAplicationContainer(applicationContainerID);

    this.configurations = createPIXIConfigurations();
    this._setupResizeHandlers();
    // configureResizeObserver(this);
  }
  _validateParameter(applicationContainerID) {
    if (!applicationContainerID) {
      throw new Error('ID do contêiner é obrigatório.');
    }
  }
  _validateAplicationContainer(applicationContainerID) {
    if (!this.applicationContainer) {
      throw new Error(`"Contêiner com ID ${applicationContainerID} não encontrado.`);
    }
  }

  // Inicializa o PIXI Application e configura o canvas
  initialize() {
    try {
      const { width, height } = calculateSize(this);
      this._createPIXIApplication(width, height);
      this._appendCanvasToContainer();
      return this.app;
    } catch (error) {
      console.error('PIXI initialization failed:', error);
      throw error;
    }
  }
  _setupResizeHandlers() {
    configureResizeObserver(this);
    window.addEventListener('resize', () => this._debouncedResize());
  }

  _createPIXIApplication(width, height) {
    try {
      this.app = new PIXI.Application({
        width,
        height,
        backgroundColor: this.configurations.backgroundColor,
        antialias: this.configurations.antialias,
        autoDensity: true,
        resolution: 2 || window.devicePixelRatio,
      });
      applyStyles(this.app.view);
    } catch (error) {
      throw new Error(`Falha na criação da aplicação PIXI: ${error.message}`);
    }
  }
  _appendCanvasToContainer() {
    this.applicationContainer.replaceChildren();
    this.applicationContainer.appendChild(this.app.view);
  }

  _debouncedResize = _debounce(() => this._resize(), 100);

  // Redimensiona o canvas para se ajustar ao tamanho do container
  _resize() {
    if (!this.app?.renderer) return;
    
    const { width, height } = calculateSize(this);
    this.app.renderer.resize(width, height);
    
    // Mantém proporções físicas (evita blur)
    this.app.view.style.width = `${width}px`;
    this.app.view.style.height = `${height}px`;
  }
  _setupResizeHandler() {
    window.addEventListener('resize', () => this._resize());
  }
}

function _debounce(fn, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
}