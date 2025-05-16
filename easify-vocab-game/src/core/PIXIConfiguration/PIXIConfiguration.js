import { createPIXIConfigurations } from "./createPIXIConfigurations.js";
import { configureResizeObserver } from "./resizeObserver.js";
import { calculateSize } from "./resize.js";
import { applyStyles } from "./applyStyles.js";

export class PIXIConfiguration {
  constructor(applicationContainerID) {
    this.app = null;
    this.applicationContainer = document.getElementById(applicationContainerID);

    this.configurations = createPIXIConfigurations();
    configureResizeObserver(this);
  }

  // Inicializa o PIXI Application e configura o canvas
  initialize() {
    const { width, height } = calculateSize(this);
    this._createPIXIApplication(width, height);
    this._appendCanvasToContainer();
    this._setupResizeHandler();
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
    applyStyles(this.app.view);
  }
  _appendCanvasToContainer() {
    this.applicationContainer.appendChild(this.app.view);
  }

  // Redimensiona o canvas para se ajustar ao tamanho do container
  _resize() {
    if (!this.app) return;
    const { width, height } = calculateSize(this);

    this.app.renderer.resize(width, height);
    this.app.view.style.width = `${width}px`;
    this.app.view.style.height = `${height}px`;
  }
  _setupResizeHandler() {
    window.addEventListener('resize', () => this._resize());
  }
}