import { TelaInicial } from '../telas/TelaInicial.js'
import { TelaRevisao } from '../telas/TelaRevisao.js'
import { GerenciadorEstado } from './core/GerenciadorEstado.js';

/**
 * Gerenciador centralizado de telas do jogo
 * Responsável por:
 * - Registrar e pré-carregar todas as telas
 * - Controlar transições entre telas
 * - Integrar com o sistema de estado global
 */
export class GerenciadorTelas {
  /**
   * @param {PIXI.Application} app - Instância do PIXI.Application
   * @param {GerenciadorEstado} [gerenciadorEstado] - Opcional para integração com estado
   */
  constructor(app, gerenciadorEstado = null) {
    /** @type {PIXI.Application} */
    this.app = app;

    /** @type {Object.<string, PIXI.Container>} */
    this.telas = {};

    /** @type {PIXI.Container|null} */
    this.telaAtual = null;

    /** @type {GerenciadorEstado|null} */
    this.estado = gerenciadorEstado;
  }

  /**
   * Registra e pré-carrega todas as telas disponíveis
   * @param {Array} dadosCategorias - Dados para telas que necessitam (como TelaRevisao)
   */

  preCarregarTelas(dadosCategorias = []) {
    this.telas = {
      inicial: new TelaInicial(this.app),
      revisao: new TelaRevisao(this.app, dadosCategorias)
      // Novas telas podem ser adicionadas aqui
    };

    // Opcional: Pré-carrega assets das telas
    // this._preCarregarAssets();
  }

  /**
   * Carrega uma tela específica
   * @param {string} nomeTela - Nome da tela registrada
   * @param {Object} [dados] - Dados adicionais para a tela
   */

  carregarTela(nomeTela, dados = {}) {
    if (!this.telas[nomeTela]) {
      console.error(`Tela ${nomeTela} não registrada`);
      return;
    }

    // Remove tela atual se existir
    if (this.telaAtual) {
      this.app.stage.removeChild(this.telaAtual);
      
      // Opcional: Notifica a tela que será desmontada
      if (this.telaAtual.onDesmontar) {
        this.telaAtual.onDesmontar();
      }
    }

    // Atualiza tela atual
    this.telaAtual = this.telas[nomeTela];
    this.app.stage.addChild(this.telaAtual);

    // Opcional: Inicializa tela se necessário
    if (this.telaAtual.onMontar) {
      this.telaAtual.onMontar(dados);
    }

    // Atualiza estado global se existir
    if (this.estado) {
      this.estado.atualizar({ 
        telaAtual: nomeTela,
        ...dados
      });
    }
  }

  /**
   * Pré-carrega assets das telas (opcional)
   * @private
   */
  _preCarregarAssets() {
    // Exemplo: pode carregar texturas comuns a várias telas
    // PIXI.Loader.shared.add(...);
  }

  /**
   * Destrói e limpa todas as telas
   */
  destruir() {
    for (const [nome, tela] of Object.entries(this.telas)) {
      if (tela.destruir) tela.destruir();
      this.app.stage.removeChild(tela);
    }
    this.telas = {};
    this.telaAtual = null;
  }
}