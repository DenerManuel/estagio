import { categoriesDataMock } from '../../data/datasMock.js';
import { loadCategories } from './loadCategories.js';
import { preparePIXI } from './preparePIXI.js';
import { prepareScreens } from './prepareScreens.js';
import { prepareNavigation } from './navigation.js';

export class GameManager {
  constructor(gameContainerID, gameCategories = categoriesDataMock) {
    this.app = null;
    this.screens = null;
    this.gameContainerID = gameContainerID;
    this.gameCategories = gameCategories;

    this._initializeApplication();
  }

  async _initializeApplication() {
    await loadCategories(this.gameCategories, this.gameContainerID);
    this.app = await preparePIXI(this.gameContainerID);
    this.screenManager = await prepareScreens(this.app, this.gameCategories);
    await prepareNavigation(this.screenManager);
    this._displayInitialScreen();
  }

  // Carregamento da tela inicial.
  _displayInitialScreen() {
    this.screenManager.displayScreen('homeScreen');
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