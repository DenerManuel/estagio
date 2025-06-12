import { categoriesDataMock } from '../../data/datasMock.js';
import { loadCategories } from './loadCategories.js';
import { loadCategoriesScreenCards } from './categoriesScreenCardsCreator.js';
import { preparePIXI } from './preparePIXI.js';
import { prepareScreens } from './prepareScreens.js';
import { prepareNavigation } from './navigation.js';
import { handleCriticalFailure } from './errorHandling.js';

const DEFAULT_CONTAINER_ID = 'game-container';
const INITIAL_SCREEN = 'homeScreen';

export class GameManager {
  constructor(gameContainerID = DEFAULT_CONTAINER_ID, gameCategories = categoriesDataMock) {
    this._validateParameters(gameContainerID, gameCategories);

    this.app = null;
    this.screens = null;
    this.screenManager = null;
    this.categoriesScreenCards = null;
    this.gameContainerID = gameContainerID;
    this.gameCategories = gameCategories;

    this._initializeApplication();
  }
  _validateParameters(containerID, categories) {
    if (!containerID || typeof containerID !== 'string') {
      throw new Error('ID de contâiner inválido fornecido');
    }

    if (!Array.isArray(categories)) {
      throw new Error('"Categorias devem ser um array.');
    }
  }

  async _initializeApplication() {
    try {
      await this._loadGameData();
      await this._setupPIXI();
      await this._setupScreens();
      this._displayInitialScreen();
    } catch (error) {
      console.error('Sequência de inicialização falhou.', error);
      throw error;
    }
  }

  async _loadGameData() {
    await loadCategories(this.gameCategories, this.gameContainerID);
    this.categoriesScreenCards = await loadCategoriesScreenCards(this.gameCategories);
  }

  async _setupPIXI() {
    this.app = await preparePIXI(this.gameContainerID);
    
    if (!this.app) {
      throw new Error('Falha ao inicializar a aplicação PIXI.');
    }
  }

  async _setupScreens() {
    this.screenManager = await prepareScreens(
      this.app,
      this.gameCategories,
      this.categoriesScreenCards
    );
    
    await prepareNavigation(this.screenManager);
  }

  _displayInitialScreen() {
    if (!this.screenManager) {
      throw new Error('Gerenciador de tela não inicializado.');
    }
    
    this.screenManager.displayScreen(INITIAL_SCREEN);
  }

  _handleInitializationError(error) {
    handleCriticalFailure(this.gameContainerID)
    console.error('Falha na inicialização da aplicação.', error);
  }
}

// Inicializa a aplicação (será mudado futuramente)
const applicationContainer = document.getElementById('game-container');
if (applicationContainer) {
  try {
    const gameContainer = document.getElementById(DEFAULT_CONTAINER_ID);

    if (!gameContainer) {
      throw new Error(`Container element with ID "${DEFAULT_CONTAINER_ID}" not found`);
    }

    new GameManager(DEFAULT_CONTAINER_ID);
  } catch (error) {
    console.error('Erro na inicialização do jogo:', error);
  }
}