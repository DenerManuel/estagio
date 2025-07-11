import { categoriesDataMock } from '../data/categories-datas-mock.js';
import { preparePIXI } from './game-manager/preparePIXI.js';
import { validateApp } from '../validators/validateApp.js';
import { loadCategoriesInCache } from './game-manager/categories-manager/loadCategoriesInCache.js';
import { loadCategoriesScreenCards } from './game-manager/loadCategoriesScreenCards.js';
import { validateCategoriesScreenCards } from '../validators/categories/validateCategoriesScreenCards.js';
import { prepareScreens } from './game-manager/prepapreScreens.js'
import { validateScreenManager } from '../validators/validateScreenManager.js';
import { prepareNavigation } from './game-manager/navigation.js';
import { handleInitializationError } from '../errors/handleInitializationError.js'

const DEFAULT_CONTAINER_ID = 'game-container';
const INITIAL_SCREEN = 'homeScreen';

export class Game {
  app = null;
  screens = null;
  screenManager = null;
  navigationManager = null
  categoriesScreenCards = null;
  gameContainerID = DEFAULT_CONTAINER_ID;
  categories = null;

  constructor(gameCategories = categoriesDataMock) {
    this.categories = gameCategories;

    this._init();
  }

  async _init() {
    try {
      await this._setupPIXI();
      await this._loadGameData();
      await this._createScreens();
      
      this._displayInitialScreen();
      console.log("Aplicação iniciada com sucesso!")
    } catch (error) {
      handleInitializationError()
    }
  }

  async _setupPIXI() {
    this.app = await preparePIXI(this.gameContainerID);
    validateApp(this.app)
  }

  async _loadGameData() {
    await loadCategoriesInCache(this.categories, this.gameContainerID);
    
    this.categoriesScreenCards = await loadCategoriesScreenCards(this.categories);
    validateCategoriesScreenCards(this.categoriesScreenCards)
  }

  async _createScreens() {
    this.screenManager = await prepareScreens(
      this.app,
      this.categories,
      this.categoriesScreenCards
    );
    
    validateScreenManager(this.screenManager)
    this.app.screenManager = this.screenManager;
    
    await prepareNavigation(this.screenManager);
  }

  _displayInitialScreen() {
    if (!this.screenManager) {
      throw new Error('Erro interno: Gerenciador de tela não inicializado antes de exibir a tela inicial.');
    }
    this.screenManager.displayScreen(INITIAL_SCREEN);
  }
}