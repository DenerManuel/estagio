import { PIXIConfiguration } from './PIXIConfiguration.js';
import { ScreenManager } from './ScreenManager.js';
import { NavigationManager } from './NavigationManager.js';
import { categoriesDataMock } from '../data/datasMock.js';

export class GameManager {
  constructor(gameContainerID, gameCategories = categoriesDataMock) {
    this.app = null;
    this.screens = null;
    this.gameContainerID = gameContainerID;
    this.gameCategories = gameCategories;

    this._initializeApplication();
  }

  async _initializeApplication() {
    await this._preparePIXI();
    await this._loadCategories();
    await this._prepareScreens();
    await this._prepareNavigation();
    this._loadInitialScreen();

  }

  // Preparação do PIXI.
  async _preparePIXI() {
    try {
      this._initializePIXI();
      this._validatePIXIInitialization();
    } catch (error) {
      this._handlePIXIError(error);
    }
  }
  _initializePIXI() {
    const pixiConfig = new PIXIConfiguration(this.gameContainerID);
    this.app = pixiConfig.initialize();
  }
  _validatePIXIInitialization() {
    if (!this.app) {
      throw new Error('Falha na inicialização do PIXI');
    }
  }
  _handlePIXIError(error) {
    console.error('Erro na configuração do PIXI:', error);
    this._handleCriticalFailure(); // Chama o método de falha crítica
  }

  // Carregamento de categorias.
  async _loadCategories() {
    try {
      const imagePaths = this._getImagePaths();
      await this._loadAssets(imagePaths);
      console.log("Todas as categorias foram carregadas com sucesso.");
    } catch (error) {
      console.error("Erro ao carregar as categorias:", error);
      this._handleCriticalFailure(); // Chama o método de falha crítica
    }
  }
  _getImagePaths() {
    const imagePaths = [];
    this.gameCategories.forEach(category => {
      category.items.forEach(item => {
        const imagePath = `assets/categories/${category.title}/${item.image}`;
        imagePaths.push(imagePath);
      })
      
    });
    return imagePaths;
  }
  async _loadAssets(imagePaths) {
    await PIXI.Assets.load(imagePaths);
  }

  // Preparação das telas e navegação.
  async _prepareScreens() {
    this.screenManager = new ScreenManager(this.app);
    this.screenManager.preloadScreens(this.gameCategories);
  }
  async _prepareNavigation() {
    new NavigationManager(this.screenManager).configureNavigation();
  }

  // Carregamento da tela inicial.
  _loadInitialScreen() {
    this.screenManager.loadScreen('categoriesScreen');
  }

  // Lidar com falhas críticas.
  _handleCriticalFailure() { // Caso ocorra um erro crítico, exibe uma mensagem de erro na tela
    const gameContainerID = document.getElementById(this.gameContainerID);
    if (gameContainerID) {
      gameContainerID.innerHTML = this._generateErrorHTML();
    }
  }
  _generateErrorHTML() {
    return `
      <div class="erro-jogo">
        <h2>Erro ao carregar o jogo</h2>
        <p>Recarregue a página ou tente novamente mais tarde</p>
      </div>
    `;
  }
}

// Inicializa a aplicação (será mudado futuramente)
const applicationContainer = document.getElementById('game-container');
if (applicationContainer) {
  try {
    new GameManager('game-container');
  } catch (error) {
    console.error('Erro na inicialização do jogo:', error);
  }
}