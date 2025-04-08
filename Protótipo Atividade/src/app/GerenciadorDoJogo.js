/**
 * Classe principal que orquestra o funcionamento do jogo
 * Responsável por:
 * - Inicializar o motor gráfico (PIXI)
 * - Gerenciar o ciclo de vida das telas
 * - Coordenar a navegação entre telas
*/
import { ConfiguracaoPixi } from './ConfiguracaoPixi.js';
import { GerenciadorTelas } from './GerenciadorTelas.js';
import { GerenciadorNavegacao } from './GerenciadorNavegacao.js';
import { dadosCategoriasMock } from './data/dadosMock.js';

export class GerenciadorDoJogo {
  /**
   * @param {string} containerId - ID do elemento HTML que hospedará o jogo
   * @param {Array<Categoria>} dadosCategorias - Dados das categorias para as telas
   */
  constructor(containerId, dadosCategorias = dadosCategoriasMock) {
    /** @type {PIXI.Application} - Instância do PIXI Application */
    this.app = null;

    /** @type {GerenciadorTelas} - Controlador das telas do jogo*/
    this.telas = null;

    /** @type {string} - ID do container HTML */
    this.containerId = containerId;

    /** @type {Array<Categoria>} - Dados das categorias do jogo */
    this.dadosCategorias = dadosCategorias;

    this._inicializar();
  }

  /**
   * Fluxo de inicialização do jogo
   * @private
   */
  _inicializar() {
    this._configurarPIXI();
    this._prepararTelas();
    this._iniciarNavegacao();
    this._carregarTelaInicial();
  }

  /**
   * Configura a instância do PIXI.js
   * @private
  */
  _configurarPIXI() {
    try {
      const config = new ConfiguracaoPixi(this.containerId);
      this.app = config.inicializar();

      if (!this.app) {
        throw new Error('Falha na inicialização do PIXI');
      }
    } catch (erro) {
      console.error('Erro na configuração do PIXI:', erro);
      this._lidarComFalhaCritica();
    }
  }

  /**
   * Prepara todas as telas do jogo
   * @private
   */
  _prepararTelas() {
    this.telas = new GerenciadorTelas(this.app);
    this.telas.preCarregarTelas(this.dadosCategorias);
  }

  /**
   * Configura o sistema de navegação entre telas
   * @private
   */
  _iniciarNavegacao() {
    const navegacao = new GerenciadorNavegacao(this.telas);
    navegacao.configurar();
  }

  /**
   * Carrega a tela inicial do jogo
   * @private
   */
  _carregarTelaInicial() {
    this.telas.carregarTela('inicial');
  }

  /**
   * Lida com erros críticos de inicialização
   * @private
   */
  _lidarComFalhaCritica() {
    const container = document.getElementById(this.containerId);
    if (container) {
      container.innerHTML = `
        <div class="erro-jogo">
          <h2>Erro ao carregar o jogo</h2>
          <p>Recarregue a página ou tente novamente mais tarde</p>
        </div>
      `;
    }
  }
}

// Inicialização condicional
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('game-container');
  if (container) {
    try {
      new GerenciadorDoJogo('game-container');
    } catch (erro) {
      console.error('Erro na inicialização do jogo:', erro);
    }
  }
})
